// ─── Data layer ──────────────────────────────────────────────────────────────
// In-browser store with localStorage persistence. Every async signature mirrors
// a future Supabase client, so the backend can be swapped behind this module.
import { BUSINESSES, CATEGORIES, REVIEWS, ROUTES, PRICE_ESTIMATES } from "../data/seed";
import { DEST } from "../data/seed";
import type {
  Business, BusinessCategory, FavoriteEntry, ImpactEvent, Review, SubmissionPayload, WalkRoute,
} from "./types";
import { computeScore } from "./types";

const LS_KEY = "localloop.v1";

interface PersistedState {
  businesses: Business[];
  reviews: Review[];
  favorites: FavoriteEntry[];
  impact: ImpactEvent[];
  visits: string[]; // businessIds the tourist marked as visited
}

function load(): PersistedState {
  const fallback: PersistedState = {
    businesses: BUSINESSES,
    reviews: REVIEWS,
    favorites: [],
    impact: [],
    visits: [],
  };
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      businesses: parsed.businesses?.length ? parsed.businesses : BUSINESSES,
      reviews: parsed.reviews ?? REVIEWS,
      favorites: parsed.favorites ?? [],
      impact: parsed.impact ?? [],
      visits: parsed.visits ?? [],
    };
  } catch {
    return fallback;
  }
}

let state: PersistedState = load();

function persist() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — session-only mode */
  }
  try {
    window.dispatchEvent(new CustomEvent("localloop:change"));
  } catch {
    /* non-DOM context */
  }
}

export function resetDemoData() {
  state = { businesses: BUSINESSES, reviews: REVIEWS, favorites: [], impact: [], visits: [] };
  persist();
}

// ─── Read API ────────────────────────────────────────────────────────────────

export const getDestination = () => DEST;

export function getCategories(): BusinessCategory[] {
  return CATEGORIES;
}

export function getApprovedBusinesses(): Business[] {
  return state.businesses.filter((b) => b.status === "approved");
}

export function businessesInCategory(list: Business[], categoryId: string): Business[] {
  return list.filter((b) => b.categoryId === categoryId || (b.alsoCategories ?? []).includes(categoryId));
}

export function getAllBusinesses(): Business[] {
  return state.businesses;
}

export function getBusinessById(id: string): Business | undefined {
  return state.businesses.find((b) => b.id === id);
}

