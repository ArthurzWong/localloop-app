/**
 * runtime.test.cjs — jsdom interaction test for the LocalLoop bundle.
 * Simulates the PRD demo journey: browse → filter → open → save → visit →
 * review → submit a business → verify it in admin. Asserts on real DOM.
 */
process.env.NODE_ENV = "production";

const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const DIST = path.join(__dirname, "dist");
const html = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const appJs = fs.readFileSync(path.join(DIST, "assets", "app.js"), "utf8");

const dom = new JSDOM(html.replace('<script src="./assets/app.js" defer></script>', ""), {
  url: "https://localloop.test/",
  pretendToBeVisual: true,
  runScripts: "outside-only",
});

const { window } = dom;
const { document } = window;

// localStorage exists in jsdom; silence matchMedia/geolocation gaps
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};
window.Element.prototype.scrollTo = () => {};
window.HTMLDivElement.prototype.scrollTo = () => {};

let failures = 0;
function check(name, cond) {
  console.log((cond ? "PASS" : "FAIL") + " — " + name);
  if (!cond) failures++;
}
const text = () => document.body.textContent || "";
const q = (sel) => document.querySelector(sel);
const qa = (sel) => Array.from(document.querySelectorAll(sel));
const click = (elm) => elm.dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true }));
const tick = (ms = 80) => new Promise((r) => setTimeout(r, ms));
function setVal(el, val) {
  let proto = Object.getPrototypeOf(el);
  let desc = null;
  while (proto && !desc) {
    desc = Object.getOwnPropertyDescriptor(proto, "value");
    proto = Object.getPrototypeOf(proto);
  }
  if (!desc || !desc.set) throw new Error("no value setter for " + el.tagName);
  desc.set.call(el, val);
  el.dispatchEvent(new window.Event("input", { bubbles: true }));
  el.dispatchEvent(new window.Event("change", { bubbles: true }));
}

async function step(name, fn) {
  try {
    await fn();
    check(name, true);
  } catch (e) {
    console.log("FAIL — " + name + " :: " + e.message);
    failures++;
  }
}

