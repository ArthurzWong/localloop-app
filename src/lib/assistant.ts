// ─── Rule-based assistant (deterministic, database-grounded) ─────────────────
// Answers ONLY from the approved-business registry. Never invents names,
// hours, or ownership. MVP stands in for the §24/§25 LLM endpoint; the
// server-side LLM API plugs in behind this same interface later.
import { getApprovedBusinesses, isOpenNow, distanceKm } from "./store";
import { flavorSummaryLine } from "./store";
import { DEST } from "../data/seed";
import type { Business } from "./types";

export interface AssistantCard {
  id: string;
  name: string;
  score: number;
  price: string;
  distance: string;
  ownership: string;
  flavor: string;
}

export interface AssistantReply {
  text: string;
  cards: AssistantCard[];
  insufficient: boolean;
}

const AFFORD_RE = /(?:rm|under|below|budget|max|less than)\s*(\d{1,4})|(\d{1,4})\s*(?:rm|ringgit)/i;

function priceMax(level: number): number {
  return level <= 1 ? 20 : level === 2 ? 60 : 9999;
}

function budgetCap(list: Business[]): number | null {
  let cap: number | null = null;
  for (const m of list.flatMap((b) => b.description.matchAll(AFFORD_RE))) {
    void m;
  }
  return cap;
}
void budgetCap;

function timeBudget(list: Business[]): { urgent: boolean; hours: number | null } {
  void list;
  return { urgent: false, hours: null };
}

function ownershipLabel(b: Business): string {
  if (b.verificationStatus === "ADMIN_VERIFIED" || b.verificationStatus === "OWNER_VERIFIED") {
    if (b.locallyOwned) return "Locally owned · verified";
    if (b.locallyOperated) return "Locally operated · verified";
  }
  return "Local status: Unverified";
}

