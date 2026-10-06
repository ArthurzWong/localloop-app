// ─── Shared UI primitives ────────────────────────────────────────────────────
import React, { useEffect, useState } from "react";
import type { Business } from "../lib/types";
import { formatDistance, distanceFromCenter, isOpenNow, priceLabel, hoursLabel } from "../lib/store";
import { FlavorBadge } from "./flavor";

const SVG_NS = "http://www.w3.org/2000/svg";
void SVG_NS;

function el(name: string, attrs: Record<string, string | number>, children?: (Element | string)[]): Element {
  const n = document.createElementNS(SVG_NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
  for (const c of children ?? []) n.append(c);
  return n;
}

/** Deterministic warm illustrated placeholder per business. */
export function PlaceholderArt({ b, height = 130 }: { b: Business; height?: number }) {
  let seed = 0;
  for (let i = 0; i < b.id.length; i++) seed = (seed * 31 + b.id.charCodeAt(i)) >>> 0;
  const hueSets: Record<string, [string, string, string]> = {
    "cat-food": ["#fde8cd", "#f6c88f", "#d97706"],
    "cat-shop": ["#e8e2f4", "#c9bce4", "#7c5cbf"],
    "cat-stay": ["#dff0e2", "#a9d4b4", "#2e7d4f"],
    "cat-experience": ["#fde3d5", "#f5b99c", "#c2571f"],
    "cat-explore": ["#dcebee", "#a9cfdb", "#2e6e82"],
  };
  const [c1, c2, c3] = hueSets[b.categoryId] ?? hueSets["cat-explore"];
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const hills: React.ReactNode[] = [];
  const n = 3;
  for (let i = 0; i < n; i++) {
    const y = 55 + i * 18 + rnd() * 10;
    const amp = 8 + rnd() * 10;
    hills.push(
      <path
        key={i}
        d={`M0 ${y + amp} Q 25 ${y - amp} 50 ${y} T 100 ${y - amp / 2} V 100 H 0 Z`}
        fill={i === 0 ? c1 : i === 1 ? c2 : c3}
        opacity={i === 2 ? 0.9 : 0.55 + i * 0.15}
      />
    );
  }
  const sunX = 12 + rnd() * 70;
  const glyphs: Record<string, string> = {
    "cat-food": "M30 62 q20 -14 40 0",
    "cat-shop": "M32 66 l10 -18 8 8 10 -12 8 22",
    "cat-stay": "M30 66 l20 -16 20 16 z",
    "cat-experience": "M28 60 q22 18 44 0",
    "cat-explore": "M30 64 h40 M50 50 v14",
  };
  return (
    <div className="ph" style={{ height }} role="img" aria-label={`${b.name} — illustrated placeholder`}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="100" height="100" fill={c1} opacity="0.45" />
        <circle cx={sunX} cy={26} r={9} fill={c3} opacity="0.5" />
        {hills}
        <path d={glyphs[b.categoryId] ?? glyphs["cat-explore"]} fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" opacity="0.85" />
      </svg>
    </div>
  );
}

export function ScoreDial({ value, size = 52 }: { value: number; size?: number }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const frac = Math.max(0, Math.min(1, value / 100));
  return (
    <div className="score-dial" style={{ width: size, height: size }} title={`Local Score ${value}/100`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-2)" strokeWidth="5" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--accent)" strokeWidth="5"
          strokeLinecap="round" strokeDasharray={`${c * frac} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="val" style={{ fontSize: size * 0.28 }}>{value}</span>
      <span className="score-label">Local</span>
    </div>
  );
}

export function OwnershipBadge({ b }: { b: Business }) {
  const verified = b.verificationStatus === "ADMIN_VERIFIED" || b.verificationStatus === "OWNER_VERIFIED";
  if (verified && b.locallyOwned) {
    const label = b.verificationStatus === "ADMIN_VERIFIED" ? "✓ Locally owned · Verified" : "✓ Locally owned · Owner verified";
    return <span className="badge badge-local">{label}</span>;
  }
  if (verified && b.locallyOperated) {
    return <span className="badge badge-local">✓ Locally operated · Verified</span>;
  }
  if (b.verificationStatus === "COMMUNITY_VERIFIED") {
    return <span className="badge badge-amber">✓ Community verified</span>;
  }
  return <span className="badge badge-gray">Local status: Unverified</span>;
}

export function VerificationBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    UNVERIFIED: { label: "Unverified", cls: "badge-gray" },
    COMMUNITY_SUBMITTED: { label: "Community submitted", cls: "badge-amber" },
    OWNER_VERIFIED: { label: "Owner verified", cls: "badge-local" },
    ADMIN_VERIFIED: { label: "Admin verified", cls: "badge-local" },
    COMMUNITY_VERIFIED: { label: "Community verified", cls: "badge-amber" },
  };
  const v = map[status] ?? map.UNVERIFIED;
  return <span className={`badge ${v.cls}`}>{v.label}</span>;
}

export function BusinessCard({ b, onOpen, showDemoTag = true }: { b: Business; onOpen: (id: string) => void; showDemoTag?: boolean }) {
  const open = isOpenNow(b);
  return (
    <article className="card card-tap biz-card">
      <PlaceholderArt b={b} height={110} />
      <div className="biz-card-body">
        <div className="biz-card-main">
          <div className="badge-row" style={{ marginBottom: 6 }}>
            {showDemoTag && b.isDemo && <span className="badge badge-demo">DEMO</span>}
            <OwnershipBadge b={b} />
          </div>
          <h3 className="biz-name">
            <a
              href={`#/business/${b.id}`}
              onClick={(e) => { e.preventDefault(); onOpen(b.id); }}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {b.name}
            </a>
          </h3>
          <div className="biz-meta">
            <span>{catLabel(b.categoryId)}</span>
            <span>·</span>
            <span>{formatDistance(distanceFromCenter(b))}</span>
            <span>·</span>
            <span className={open ? "badge-open badge" : "badge-closed badge"} style={{ padding: "1px 8px" }}>
              {open ? "Open now" : "Closed"}
            </span>
          </div>
          {b.description && <p className="biz-desc">{b.description}</p>}
          <div className="badge-row" style={{ marginTop: 8 }}>
            <FlavorBadge b={b} />
          </div>
          <p className="price-tag">{priceLabel(b.priceLevel)}</p>
        </div>
        <div className="biz-card-side">
          <ScoreDial value={b.localScore} />
        </div>
      </div>
      <div style={{ padding: "0 16px 15px" }}>
        <button className="btn btn-secondary btn-sm" onClick={() => onOpen(b.id)}>View Place →</button>
      </div>
    </article>
  );
}

export function catLabel(categoryId: string): string {
  switch (categoryId) {
    case "cat-food": return "Local Food";
    case "cat-shop": return "Shops & Crafts";
    case "cat-stay": return "Homestays";
    case "cat-experience": return "Experiences";
    case "cat-explore": return "Attractions";
    default: return "Local Place";
  }
}

export function catEmoji(categoryId: string): string {
  switch (categoryId) {
    case "cat-food": return "🍜";
    case "cat-shop": return "🎨";
    case "cat-stay": return "🏡";
    case "cat-experience": return "🧑‍🌾";
    case "cat-explore": return "🚶";
    default: return "📍";
  }
}

export function EmptyState({ icon, title, body, action }: { icon: string; title: string; body: string; action?: React.ReactNode }) {
  return (
    <div className="state-block">
      <div className="big" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      {action}
    </div>
  );
}

export function Toast({ message }: { message: string }) {
  return <div className="toast" role="status">{message}</div>;
}

export function useToast(): [string | null, (m: string) => void] {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2600);
    return () => clearTimeout(t);
  }, [msg]);
  return [msg, setMsg];
}

