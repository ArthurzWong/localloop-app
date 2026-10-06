// ─── Business onboarding + Admin console + Assistant panel ───────────────────
import React, { useEffect, useRef, useState } from "react";
import {
  getAllBusinesses, submitBusiness, adminAct, deleteReview, getAllReviews, getCategories,
  resetDemoData, getApprovedBusinesses, getImpactSummary, getBusinessById,
} from "../lib/store";
import type { Business, SubmissionPayload } from "../lib/types";
import { answerQuery, type AssistantReply } from "../lib/assistant";
import { EmptyState, Toast, useToast, VerificationBadge, ScoreBreakdown, catLabel } from "../components/ui";
import { FLAVOR_AXES } from "../lib/store";

// ── Business onboarding ──────────────────────────────────────────────────────
type Errors = Partial<Record<"businessName" | "ownerName" | "phone" | "category" | "address", string>>;

export function SubmitScreen() {
  const cats = getCategories();
  const [form, setForm] = useState({
    businessName: "", ownerName: "", phone: "", whatsapp: "", email: "",
    category: "", address: "", latitude: "", longitude: "", description: "",
    yearsOperating: "", localEmployees: "", locallyOwned: false, locallyOperated: false,
    ownershipType: "locally_owned" as SubmissionPayload["ownershipType"], products: "", priceLevel: "1", hours: "",
  });
  const [menuRows, setMenuRows] = useState<{ name: string; priceRM: string; spice: number; sweet: number; sour: number; msg: number }[]>([
    { name: "", priceRM: "", spice: 1, sweet: 1, sour: 0, msg: 1 },
  ]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<Business | null>(null);
  const [busy, setBusy] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const pickOnMap = () => {
    setForm((f) => ({
      ...f,
      latitude: (2.0428 + (Math.random() - 0.5) * 0.004).toFixed(6),
      longitude: (102.5685 + (Math.random() - 0.5) * 0.004).toFixed(6),
    }));
  };

  const submit = () => {
    const errs: Errors = {};
    if (form.businessName.trim().length < 2) errs.businessName = "Business name is required.";
    if (form.ownerName.trim().length < 2) errs.ownerName = "Owner name is required.";
    if (form.phone.trim().length < 6) errs.phone = "A contact number is required.";
    if (!form.category) errs.category = "Choose a category.";
    if (form.address.trim().length < 4) errs.address = "Address is required.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setBusy(true);
    const menu = menuRows
      .filter((m) => m.name.trim().length > 0)
      .map((m) => ({ name: m.name.trim(), priceRM: m.priceRM ? parseFloat(m.priceRM) : undefined, spice: m.spice, sweet: m.sweet, sour: m.sour, msg: m.msg }));
    // simulate short latency like a real API call
    setTimeout(() => {
      const b = submitBusiness({ ...form, menu });
      setBusy(false);
      setSubmitted(b);
      window.scrollTo(0, 0);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="page">
        <div className="topbar"><h1>Submission received</h1></div>
        <div className="card card-pad" style={{ textAlign: "center", padding: "36px 20px" }}>
          <div style={{ fontSize: 44, marginBottom: 8 }} aria-hidden="true">✓</div>
          <h2>Thanks. Your business has been submitted for verification.</h2>
          <p className="muted mt-8">
            <b>{submitted.name}</b> is now queued as <VerificationBadge status={submitted.verificationStatus} />.
            Local status: Unverified until an admin confirms ownership details.
          </p>
          <div className="mt-24 row" style={{ justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-secondary" href="#/admin">See it in the Admin console</a>
            <button className="btn btn-ghost" onClick={() => { setSubmitted(null); }}>Submit another</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="topbar">
        <a className="btn btn-ghost btn-sm" href="#/">← Home</a>
        <span className="demo-tag">DEMO FORM</span>
      </div>
      <h1>List your business</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Free to list. No website, marketing budget or SEO needed — just tell visitors who you are.
        Verification protects tourists from fake "local" claims, so ownership details matter.
      </p>

      <div className="card card-pad mt-16">
        <h3>Business</h3>
        <div className="field mt-8">
          <label htmlFor="f-name">Business name *</label>
          <input id="f-name" className="input" value={form.businessName} onChange={set("businessName")} aria-invalid={!!errors.businessName} placeholder="e.g. Ah Mei's Family Kitchen" />
          {errors.businessName && <p className="hint" style={{ color: "var(--danger)" }} role="alert">{errors.businessName}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-cat">Category *</label>
          <select id="f-cat" className="select" value={form.category} onChange={set("category")} aria-invalid={!!errors.category}>
            <option value="">Choose a category…</option>
            {cats.map((c) => <option key={c.id} value={c.id}>{c.emoji} {c.label}</option>)}
          </select>
          {errors.category && <p className="hint" style={{ color: "var(--danger)" }} role="alert">{errors.category}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-desc">Description</label>
          <textarea id="f-desc" className="textarea" value={form.description} onChange={set("description")} placeholder="What do you make, serve or sell? What makes it special?" />
        </div>
        <div className="field">
          <label htmlFor="f-addr">Address *</label>
          <input id="f-addr" className="input" value={form.address} onChange={set("address")} aria-invalid={!!errors.address} placeholder="Street, town" />
          {errors.address && <p className="hint" style={{ color: "var(--danger)" }} role="alert">{errors.address}</p>}
          <div className="row mt-8">
            <button type="button" className="btn btn-secondary btn-sm" onClick={pickOnMap}>Use demo GPS pin</button>
            {form.latitude && <span className="small faint tnum">{form.latitude}, {form.longitude}</span>}
          </div>
        </div>
      </div>

      <div className="card card-pad mt-16">
        <h3>Contact</h3>
        <div className="form-row mt-8">
          <div className="field">
            <label htmlFor="f-owner">Owner name *</label>
            <input id="f-owner" className="input" value={form.ownerName} onChange={set("ownerName")} aria-invalid={!!errors.ownerName} />
            {errors.ownerName && <p className="hint" style={{ color: "var(--danger)" }} role="alert">{errors.ownerName}</p>}
          </div>
          <div className="field">
            <label htmlFor="f-phone">Phone *</label>
            <input id="f-phone" className="input" type="tel" value={form.phone} onChange={set("phone")} aria-invalid={!!errors.phone} placeholder="+60 …" />
            {errors.phone && <p className="hint" style={{ color: "var(--danger)" }} role="alert">{errors.phone}</p>}
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="f-wa">WhatsApp</label>
            <input id="f-wa" className="input" value={form.whatsapp} onChange={set("whatsapp")} placeholder="Same as phone if unsure" />
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input id="f-email" className="input" type="email" value={form.email} onChange={set("email")} placeholder="optional" />
          </div>
        </div>
      </div>

      <div className="card card-pad mt-16">
        <h3>Local ownership</h3>
        <p className="small muted mt-8">This is the heart of LocalLoop — every claim is checked before visitors see it as verified.</p>
        <label className="check-row">
          <input type="checkbox" checked={form.locallyOwned} onChange={(e) => setForm({ ...form, locallyOwned: e.target.checked })} />
          <span className="txt"><b>Locally owned?</b><br /><span className="sub">The owner lives in or near this destination.</span></span>
        </label>
        <label className="check-row">
          <input type="checkbox" checked={form.locallyOperated} onChange={(e) => setForm({ ...form, locallyOperated: e.target.checked })} />
          <span className="txt"><b>Locally operated?</b><br /><span className="sub">Day-to-day operations are run by local residents.</span></span>
        </label>
        <div className="field">
          <label htmlFor="f-own">Ownership type</label>
          <select id="f-own" className="select" value={form.ownershipType} onChange={set("ownershipType")}>
            <option value="locally_owned">Locally owned</option>
            <option value="locally_operated">Locally operated</option>
            <option value="family_owned">Family owned</option>
            <option value="cooperative">Cooperative</option>
            <option value="independent">Independent</option>
            <option value="chain">Part of a chain</option>
            <option value="unknown">Not sure</option>
          </select>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="f-years">Years operating</label>
            <input id="f-years" className="input" type="number" min="0" value={form.yearsOperating} onChange={set("yearsOperating")} />
          </div>
          <div className="field">
            <label htmlFor="f-emp">Local employees</label>
            <input id="f-emp" className="input" type="number" min="0" value={form.localEmployees} onChange={set("localEmployees")} />
          </div>
        </div>
      </div>

      <div className="card card-pad mt-16">
        <h3>Products & pricing</h3>
        <div className="field mt-8">
          <label htmlFor="f-prod">Products / services</label>
          <input id="f-prod" className="input" value={form.products} onChange={set("products")} placeholder="e.g. Hand-pulled noodles, kaya toast" />
        </div>
        <div className="field">
          <label htmlFor="f-price">Price range</label>
          <select id="f-price" className="select" value={form.priceLevel} onChange={set("priceLevel")}>
            <option value="1">Budget (RM5–20)</option>
            <option value="2">Mid (RM20–60)</option>
            <option value="3">Premium (RM60+)</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-hours">Opening hours</label>
          <input id="f-hours" className="input" value={form.hours} onChange={set("hours")} placeholder='e.g. Mon–Sat 9:00–18:00' />
          <p className="hint">Added to your listing once verified; admins can structure it per day.</p>
        </div>
      </div>

      <div className="card card-pad mt-16">
        <h3>Menu & flavor guide</h3>
        <p className="small muted mt-8">
          Visitors new to local food often ask: how spicy is it? How sweet? Does it have MSG?
          Add your dishes with 0–3 levels so tourists can order with confidence.
        </p>
        {menuRows.map((m, i) => (
          <div key={i} className="menu-editor-row" style={{ borderTop: "1px solid var(--line)", paddingTop: 12, marginTop: 12 }}>
            <div className="form-row">
              <div className="field" style={{ marginBottom: 0 }}>
                <label htmlFor={`mn-${i}`}>Dish name</label>
                <input id={`mn-${i}`} className="input" value={m.name} placeholder="e.g. Herbal Noodle Soup"
                  onChange={(e) => setMenuRows(menuRows.map((r, j) => j === i ? { ...r, name: e.target.value } : r))} />
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <label htmlFor={`mp-${i}`}>Price (RM)</label>
                <input id={`mp-${i}`} className="input" type="number" min="0" step="0.5" value={m.priceRM} placeholder="12"
                  onChange={(e) => setMenuRows(menuRows.map((r, j) => j === i ? { ...r, priceRM: e.target.value } : r))} />
              </div>
            </div>
            <div className="menu-editor-axes">
              {FLAVOR_AXES.map((a) => (
                <div className="menu-editor-axis" key={a.key}>
                  <span className="small muted" style={{ fontWeight: 600 }}>{a.icon} {a.label}</span>
                  <div className="seg" role="group" aria-label={`${a.label} for ${m.name || "dish"}`}>
                    {[0, 1, 2, 3].map((lvl) => (
                      <button
                        key={lvl} type="button"
                        className={m[a.key] === lvl ? "active" : ""}
                        onClick={() => setMenuRows(menuRows.map((r, j) => j === i ? { ...r, [a.key]: lvl } : r))}
                      >{lvl}</button>
                    ))}
                  </div>
                  <span className="small faint">{a.words[m[a.key]]}</span>
                </div>
              ))}
            </div>
            {menuRows.length > 1 && (
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setMenuRows(menuRows.filter((_, j) => j !== i))}>Remove dish</button>
            )}
          </div>
        ))}
        <button type="button" className="btn btn-secondary btn-sm mt-8" onClick={() => setMenuRows([...menuRows, { name: "", priceRM: "", spice: 1, sweet: 1, sour: 0, msg: 1 }])}>
          + Add another dish
        </button>
      </div>

      <div className="notice notice-amber mt-16">
        <span aria-hidden="true">⚠️</span>
        <span>By submitting you confirm the ownership information is accurate. False "local" claims
        are the thing this platform exists to prevent — submissions are reviewed before going live.</span>
      </div>

      <button className="btn btn-primary btn-block mt-16" style={{ minHeight: 52 }} onClick={submit} disabled={busy}>
        {busy ? "Submitting…" : "Submit for verification"}
      </button>
      <p className="small faint" style={{ textAlign: "center", marginTop: 10 }}>No account required for this demo submission.</p>
    </div>
  );
}

// ── Admin console ────────────────────────────────────────────────────────────
export function AdminConsole() {
  const [tab, setTab] = useState<"pending" | "all" | "reviews" | "impact">("pending");
  const [, force] = useState(0);
  const [toast, setToast] = useToast();
  const [editing, setEditing] = useState<string | null>(null);

  useEffect(() => {
    const h = () => force((n) => n + 1);
    window.addEventListener("localloop:change", h);
    return () => window.removeEventListener("localloop:change", h);
  }, []);

  const all = getAllBusinesses();
  const pending = all.filter((b) => b.status === "pending");
  const approved = all.filter((b) => b.status === "approved");
  const reviews = getAllReviews();
  const impact = getImpactSummary();

  const act = (fn: () => void, msg: string) => { fn(); setToast(msg); };

  return (
    <div className="page">
      <div className="topbar">
        <h1>Admin console</h1>
        <span className="badge badge-gray">demo access</span>
      </div>
      <div className="notice notice-amber">
        <span aria-hidden="true">🔐</span>
        <span>Verification is the product's core promise. In production this console sits behind
        Supabase Auth + RLS with admin-only roles; demo access is intentionally open here so you can
        try the full flow.</span>
      </div>

      <div className="chip-row mt-16">
        <button className={`chip ${tab === "pending" ? "active" : ""}`} onClick={() => setTab("pending")}>Verification queue ({pending.length})</button>
        <button className={`chip ${tab === "all" ? "active" : ""}`} onClick={() => setTab("all")}>All businesses ({approved.length})</button>
        <button className={`chip ${tab === "reviews" ? "active" : ""}`} onClick={() => setTab("reviews")}>Reviews ({reviews.length})</button>
        <button className={`chip ${tab === "impact" ? "active" : ""}`} onClick={() => setTab("impact")}>Impact</button>
      </div>

      {tab === "pending" && (
        pending.length === 0 ? (
          <EmptyState icon="✅" title="Queue is clear" body="No businesses are waiting for verification right now." />
        ) : (
          pending.map((b) => (
            <div className="card card-pad mt-16" key={b.id}>
              <div className="row-between">
                <div>
                  <h3>{b.name}</h3>
                  <p className="small muted" style={{ marginTop: 4 }}>
                    {catLabel(b.categoryId)} · submitted {b.createdAt.slice(0, 10)} · {b.locallyOwned ? "claims locally owned" : "not claimed locally owned"} · {b.localEmployeeCount} local employees
                  </p>
                </div>
                <VerificationBadge status={b.verificationStatus} />
              </div>
              {b.description && <p className="small muted mt-8">{b.description}</p>}
              <div className="admin-actions mt-16">
                <button className="btn btn-primary btn-sm" onClick={() => act(() => adminAct({ type: "approve", id: b.id }), `${b.name} approved & listed`)}>Approve & list</button>
                <button className="btn btn-secondary btn-sm" onClick={() => act(() => { adminAct({ type: "verify", id: b.id, status: "ADMIN_VERIFIED" }); adminAct({ type: "approve", id: b.id }); }, `${b.name} verified (admin) & approved`)}>Verify ownership + approve</button>
                <button className="btn btn-danger btn-sm" onClick={() => act(() => adminAct({ type: "reject", id: b.id }), `${b.name} rejected`)}>Reject</button>
                <button className="btn btn-ghost btn-sm" onClick={() => setEditing(editing === b.id ? null : b.id)}>Score inputs {editing === b.id ? "▲" : "▼"}</button>
              </div>
              {editing === b.id && (
                <div className="mt-16" style={{ borderTop: "1px solid var(--line)", paddingTop: 12 }}>
                  <ScoreEditor b={b} onDone={() => setEditing(null)} />
                </div>
              )}
            </div>
          ))
        )
      )}

      {tab === "all" && (
        <div className="card mt-16 admin-scroll">
          <table className="admin-table">
            <thead>
              <tr><th>Business</th><th>Status</th><th>Score</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {all.map((b) => (
                <tr key={b.id}>
                  <td>
                    <b>{b.name}</b> {b.isDemo && <span className="badge badge-demo" style={{ fontSize: 9, padding: "1px 6px" }}>DEMO</span>}
                    <div className="small muted">{catLabel(b.categoryId)} · {b.status}</div>
                  </td>
                  <td><VerificationBadge status={b.verificationStatus} /></td>
                  <td className="tnum">{b.localScore}</td>
                  <td>
                    <div className="admin-actions">
                      {b.status !== "approved" && <button className="btn btn-secondary btn-sm" onClick={() => act(() => adminAct({ type: "approve", id: b.id }), "Approved")}>Approve</button>}
                      {b.status === "approved" && <button className="btn btn-danger btn-sm" onClick={() => act(() => adminAct({ type: "reject", id: b.id }), "Unlisted")}>Unlist</button>}
                      <button className="btn btn-ghost btn-sm" onClick={() => setEditing(editing === b.id ? null : b.id)}>Score</button>
                    </div>
                    {editing === b.id && (
                      <div className="mt-8" style={{ minWidth: 260 }}>
                        <ScoreEditor b={b} onDone={() => setEditing(null)} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "reviews" && (
        reviews.length === 0 ? (
          <EmptyState icon="✍️" title="No reviews" body="Tourist reviews will appear here for moderation." />
        ) : (
          <div className="card mt-16">
            <table className="admin-table">
              <thead><tr><th>Review</th><th>Business</th><th></th></tr></thead>
              <tbody>
                {reviews.map((r) => {
                  const b = getBusinessById(r.businessId);
                  return (
                    <tr key={r.id}>
                      <td>
                        <b>{r.author}</b> <span className="stars">{"★".repeat(r.rating)}</span>
                        <div className="small muted">{r.text}</div>
                        <div className="small faint">{r.visitedDate}{r.verifiedVisit ? " · verified visit" : ""}</div>
                      </td>
                      <td className="small">{b?.name ?? r.businessId}</td>
                      <td><button className="btn btn-danger btn-sm" onClick={() => act(() => deleteReview(r.id), "Review removed")}>Remove</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )
      )}

      {tab === "impact" && (
        <div className="card card-pad mt-16">
          <h3>Tourist activity & local impact</h3>
          <div className="stat-grid mt-16">
            <div className="stat"><div className="v tnum">{getApprovedBusinesses().length}</div><div className="k">Listed businesses</div></div>
            <div className="stat"><div className="v tnum">{impact.businessesVisited}</div><div className="k">Places visited</div></div>
            <div className="stat"><div className="v tnum">RM{impact.estimatedSpendRM}</div><div className="k">Est. local spending</div></div>
          </div>
          <p className="small faint mt-8">Demo numbers only. In production these aggregate from anonymized tourist sessions — never from fake data presented as real.</p>
          <div className="mt-16">
            <button className="btn btn-danger btn-sm" onClick={() => { resetDemoData(); setToast("Demo data reset"); force((n) => n + 1); }}>
              Reset demo data
            </button>
          </div>
        </div>
      )}

      {toast && <Toast message={toast} />}
    </div>
  );
}

function ScoreEditor({ b, onDone }: { b: Business; onDone: () => void }) {
  const [inputs, setInputs] = useState(b.scoreInputs);
  const clamp = (v: number, max: number) => Math.max(0, Math.min(max, Math.min(v, max)));
  const apply = () => {
    adminAct({ type: "editScore", id: b.id, inputs });
    onDone();
  };
  return (
    <div className="stack">
      {(
        [
          ["ownership", "Local ownership", 30],
          ["community", "Community presence", 20],
          ["localProducts", "Local products", 20],
          ["independence", "Independent business", 15],
          ["sustainability", "Sustainability", 10],
          ["reviews", "Visitor reviews", 5],
        ] as const
      ).map(([key, label, max]) => (
        <label key={key} className="score-factor">
          <span className="name">{label}</span>
          <input
            className="input" type="number" min={0} max={max} value={inputs[key]}
            style={{ width: 84, minHeight: 36, textAlign: "right" }}
            onChange={(e) => setInputs({ ...inputs, [key]: clamp(parseInt(e.target.value || "0", 10) || 0, max) })}
          />
        </label>
      ))}
      <div className="row">
        <button className="btn btn-primary btn-sm" onClick={apply}>Save score ({Object.values(inputs).reduce((a, c) => a + c, 0)}/100)</button>
        <button className="btn btn-ghost btn-sm" onClick={onDone}>Cancel</button>
      </div>
    </div>
  );
}

// ── Assistant panel ──────────────────────────────────────────────────────────
interface ChatMsg { role: "user" | "bot"; text: string; reply?: AssistantReply }

export function AssistantPanel({ onClose, nav }: { onClose: () => void; nav: { go(h: string): void } }) {
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    {
      role: "bot",
      text: "Hi! I'm the LocalLoop assistant. Ask me where to eat, shop, or explore — I only recommend places in the LocalLoop database, and I'll say so when I can't find enough options.",
    },
  ]);
  const [input, setInput] = useState("");
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [msgs]);

  const ask = (text: string) => {
    const q = text.trim();
    if (!q) return;
    const reply = answerQuery(q, null);
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: reply.text, reply }]);
    setInput("");
  };

  const suggestions = ["Where can I have breakfast near me?", "I only have RM30.", "Show me something genuinely local.", "I have 2 hours before my bus."];

  return (
    <div className="assistant-panel" role="dialog" aria-label="LocalLoop assistant">
      <div className="assistant-head">
        <div style={{ flex: 1 }}>
          <b>LocalLoop Assistant</b>
          <div className="small faint">Grounded in the business database — no invented places</div>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={onClose} aria-label="Close assistant">✕</button>
      </div>
      <div className="assistant-log" ref={logRef}>
        {msgs.map((m, i) => (
          <div key={i} className={`msg ${m.role === "user" ? "msg-user" : "msg-bot"}`}>
            {m.text}
            {m.reply && m.reply.cards.length > 0 && (
              <div className="msg-cards">
                {m.reply.cards.map((c) => (
                  <button
                    key={c.id}
                    className="card card-tap"
                    style={{ padding: "10px 12px", textAlign: "left", display: "block", width: "100%" }}
                    onClick={() => { onClose(); nav.go(`#/business/${c.id}`); }}
                  >
                    <b style={{ fontSize: 14 }}>{c.name}</b>
                    <div className="small muted tnum" style={{ marginTop: 2 }}>
                      Local Score {c.score} · {c.price} · {c.distance} · {c.ownership}
                    </div>
                    {c.flavor && <div className="small faint" style={{ marginTop: 2 }}>Taste: {c.flavor}</div>}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="assistant-chips">
        {suggestions.map((s) => (
          <button key={s} className="chip" style={{ fontSize: 12.5, padding: "6px 11px", minHeight: 32 }} onClick={() => ask(s)}>{s}</button>
        ))}
      </div>
      <form
        className="assistant-input"
        onSubmit={(e) => { e.preventDefault(); ask(input); }}
      >
        <input
          className="input"
          placeholder="Ask about food, crafts, stays…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Ask the assistant"
        />
        <button className="btn btn-primary" type="submit" aria-label="Send">↑</button>
      </form>
    </div>
  );
}