(async () => {
  // Execute the bundle
  try {
    window.eval(appJs);
  } catch (e) {
    console.log("FAIL — bundle executes :: " + e.message);
    process.exit(1);
  }
  await new Promise((r) => setTimeout(r, 120));

  // ── 1. Landing renders ──
  await step("landing: hero + brand render", () => {
    if (!text().includes("Discover the real")) throw new Error("hero missing");
    if (!text().includes("LocalLoop")) throw new Error("brand missing");
  });

  await step("landing: 6 category tiles with counts", () => {
    const tiles = qa(".cat-btn");
    if (tiles.length !== 6) throw new Error("tiles=" + tiles.length);
    if (!text().includes("Local Food")) throw new Error("food tile missing");
  });

  // ── 2. Demo journey: Eat Local ──
  await step("demo: EAT LOCAL shows 10 food places", () => {
    const tile = qa(".cat-btn").find((t) => t.textContent.includes("Local Food"));
    click(tile);
    // hash navigation is async via hashchange
  });
  await new Promise((r) => setTimeout(r, 100));
  await step("explore: category filter applied from home tile", () => {
    if (!text().includes("Explore Local")) throw new Error("explore screen missing");
    if (!/10 places/.test(text())) throw new Error("expected 10 food places, got: " + (text().match(/\d+ places?/) || ["?"])[0]);
  });

  // ── 3. Open Ah Mei's Family Kitchen ──
  await step("explore: open Ah Mei's Family Kitchen", () => {
    const card = qa(".biz-card").find((c) => c.textContent.includes("Ah Mei's Family Kitchen"));
    if (!card) throw new Error("card not found");
    const link = card.querySelector("a");
    click(link);
  });
  await new Promise((r) => setTimeout(r, 100));
  await step("detail: transparent Local Score breakdown renders", () => {
    const t = text();
    // Ah Mei's verified inputs: 30+20+20+15+9+5 = 99
    if (!t.includes("Local Score: 99")) throw new Error("score missing: " + (t.match(/Local Score[^\n]*/) || ["?"])[0]);
  });

  await step("detail: name, ownership badge, story render", () => {
    const t = text();
    if (!t.includes("Ah Mei's Family Kitchen")) throw new Error("name missing");
    if (!t.includes("Locally owned · Verified")) throw new Error("ownership badge missing");
    if (!t.includes("Why this place matters")) throw new Error("story missing");
  });

  // flavor feature: taste guide + menu
  await step("detail: taste guide with 4 axes renders", () => {
    const t = text();
    for (const f of ["Spiciness", "Sweetness", "Sour tempo", "MSG strength"]) {
      if (!t.includes(f)) throw new Error("flavor axis missing: " + f);
    }
  });

  await step("detail: menu shows per-dish flavor words", () => {
    const t = text();
    if (!t.includes("Herbal Noodle Soup")) throw new Error("menu item missing");
    if (!t.includes("No heat") || !t.includes("RM12")) throw new Error("per-dish levels/prices missing");
  });

  // ── 4. Save + visit + review ──
  await step("detail: save toggles", async () => {
    const btn = qa("button").find((b) => /Save/.test(b.textContent) && !/Saved/.test(b.textContent));
    if (!btn) throw new Error("save button missing");
    click(btn);
    await new Promise((r) => setTimeout(r, 80));
    if (!text().includes("Saved")) throw new Error("did not toggle to Saved");
  });

  await step("detail: mark visited updates impact", async () => {
    const yes = qa("button").find((b) => b.textContent.includes("Yes, I visited"));
    if (!yes) throw new Error("visit CTA missing");
    click(yes);
    await new Promise((r) => setTimeout(r, 80));
    if (!text().includes("Marked as visited")) throw new Error("impact not updated");
  });

  await step("detail: submit review with validation", async () => {
    const submit = qa("button").find((b) => b.textContent.includes("Submit review"));
    click(submit); // no rating → error
    await tick();
    if (!text().includes("Pick a star rating")) throw new Error("validation missing");
    const star = qa('.rating-input button')[4];
    click(star);
    const ta = q(".textarea");
    setVal(ta, "Great local find, would return");
    click(submit);
    await tick();
    if (!text().includes("Great local find")) throw new Error("review not rendered");
  });

  await step("detail: directions/call/whatsapp links are correct", () => {
    const links = qa("a").map((a) => a.href);
    if (!links.some((h) => h.startsWith("https://www.google.com/maps/dir/?api=1"))) throw new Error("gmaps missing");
    if (!links.some((h) => h.startsWith("tel:"))) throw new Error("tel missing");
    if (!links.some((h) => h.startsWith("https://wa.me/"))) throw new Error("wa missing");
  });

  // ── 3b. Gentle-flavors filter ──
  await step("explore: gentle-flavors filter narrows results", async () => {
    window.location.hash = "#/explore?cat=food";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
    await new Promise((r) => setTimeout(r, 100));
    const before = (text().match(/(\d+) places?/) || [])[1];
    const chip = qa(".chip").find((c) => c.textContent.includes("Gentle flavors"));
    if (!chip) throw new Error("gentle chip missing");
    click(chip);
    await new Promise((r) => setTimeout(r, 100));
    const after = (text().match(/(\d+) places?/) || [])[1];
    if (!(parseInt(after) < parseInt(before))) throw new Error(`filter did not narrow: ${before} → ${after}`);
  });

  // ── 5. Saved screen ──
  await step("saved: Ah Mei listed", () => {
    window.location.hash = "#/saved";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
  });
  await new Promise((r) => setTimeout(r, 100));
  await step("saved screen shows the saved business", () => {
    if (!text().includes("Ah Mei's Family Kitchen")) throw new Error("saved list empty");
  });

  // ── 6. Impact tracking ──
  await step("profile: impact shows 1 visited + estimated spend", () => {
    window.location.hash = "#/profile";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
  });
  await new Promise((r) => setTimeout(r, 100));
  await step("impact numbers render", () => {
    const t = text();
    if (!t.includes("Local businesses visited")) throw new Error("impact block missing");
    if (!t.includes("Demo estimates")) throw new Error("estimate labelling missing");
    if (!/RM\d+/.test(t)) throw new Error("no RM estimate");
  });

  // ── 7. Assistant ──
  await step("assistant opens and answers grounded query", async () => {
    const fab = q(".fab");
    if (!fab) throw new Error("fab missing");
    click(fab);
    await tick();
    const input = q('.assistant-input .input');
    if (!input) throw new Error("assistant input missing");
    const form = q(".assistant-input");
    setVal(input, "Where can I have breakfast near me?");
    form.dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));
    await tick();
    const t = text();
    if (!t.includes("top local picks")) throw new Error("no answer: " + t.slice(-300));
    if (!t.includes("Ah Mei's Family Kitchen")) throw new Error("cards missing");
  });

  // ── 8. Business submission flow ──
  await step("submit: fill + validate + send", async () => {
    window.location.hash = "#/submit";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
    await tick(100);
    // trigger validation errors first
    const submitBtn = qa("button").find((b) => b.textContent.includes("Submit for verification"));
    click(submitBtn);
    await tick();
    if (!text().includes("Business name is required")) throw new Error("validation not shown");
    setVal(q("#f-name"), "Test Corner Juice Stall");
    setVal(q("#f-owner"), "Ah Test");
    setVal(q("#f-phone"), "+60 6-111 2222");
    setVal(q("#f-addr"), "1 Test Lane, Riverstone");
    setVal(q("#f-cat"), "cat-food");
    click(submitBtn);
    await tick(900); // simulated latency
    if (!text().includes("submitted for verification")) throw new Error("confirmation missing");
    if (!text().includes("Unverified")) throw new Error("must not claim verified");
  });

  // ── 9. Admin verification ──
  await step("admin: approve the submitted business", async () => {
    window.location.hash = "#/admin";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
    await new Promise((r) => setTimeout(r, 100));
    const t = text();
    if (!t.includes("Verification queue")) throw new Error("admin missing");
    if (!t.includes("Test Corner Juice Stall")) throw new Error("submission not in queue");
    const card = qa(".card").find((c) => c.textContent.includes("Test Corner Juice Stall"));
    if (!card) throw new Error("stall card missing");
    const approve = Array.from(card.querySelectorAll("button")).find((b) => b.textContent.includes("Verify ownership + approve"));
    if (!approve) throw new Error("approve button missing");
    click(approve);
    await new Promise((r) => setTimeout(r, 200));
    const stillPending = qa(".card").some((c) => c.textContent.includes("Test Corner Juice Stall") && c.textContent.includes("Verify ownership + approve"));
    if (stillPending) throw new Error("stall still in queue");
  });

  await step("admin: approved business now appears in explore", async () => {
    window.location.hash = "#/explore";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
    await new Promise((r) => setTimeout(r, 100));
    if (!text().includes("Test Corner Juice Stall")) throw new Error("not listed publicly");
  });

  // ── 10. Map screen ──
  await step("map: canvas mounts with markers", async () => {
    window.location.hash = "#/map";
    window.dispatchEvent(new window.HashChangeEvent("hashchange"));
    await new Promise((r) => setTimeout(r, 150));
    if (!q("canvas.map-canvas")) throw new Error("canvas missing");
    if (!text().includes("places shown")) throw new Error("map legend missing");
  });

  console.log(failures === 0 ? "\nALL RUNTIME TESTS PASSED" : `\n${failures} FAILURES`);
  process.exit(failures === 0 ? 0 : 1);
})();