export function getReviewsFor(businessId: string): Review[] {
  return state.reviews
    .filter((r) => r.businessId === businessId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getAllReviews(): Review[] {
  return [...state.reviews].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getRoutes(): WalkRoute[] {
  return ROUTES;
}

export function getRouteById(id: string): WalkRoute | undefined {
  return ROUTES.find((r) => r.id === id);
}

export function getFavoriteIds(): string[] {
  return state.favorites.map((f) => f.businessId);
}

export function getFavoriteBusinesses(): Business[] {
  return getFavoriteIds()
    .map((id) => getBusinessById(id))
    .filter((b): b is Business => !!b);
}

export function isFavorite(businessId: string): boolean {
  return state.favorites.some((f) => f.businessId === businessId);
}

export function getVisitedIds(): string[] {
  return [...state.visits];
}

export function getImpactEvents(): ImpactEvent[] {
  return [...state.impact].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export interface ImpactSummary {
  businessesVisited: number;
  estimatedSpendRM: number;
  thisTripRM: number;
}

export function getImpactSummary(): ImpactSummary {
  const events = state.impact;
  const totalRM = events.reduce((s, e) => s + e.estimatedSpendRM, 0);
  const now = Date.now();
  const tripRM = events
    .filter((e) => now - new Date(e.createdAt).getTime() < 14 * 24 * 3600 * 1000)
    .reduce((s, e) => s + e.estimatedSpendRM, 0);
  return {
    businessesVisited: new Set(events.map((e) => e.businessId)).size,
    estimatedSpendRM: totalRM,
    thisTripRM: tripRM,
  };
}

// ─── Geo helpers ─────────────────────────────────────────────────────────────

export function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function distanceFromCenter(b: Business): number {
  return distanceKm(DEST.center.lat, DEST.center.lng, b.latitude, b.longitude);
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m away`;
  return `${km.toFixed(1)} km away`;
}

// ─── Open-now logic ──────────────────────────────────────────────────────────

function parseHourRange(range: string, now: Date): { start: number; end: number; cur: number } | null {
  const m = range.trim().match(/^(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const start = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
  let end = parseInt(m[3], 10) * 60 + parseInt(m[4], 10);
  if (end <= start) end += 24 * 60; // past-midnight close
  const cur = now.getHours() * 60 + now.getMinutes();
  return { start, end, cur };
}

export function isOpenNow(b: Business, now = new Date()): boolean {
  const today = b.hours[now.getDay()];
  if (!today) {
    // check yesterday's past-midnight hours
    const y = b.hours[(now.getDay() + 6) % 7];
    if (!y) return false;
    const span = parseHourRange(y, now);
    if (!span) return false;
    const curLate = now.getHours() * 60 + now.getMinutes() + 24 * 60;
    return curLate >= span.start && curLate <= span.end;
  }
  const span = parseHourRange(today, now);
  if (!span) return false;
  return span.cur >= span.start && span.cur <= span.end;
}

export function hoursLabel(b: Business): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days
    .map((d, i) => `${d} ${b.hours[i] ?? "Closed"}`)
    .join(" · ");
}

export function priceLabel(level: number): string {
  if (level <= 1) return "RM5–20";
  if (level === 2) return "RM20–60";
  return "RM60+";
}

// ─── Flavor guide (spice / sweet / sour / MSG) ───────────────────────────────

export const FLAVOR_AXES = [
  { key: "spice", label: "Spiciness", icon: "🌶️", max: 3, words: ["No heat", "Gentle warmth", "Medium heat", "Very hot"] } as const,
  { key: "sweet", label: "Sweetness", icon: "🍬", max: 3, words: ["Not sweet", "Lightly sweet", "Sweet", "Very sweet"] } as const,
  { key: "sour", label: "Sour tempo", icon: "🍋", max: 3, words: ["No tang", "Hint of tang", "Tangy", "Very sour"] } as const,
  { key: "msg", label: "MSG strength", icon: "🧂", max: 3, words: ["None added", "A little", "Seasoned", "Heavy seasoning"] } as const,
] as const;

export type FlavorKey = (typeof FLAVOR_AXES)[number]["key"];

export function flavorWord(axis: number, level: number): string {
  const a = FLAVOR_AXES[axis];
  return a.words[Math.max(0, Math.min(3, level))];
}

export function flavorWordByKey(key: FlavorKey, level: number): string {
  const idx = FLAVOR_AXES.findIndex((a) => a.key === key);
  return flavorWord(idx, level);
}

export function hasFlavorGuide(b: Business): boolean {
  return !!(b.flavorProfile || (b.menu && b.menu.length > 0));
}

/** Average flavor levels across a list (used by the assistant + list views). */
export function avgFlavor(list: Business[]): Record<FlavorKey, number> {
  const acc: Record<FlavorKey, { s: number; n: number }> = { spice: { s: 0, n: 0 }, sweet: { s: 0, n: 0 }, sour: { s: 0, n: 0 }, msg: { s: 0, n: 0 } };
  for (const b of list) {
    const fp = b.flavorProfile;
    if (!fp) continue;
    for (const k of ["spice", "sweet", "sour", "msg"] as FlavorKey[]) {
      acc[k].s += fp[k];
      acc[k].n += 1;
    }
  }
  const out = {} as Record<FlavorKey, number>;
  for (const k of ["spice", "sweet", "sour", "msg"] as FlavorKey[]) {
    out[k] = acc[k].n ? Math.round((acc[k].s / acc[k].n) * 10) / 10 : 0;
  }
  return out;
}

export function maxFlavor(list: Business[]): Record<FlavorKey, number> {
  const out = { spice: 0, sweet: 0, sour: 0, msg: 0 } as Record<FlavorKey, number>;
  for (const b of list) {
    const fp = b.flavorProfile;
    if (!fp) continue;
    for (const k of ["spice", "sweet", "sour", "msg"] as FlavorKey[]) out[k] = Math.max(out[k], fp[k]);
  }
  return out;
}

/** True if every flavor axis is ≤ gentle (1). Used for the "gentle flavors" filter. */
export function isGentleFlavors(b: Business): boolean {
  const fp = b.flavorProfile;
  if (!fp) return false;
  return fp.spice <= 1 && fp.sweet <= 1 && fp.sour <= 1 && fp.msg <= 1;
}

/** True if the place offers at least one menu item with all axes ≤ 1. */
export function hasGentleOption(b: Business): boolean {
  if (b.menu && b.menu.some((m) => m.spice <= 1 && m.sweet <= 1 && m.sour <= 1 && m.msg <= 1)) return true;
  return isGentleFlavors(b);
}

export function flavorSummaryLine(b: Business): string {
  const fp = b.flavorProfile;
  if (!fp) return "";
  const parts: string[] = [];
  parts.push(fp.spice >= 2 ? `spice ${fp.spice}/3` : "mild-friendly");
  if (fp.sour >= 2) parts.push("tangy");
  if (fp.sweet >= 3) parts.push("very sweet");
  if (fp.msg >= 2) parts.push("seasoned");
  if (fp.msg === 0) parts.push("no MSG");
  return parts.join(" · ");
}

// ─── Ranking ─────────────────────────────────────────────────────────────────

export type SortKey = "recommended" | "distance" | "score" | "rating" | "open";

export interface RankContext {
  userLat?: number;
  userLng?: number;
  categorySlug?: string;
  requireOpen?: boolean;
}

export function rankBusinesses(
  list: Business[],
  sort: SortKey,
  ctx: RankContext = {}
): Business[] {
  let items = [...list];
  if (ctx.requireOpen) items = items.filter((b) => isOpenNow(b));

  const dist = (b: Business) =>
    ctx.userLat != null && ctx.userLng != null
      ? distanceKm(ctx.userLat, ctx.userLng, b.latitude, b.longitude)
      : distanceFromCenter(b);

  switch (sort) {
    case "distance":
      return items.sort((a, b) => dist(a) - dist(b));
    case "score":
      return items.sort((a, b) => b.localScore - a.localScore);
    case "rating":
      return items.sort((a, b) => b.ratingAvg - a.ratingAvg || b.ratingCount - a.ratingCount);
    case "open":
      return items.sort((a, b) => Number(isOpenNow(b)) - Number(isOpenNow(a)) || b.localScore - a.localScore);
    case "recommended":
    default: {
      // MVP ranking formula:
      // 40% local score, 20% distance, 15% rating, 10% category relevance,
      // 10% open status, 5% popularity — normalized to 0–1.
      const maxDist = Math.max(...items.map(dist), 0.001);
      const scored = items.map((b) => {
        const localScore = b.localScore / 100;
        const proximity = 1 - dist(b) / maxDist;
        const rating = b.ratingCount > 0 ? b.ratingAvg / 5 : 0.35;
        const relevance = !ctx.categorySlug || b.categoryId.includes(ctx.categorySlug) ? 1 : 0.4;
        const open = isOpenNow(b) ? 1 : 0;
        const popularity = Math.min(b.ratingCount / 100, 1);
        return { b, rank: 0.4 * localScore + 0.2 * proximity + 0.15 * rating + 0.1 * relevance + 0.1 * open + 0.05 * popularity };
      });
      return scored.sort((x, y) => y.rank - x.rank).map((s) => s.b);
    }
  }
}

// ─── Write API (tourist) ─────────────────────────────────────────────────────

export function toggleFavorite(businessId: string): boolean {
  if (isFavorite(businessId)) {
    state.favorites = state.favorites.filter((f) => f.businessId !== businessId);
    persist();
    return false;
  }
  state.favorites.push({ businessId, createdAt: new Date().toISOString() });
  persist();
  return true;
}

export function addReview(businessId: string, rating: number, text: string, visitedDate: string): Review {
  const review: Review = {
    id: `rev-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    businessId,
    author: "Guest",
    rating,
    text: text.trim(),
    visitedDate,
    verifiedVisit: state.visits.includes(businessId),
    createdAt: new Date().toISOString(),
  };
  state.reviews.push(review);
  // recompute business rating aggregate
  const b = getBusinessById(businessId);
  if (b) {
    const all = state.reviews.filter((r) => r.businessId === businessId);
    b.ratingAvg = Math.round((all.reduce((s, r) => s + r.rating, 0) / all.length) * 10) / 10;
    b.ratingCount = all.length;
  }
  persist();
  return review;
}

export function markVisited(businessId: string): void {
  const b = getBusinessById(businessId);
  if (!b) return;
  if (!state.visits.includes(businessId)) state.visits.push(businessId);
  const already = state.impact.some((e) => e.businessId === businessId);
  if (!already) {
    state.impact.push({
      id: `imp-${Date.now()}`,
      businessId,
      estimatedSpendRM: PRICE_ESTIMATES[b.priceLevel] ?? 25,
      createdAt: new Date().toISOString(),
    });
  }
  persist();
}

export function hasMarkedVisited(businessId: string): boolean {
  return state.visits.includes(businessId);
}

// ─── Write API (business + community submissions) ────────────────────────────

export function submitBusiness(p: SubmissionPayload): Business {
  const empCount = parseInt(p.localEmployees || "0", 10) || 0;
  const yrs = parseInt(p.yearsOperating || "0", 10) || 0;
  const inputs = {
    ownership: p.locallyOwned ? 30 : 10,
    community: Math.min(20, 8 + Math.min(empCount, 5) + (yrs >= 10 ? 4 : 0)),
    localProducts: 14,
    independence: 15,
    sustainability: 5,
    reviews: 0,
  };
  const b: Business = {
    id: `biz-sub-${Date.now()}`,
    slug: p.businessName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "new-business",
    name: p.businessName.trim(),
    description: p.description.trim(),
    categoryId: p.category,
    address: p.address.trim(),
    latitude: p.latitude ? parseFloat(p.latitude) : DEST.center.lat,
    longitude: p.longitude ? parseFloat(p.longitude) : DEST.center.lng,
    phone: p.phone,
    whatsapp: p.whatsapp,
    website: "",
    priceLevel: (parseInt(p.priceLevel, 10) || 1) as 1 | 2 | 3,
    ownershipType: p.ownershipType,
    locallyOwned: p.locallyOwned,
    locallyOperated: p.locallyOperated,
    verificationStatus: "COMMUNITY_SUBMITTED",
    verificationNote: "Submitted via onboarding form; not yet verified. Local status: Unverified.",
    localScore: computeScore(inputs),
    scoreInputs: inputs,
    yearsOperating: parseInt(p.yearsOperating, 10) || 0,
    localEmployeeCount: parseInt(p.localEmployees, 10) || 0,
    story: "",
    whyVisit: "",
    whatsLocal: p.products,
    status: "pending",
    ratingAvg: 0,
    ratingCount: 0,
    isDemo: false,
    photos: [],
    hours: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
    menu: (p.menu ?? []).map((m, i) => ({ id: `m-sub-${Date.now()}-${i}`, ...m })),
    flavorProfile: p.menu && p.menu.length ? avgFlavorFromMenuItems(p.menu) : undefined,
    alsoCategories: [],
    createdAt: new Date().toISOString(),
  };
  state.businesses.push(b);
  persist();
  return b;
}

// ─── Write API (admin) ───────────────────────────────────────────────────────

export type AdminAction =
  | { type: "approve"; id: string }
  | { type: "reject"; id: string }
  | { type: "verify"; id: string; status: "OWNER_VERIFIED" | "ADMIN_VERIFIED" }
  | { type: "setOwnership"; id: string; ownershipType: Business["ownershipType"] }
  | { type: "editScore"; id: string; inputs: Partial<Business["scoreInputs"]> };

export function adminAct(action: AdminAction): void {
  const b = getBusinessById(action.id);
  if (!b) return;
  switch (action.type) {
    case "approve":
      b.status = "approved";
      break;
    case "reject":
      b.status = "rejected";
      break;
    case "verify":
      b.verificationStatus = action.status;
      b.verificationNote =
        action.status === "ADMIN_VERIFIED"
          ? "Verified by LocalLoop admin review."
          : "Verified by the business owner with supporting documents.";
      break;
    case "setOwnership":
      b.ownershipType = action.ownershipType;
      break;
    case "editScore":
      b.scoreInputs = { ...b.scoreInputs, ...action.inputs };
      b.localScore = computeScore(b.scoreInputs);
      break;
  }
  persist();
}

export function deleteReview(reviewId: string): void {
  state.reviews = state.reviews.filter((r) => r.id !== reviewId);
  persist();
}

function avgFlavorFromMenuItems(items: { spice: number; sweet: number; sour: number; msg: number }[]): Business["flavorProfile"] {
  if (!items.length) return undefined;
  const avg = (f: (m: typeof items[number]) => number) => Math.round((items.reduce((s, m) => s + f(m), 0) / items.length) * 10) / 10;
  return { spice: avg((m) => m.spice), sweet: avg((m) => m.sweet), sour: avg((m) => m.sour), msg: avg((m) => m.msg) };
}