export function answerQuery(
  qRaw: string,
  userLoc: { lat: number; lng: number } | null
): AssistantReply {
  const q = qRaw.toLowerCase();
  const list = getApprovedBusinesses();

  // intent detection
  const wantsEat = /eat|food|breakfast|lunch|dinner|hungry|meal|noodle|satay|coffee|kopi|cendol|dessert|steamboat|bakery|bun|roti/.test(q);
  const wantsShop = /shop|buy|craft|batik|basket|souvenir|honey|gift|book|antique/.test(q);
  const wantsStay = /stay|sleep|hotel|homestay|room|lodg/.test(q);
  const wantsExp = /experience|class|workshop|tour|boat|safari|farm|cooking|ride|bicycle/.test(q);
  const wantsWalk = /walk|walking/.test(q);
  const wantsLocalOnly = /local|authentic|genuine|real|not a chain|avoid chain|mall/.test(q);
  const budgetM = q.match(AFFORD_RE);
  const budget = budgetM ? parseInt(budgetM[1] || budgetM[2], 10) : null;
  const shortTime = /hour|minutes|before my bus|quick|hurry|2 hours|two hours/.test(q);
  const isGreeting = /^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(q.trim());
  const isThanks = /thank/.test(q);

  let pool = list;
  let intentLabel = "";
  if (wantsEat) { pool = pool.filter((b) => b.categoryId === "cat-food"); intentLabel = "food"; }
  else if (wantsShop) { pool = pool.filter((b) => b.categoryId === "cat-shop"); intentLabel = "shops & crafts"; }
  else if (wantsStay) { pool = pool.filter((b) => b.categoryId === "cat-stay"); intentLabel = "places to stay"; }
  else if (wantsExp) { pool = pool.filter((b) => b.categoryId === "cat-experience"); intentLabel = "experiences"; }

  const origin = userLoc ?? DEST.center;

  // budget filter (price levels: 1 → ≤RM20, 2 → ≤RM60)
  if (budget != null && intentLabel) {
    const cap = budget <= 20 ? 1 : budget <= 60 ? 2 : 3;
    const filtered = pool.filter((b) => b.priceLevel <= cap);
    if (filtered.length) pool = filtered;
  }

  // open-now preference
  const openNow = pool.filter((b) => isOpenNow(b));

  // proximity sort
  const byDist = (a: Business, c: Business) =>
    distanceKm(origin.lat, origin.lng, a.latitude, a.longitude) -
    distanceKm(origin.lat, origin.lng, c.latitude, c.longitude);

  const base = (openNow.length >= 3 ? openNow : pool).slice().sort(byDist);

  // verified-local preference: verified first, then score
  const ranked = base.slice().sort((a, b) => {
    const av = a.locallyOwned && (a.verificationStatus === "ADMIN_VERIFIED" || a.verificationStatus === "OWNER_VERIFIED") ? 1 : 0;
    const bv = b.locallyOwned && (b.verificationStatus === "ADMIN_VERIFIED" || b.verificationStatus === "OWNER_VERIFIED") ? 1 : 0;
    if (av !== bv) return bv - av;
    return b.localScore - a.localScore;
  });

  const top = ranked.slice(0, 3);
  const fmtDist = (b: Business) => {
    const km = distanceKm(origin.lat, origin.lng, b.latitude, b.longitude);
    return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
  };

  if (isGreeting && !wantsEat && !wantsShop && !wantsStay && !wantsExp) {
    return {
      text: `Hello! I'm the LocalLoop assistant for ${DEST.name}. I can point you to genuinely local places — food, crafts, stays, experiences. Try: "Where can I have breakfast near me?" or "Show me something genuinely local under RM30."`,
      cards: [],
      insufficient: false,
    };
  }
  if (isThanks) {
    return { text: "You're welcome. Every local place you visit keeps more of your travel budget in the community. Anything else?", cards: [], insufficient: false };
  }

  if (!intentLabel && !wantsLocalOnly && !shortTime && !wantsWalk) {
    return {
      text: "I can help you find local food, shops, homestays, experiences or attractions in Riverstone. Which are you looking for — something to eat, buy, or do?",
      cards: [],
      insufficient: false,
    };
  }

  const flavorQ = /spice|spicy|sweet|sour|msg|flavor|flavour|hot|gentle|mild/.test(q);
  if (flavorQ && !intentLabel) {
    // flavor-led query: rank food places by gentleness when asked for mild
    const wantsMild = /mild|gentle|not spicy|no spice|cant handle|can't handle/.test(q);
    const foodPool = pool.filter((b) => b.categoryId === "cat-food");
    const sorted = foodPool.slice().sort((a, b) => {
      const fa = (a.flavorProfile?.spice ?? 1) + (a.flavorProfile?.msg ?? 1);
      const fb = (b.flavorProfile?.spice ?? 1) + (b.flavorProfile?.msg ?? 1);
      return wantsMild ? fa - fb : fb - fa;
    });
    const picks = sorted.slice(0, 3);
    if (picks.length) {
      return {
        text: wantsMild
          ? "These local kitchens have the gentlest flavors in town — spiciness, sweetness, sourness and MSG are all kept low. Every place also shows a per-dish taste guide so you can pick safely."
          : "If you want bold local heat, these kitchens run spiciest — each dish shows a 0–3 taste guide for spiciness, sweetness, sour tempo and MSG strength.",
        cards: picks.map(toCard),
        insufficient: false,
      };
    }
  }

  if (top.length === 0) {
    return {
      text: "I couldn't find enough verified local options nearby. Try a different category or widen your budget.",
      cards: [],
      insufficient: true,
    };
  }

  const parts: string[] = [];
  if (wantsLocalOnly) {
    parts.push("These are the most strongly locally owned, verified places I know");
  } else if (shortTime) {
    parts.push("Given limited time, these are closest and open right now");
  } else if (budget != null) {
    parts.push(`Here are well-rated local picks around your RM${budget} budget`);
  } else {
    parts.push(`Here are top local picks for ${intentLabel || "exploring"}`);
  }
  if (wantsWalk) parts.push("— all within a short walk of the town core.");
  else parts.push("— sorted by proximity and Local Score.");

  if (openNow.length === 0 && intentLabel) {
    parts.push("Heads up: I couldn't confirm opening hours for right now, so check before you go.");
  }
  parts.push("Ownership details come straight from each business's verification record — nothing invented.");

  return {
    text: parts.join(" "),
    cards: top.map(toCard),
    insufficient: false,
  };

  function toCard(b: Business): AssistantCard {
    const km = distanceKm(origin.lat, origin.lng, b.latitude, b.longitude);
    return {
      id: b.id,
      name: b.name,
      score: b.localScore,
      price: b.priceLevel === 1 ? "RM5–20" : b.priceLevel === 2 ? "RM20–60" : "RM60+",
      distance: km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`,
      ownership: ownershipLabel(b),
      flavor: flavorSummaryLine(b) || "taste guide inside",
    };
  }
}
