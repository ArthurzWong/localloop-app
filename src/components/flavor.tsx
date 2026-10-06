// ─── Flavor guide components ─────────────────────────────────────────────────
import React from "react";
import type { Business, FlavorProfile, MenuItem } from "../lib/types";
import { FLAVOR_AXES, flavorWord } from "../lib/store";

/** Compact meter: level dots (0–3) + plain-language label for newcomers. */
export function FlavorMeter({ axis, level, showWord = true }: { axis: (typeof FLAVOR_AXES)[number]; level: number; showWord?: boolean }) {
  const lvl = Math.max(0, Math.min(3, level));
  return (
    <div className="flavor-meter" title={`${axis.label}: ${flavorWord(FLAVOR_AXES.indexOf(axis), lvl)}`}>
      <div className="fm-head">
        <span className="fm-icon" aria-hidden="true">{axis.icon}</span>
        <span className="fm-label">{axis.label}</span>
      </div>
      <div className="fm-dots" role="img" aria-label={`${axis.label} ${lvl} of 3`}>
        {[1, 2, 3].map((n) => (
          <i key={n} className={`fm-dot ${n <= lvl ? (axis.key === "spice" && n === 3 ? "fm-hot" : "on") : ""}`} />
        ))}
        {lvl === 0 && <i className="fm-dot fm-zero" />}
      </div>
      {showWord && <div className="fm-word">{axis.words[lvl]}</div>}
    </div>
  );
}

/** Four-axis summary for a business (place-level flavor profile). */
export function FlavorCard({ fp, note }: { fp: FlavorProfile; note?: string }) {
  return (
    <div className="flavor-card">
      <div className="flavor-grid">
        {FLAVOR_AXES.map((a) => <FlavorMeter key={a.key} axis={a} level={fp[a.key]} />)}
      </div>
      <p className="small faint" style={{ marginTop: 10, marginBottom: 0 }}>
        A 0–3 guide to help visitors new to local food — {note ?? "levels describe the kitchen overall; each dish below has its own guide"}. Not a medical or dietary certification.
      </p>
    </div>
  );
}

/** Menu with per-dish flavor rows. */
export function MenuList({ menu }: { menu: MenuItem[] }) {
  if (!menu.length) return null;
  return (
    <div className="menu-list">
      {menu.map((m) => (
        <div className="menu-item" key={m.id}>
          <div className="menu-item-head">
            <span className="menu-item-name">{m.name}</span>
            {m.priceRM != null && <span className="menu-item-price tnum">RM{m.priceRM}</span>}
          </div>
          {m.description && <p className="menu-item-desc">{m.description}</p>}
          <div className="menu-item-flavors">
            {FLAVOR_AXES.map((a) => (
              <span className="mf-chip" key={a.key} title={`${a.label}: ${a.words[m[a.key]]}`}>
                <span aria-hidden="true">{a.icon}</span> {a.label}: {a.words[m[a.key]]}
              </span>
            ))}
          </div>
          {m.tip && <p className="menu-item-tip">💡 {m.tip}</p>}
        </div>
      ))}
    </div>
  );
}

/** Badge shown on business cards when a flavor guide exists. */
export function FlavorBadge({ b }: { b: Business }) {
  if (!b.flavorProfile && !(b.menu && b.menu.length)) return null;
  const fp = b.flavorProfile;
  if (!fp) return <span className="badge badge-gray">Flavor guide inside</span>;
  const spice = fp.spice;
  const label = spice >= 3 ? "🌶️ Very spicy" : spice === 2 ? "🌶️ Medium spice" : spice === 1 ? "Mild heat" : "No heat";
  const extra: string[] = [];
  if (fp.sour >= 2) extra.push("tangy");
  if (fp.sweet >= 3) extra.push("very sweet");
  if (fp.msg === 0) extra.push("no MSG");
  else if (fp.msg >= 2) extra.push("seasoned");
  return (
    <span className="badge badge-amber" title={`Flavor guide: spiciness ${spice}/3, sweetness ${fp.sweet}/3, sour tempo ${fp.sour}/3, MSG ${fp.msg}/3`}>
      {label}{extra.length ? " · " + extra.join(", ") : ""}
    </span>
  );
}