export function ScoreBreakdown({ b }: { b: Business }) {
  const factors = [
    { name: "Local ownership", max: 30, v: b.scoreInputs.ownership, why: "Owner is a Riverstone resident" },
    { name: "Community presence", max: 20, v: b.scoreInputs.community, why: "Local staff, local networks, years of service" },
    { name: "Local products & services", max: 20, v: b.scoreInputs.localProducts, why: "Local sourcing, local craft" },
    { name: "Independent business", max: 15, v: b.scoreInputs.independence, why: "Not part of a chain" },
    { name: "Sustainability & practices", max: 10, v: b.scoreInputs.sustainability, why: "Community & environmental practices" },
    { name: "Visitor reviews", max: 5, v: b.scoreInputs.reviews, why: "Consistent visitor feedback" },
  ];
  return (
    <div className="score-factors">
      {factors.map((f) => (
        <div className="score-factor" key={f.name}>
          <span className="name">{f.name}</span>
          <span className="pts tnum">{f.v}/{f.max}</span>
          <span className="bar"><i style={{ width: `${(f.v / f.max) * 100}%` }} /></span>
          <span className="why">{f.why}</span>
        </div>
      ))}
    </div>
  );
}

export function HoursTable({ b }: { b: Business }) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return (
    <div className="small tnum">
      {days.map((d, i) => (
        <div className="row-between" key={d} style={{ padding: "3px 0", color: i === today ? "var(--ink)" : "var(--muted)", fontWeight: i === today ? 650 : 400 }}>
          <span>{d}</span><span>{b.hours[i] ?? "Closed"}</span>
        </div>
      ))}
    </div>
  );
}

export function useNow(): Date {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export function hoursOneLine(b: Business): string {
  return hoursLabel(b);
}

export function elUnused() { return el; }
