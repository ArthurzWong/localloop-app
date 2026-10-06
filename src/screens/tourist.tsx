// ─── Tourist screens ─────────────────────────────────────────────────────────
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getApprovedBusinesses, getCategories, getDestination, getFavoriteBusinesses, getFavoriteIds,
  getImpactSummary, getImpactEvents, getReviewsFor, getRoutes, getBusinessById, isFavorite,
  toggleFavorite, addReview, markVisited, hasMarkedVisited, rankBusinesses, isOpenNow,
  priceLabel, formatDistance, distanceFromCenter, distanceKm, businessesInCategory, type SortKey,
} from "../lib/store";
import { MiniMap } from "../lib/map";
import type { Business } from "../lib/types";
import {
  BusinessCard, ScoreDial, OwnershipBadge, VerificationBadge, PlaceholderArt, EmptyState,
  Toast, useToast, ScoreBreakdown, HoursTable, catLabel, catEmoji,
} from "../components/ui";
import { FlavorBadge, FlavorCard, MenuList } from "../components/flavor";
import { hasGentleOption, avgFlavor, FLAVOR_AXES, flavorWord } from "../lib/store";

export interface Nav {
  go(hash: string): void;
}

// ── Home ─────────────────────────────────────────────────────────────────────
export function HomeScreen({ nav }: { nav: Nav }) {
  const dest = getDestination();
  const cats = getCategories();
  const all = getApprovedBusinesses();
  const routes = getRoutes();
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | null>(null);
  const [locNote, setLocNote] = useState<string | null>(null);

  const askLocation = () => {
    if (!navigator.geolocation) {
      setLocNote("Location isn't available on this device — showing Riverstone centre.");
      return;
    }
    setLocNote("Requesting location…");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setUserPos({ lat: p.coords.latitude, lng: p.coords.longitude });
        setLocNote(null);
      },
      () => setLocNote("Location permission denied — showing Riverstone centre instead."),
      { timeout: 8000 }
    );
  };

  const origin = userPos ?? dest.center;
  const recommended = useMemo(
    () => rankBusinesses(all, "recommended", { userLat: origin.lat, userLng: origin.lng }).slice(0, 4),
    [all, origin.lat, origin.lng]
  );

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-kicker">Tourism should benefit the people who live here</div>
        <h1>Discover the real <em>{dest.name}</em>.</h1>
        <p className="hero-sub">
          Find places owned by the people who live here — food stalls, family kitchens, craft
          workshops and homestays, not another chain.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#/explore">Explore Local</a>
          <a className="btn btn-secondary" href="#/submit">I'm a Local Business</a>
        </div>
        <div className="mt-16">
          <button className="btn btn-ghost btn-sm" onClick={askLocation}>📍 {userPos ? "Using your location" : "Use my location"}</button>
          {locNote && <p className="small faint" style={{ marginTop: 6 }}>{locNote}</p>}
        </div>
      </section>

      <section className="hero-art" aria-hidden="true">
        <PlaceholderArtWithAttr />
      </section>

      <section className="sec">
        <div className="sec-head"><h2>What are you looking for?</h2></div>
        <div className="cat-grid">
          {cats.map((c) => {
            const count = all.filter((b) => b.categoryId === c.id || (b.alsoCategories ?? []).includes(c.id)).length;
            return (
              <button key={c.id} className="cat-btn" onClick={() => nav.go(`#/explore?cat=${c.slug}`)}>
                <span className="cat-emoji" aria-hidden="true">{c.emoji}</span>
                {c.label}
                <span className="cat-count">{count} local place{count === 1 ? "" : "s"}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <h2>Recommended local picks</h2>
          <a className="sec-link" href="#/explore">See all →</a>
        </div>
        <div className="biz-list">
          {recommended.map((b) => <BusinessCard key={b.id} b={b} onOpen={(id) => nav.go(`#/business/${id}`)} />)}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <h2>Walk Local routes</h2>
          <a className="sec-link" href="#/explore">All routes →</a>
        </div>
        {routes.slice(0, 2).map((r) => (
          <button
            key={r.id}
            className="card card-pad card-tap"
            style={{ width: "100%", textAlign: "left", border: "1px solid var(--line)", background: "var(--surface)" }}
            onClick={() => nav.go(`#/route/${r.id}`)}
          >
            <h3>{r.name}</h3>
            <p className="muted small" style={{ marginTop: 4 }}>{r.description}</p>
            <p className="small tnum faint" style={{ marginTop: 8 }}>
              {r.distanceKm} km · ~{r.minutes} min walk · {r.stops.length} stops · est. RM{r.estimatedSpendRM} local spend
            </p>
          </button>
        ))}
      </section>

      <LandingSections nav={nav} />
    </div>
  );
}

function PlaceholderArtWithAttr() {
  return (
    <div className="ph" style={{ height: 150 }} role="img" aria-label="Illustrated riverside town">
      <svg viewBox="0 0 100 40" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="100" height="40" fill="#dcebee" />
        <circle cx="78" cy="9" r="5" fill="#f6c88f" />
        <path d="M0 26 Q 25 20 50 24 T 100 22 V 40 H 0 Z" fill="#a9cfdb" />
        <path d="M0 30 Q 30 26 55 30 T 100 29 V 40 H 0 Z" fill="#2e6e82" opacity="0.75" />
        <path d="M8 24 l5 -8 5 8 z M20 24 l4 -6 4 6 z" fill="#ffffff" opacity="0.8" />
      </svg>
    </div>
  );
}

function LandingSections({ nav }: { nav: Nav }) {
  const impact = getImpactSummary();
  return (
    <>
      <section className="land-section">
        <h2>Tourism should benefit the people who live there.</h2>
        <p className="land-copy mt-8">
          Visitors spend billions in destinations every year. Too much of that spending flows to
          large chains and companies outside the community. LocalLoop helps visitors discover
          independent businesses, local experiences and community-owned places — so the value
          stays where you're standing.
        </p>
      </section>

      <section className="land-section">
        <div className="row-between">
          <h2>Keep more tourism value local.</h2>
          <span className="badge badge-demo">Demo data</span>
        </div>
        <div className="metrics">
          <div className="stat"><div className="v tnum">{getApprovedBusinesses().length}</div><div className="k">Local businesses discovered</div></div>
          <div className="stat"><div className="v tnum">{impact.businessesVisited}</div><div className="k">Local places visited</div></div>
          <div className="stat"><div className="v tnum">RM{impact.estimatedSpendRM}</div><div className="k">Estimated local spending</div></div>
        </div>
        <p className="small faint mt-8">
          Figures on this page are demo estimates from your activity in this app — not recorded
          transactions. Real spending isn't measured until payments happen in-product.
        </p>
      </section>

      <section className="land-section card card-pad">
        <h2>Are you a local business?</h2>
        <p className="land-copy">Let visitors discover you without needing a big marketing budget, a website, or any technical skills.</p>
        <div className="mt-16 row" style={{ flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="#/submit">Get Listed</a>
          <a className="btn btn-ghost" href="#/admin">Admin console →</a>
        </div>
      </section>

      <section className="land-section card card-pad">
        <h2>Know a great local place?</h2>
        <p className="land-copy">Recommend a business and our team will verify it before it appears.</p>
        <a className="btn btn-secondary mt-16" href="#/submit?via=community">Recommend a Business</a>
      </section>

      <footer className="foot">
        <span>LocalLoop — Travel local. Spend local. Keep the value local.</span>
        <span>Fictional demo destination: {getDestination().name}</span>
        <a href="#/admin">Admin</a>
      </footer>
    </>
  );
}

// ── Explore ──────────────────────────────────────────────────────────────────
export function ExploreScreen({ nav, initialCat, initialRoute }: { nav: Nav; initialCat?: string; initialRoute?: string }) {
  const cats = getCategories();
  const all = getApprovedBusinesses();
  const routes = getRoutes();
  const [cat, setCat] = useState<string | null>(
    initialCat ? (cats.find((c) => c.slug === initialCat)?.id ?? null) : null
  );
  const [sort, setSort] = useState<SortKey>("recommended");
  const [openOnly, setOpenOnly] = useState(false);
  const [filters, setFilters] = useState<{ locallyOwned: boolean; family: boolean; eco: boolean; highlyRated: boolean; under20: boolean; walk: boolean; gentle: boolean }>({
    locallyOwned: false, family: false, eco: false, highlyRated: false, under20: false, walk: false, gentle: false,
  });
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (initialRoute) {
      const r = routes.find((x) => x.id === initialRoute);
      if (r) setCat(null);
    }
  }, [initialRoute, routes]);

  const filtered = useMemo(() => {
    let list = cat ? businessesInCategory(all, cat) : all;
    if (openOnly) list = list.filter((b) => isOpenNow(b));
    if (filters.locallyOwned) list = list.filter((b) => b.locallyOwned);
    if (filters.family) list = list.filter((b) => b.ownershipType === "family_owned");
    if (filters.eco) list = list.filter((b) => b.scoreInputs.sustainability >= 9);
    if (filters.highlyRated) list = list.filter((b) => b.ratingAvg >= 4.6 && b.ratingCount > 0);
    if (filters.under20) list = list.filter((b) => b.priceLevel === 1);
    if (filters.walk) {
      const origin = userPos ?? getDestination().center;
      list = list.filter((b) => distanceKm(origin.lat, origin.lng, b.latitude, b.longitude) <= 1.2);
    }
    if (filters.gentle) list = list.filter(hasGentleOption);
    return rankBusinesses(list, sort, { userLat: userPos?.lat, userLng: userPos?.lng, categorySlug: cat ?? undefined });
  }, [all, cat, sort, openOnly, filters, userPos]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length + (openOnly ? 1 : 0);

  return (
    <div className="page">
      <div className="topbar"><h1>Explore Local</h1></div>

      <div className="chip-row" role="tablist" aria-label="Categories">
        <button className={`chip ${cat === null ? "active" : ""}`} onClick={() => setCat(null)}>All</button>
        {cats.map((c) => (
          <button key={c.id} className={`chip ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)} aria-pressed={cat === c.id}>
            {c.emoji} {c.label}
          </button>
        ))}
      </div>

      <div className="chip-row" role="group" aria-label="Filters">
        <button className={`chip ${openOnly ? "active" : ""}`} onClick={() => setOpenOnly(!openOnly)}>Open now</button>
        <button className={`chip ${filters.locallyOwned ? "active" : ""}`} onClick={() => setFilters({ ...filters, locallyOwned: !filters.locallyOwned })}>Locally owned</button>
        <button className={`chip ${filters.family ? "active" : ""}`} onClick={() => setFilters({ ...filters, family: !filters.family })}>Family owned</button>
        <button className={`chip ${filters.eco ? "active" : ""}`} onClick={() => setFilters({ ...filters, eco: !filters.eco })}>Eco-friendly</button>
        <button className={`chip ${filters.highlyRated ? "active" : ""}`} onClick={() => setFilters({ ...filters, highlyRated: !filters.highlyRated })}>Highly rated</button>
        <button className={`chip ${filters.under20 ? "active" : ""}`} onClick={() => setFilters({ ...filters, under20: !filters.under20 })}>Under RM20</button>
        <button className={`chip ${filters.walk ? "active" : ""}`} onClick={() => setFilters({ ...filters, walk: !filters.walk })}>Walking distance</button>
        <button className={`chip ${filters.gentle ? "active" : ""}`} onClick={() => setFilters({ ...filters, gentle: !filters.gentle })} title="Places with dishes gentle on spice, sweetness, sourness and MSG">🌶️ Gentle flavors</button>
        {activeFilterCount > 0 && (
          <button className="chip" onClick={() => { setFilters({ locallyOwned: false, family: false, eco: false, highlyRated: false, under20: false, walk: false, gentle: false }); setOpenOnly(false); }}>
            Clear ({activeFilterCount})
          </button>
        )}
      </div>

      <div className="row-between" style={{ margin: "6px 2px 12px" }}>
        <span className="small muted tnum">{filtered.length} place{filtered.length === 1 ? "" : "s"}</span>
        <div className="seg" role="group" aria-label="Sort">
          {(["recommended", "distance", "score", "rating", "open"] as SortKey[]).map((s) => (
            <button key={s} className={sort === s ? "active" : ""} onClick={() => setSort(s)}>
              {s === "recommended" ? "Recommended" : s === "distance" ? "Distance" : s === "score" ? "Local Score" : s === "rating" ? "Rating" : "Open Now"}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No places match these filters"
          body="Try removing a filter or switching category — the demo destination has places across five categories."
          action={<button className="btn btn-secondary btn-sm" onClick={() => { setFilters({ locallyOwned: false, family: false, eco: false, highlyRated: false, under20: false, walk: false, gentle: false }); setOpenOnly(false); setCat(null); }}>Reset filters</button>}
        />
      ) : (
        <div className="biz-list">
          {filtered.map((b) => <BusinessCard key={b.id} b={b} onOpen={(id) => nav.go(`#/business/${id}`)} />)}
        </div>
      )}

      <section className="sec">
        <div className="sec-head"><h2>Walk Local</h2></div>
        <p className="muted small" style={{ marginBottom: 10 }}>
          Guided walking loops that link local businesses. Distances and times are estimates; the
          environmental benefit of walking is real but we don't claim exact CO₂ numbers.
        </p>
        {routes.map((r) => (
          <button
            key={r.id}
            className="card card-pad card-tap"
            style={{ width: "100%", textAlign: "left", border: "1px solid var(--line)", background: "var(--surface)", marginBottom: 10 }}
            onClick={() => nav.go(`#/route/${r.id}`)}
          >
            <h3>{r.name}</h3>
            <p className="muted small" style={{ marginTop: 4 }}>{r.description}</p>
            <p className="small tnum faint" style={{ marginTop: 8 }}>
              {r.distanceKm} km · ~{r.minutes} min · est. RM{r.estimatedSpendRM} local spend
            </p>
          </button>
        ))}
      </section>
    </div>
  );
}

// ── Route detail ─────────────────────────────────────────────────────────────
export function RouteScreen({ nav, routeId }: { nav: Nav; routeId: string }) {
  const route = getRoutes().find((r) => r.id === routeId);
  if (!route) {
    return <EmptyState icon="🚶" title="Route not found" body="This walking route doesn't exist." action={<a className="btn btn-secondary btn-sm" href="#/explore">Back to Explore</a>} />;
  }
  return (
    <div className="page">
      <div className="topbar">
        <button className="btn btn-ghost btn-sm" onClick={() => nav.go("#/explore")}>← Explore</button>
      </div>
      <h1>{route.name}</h1>
      <p className="muted" style={{ marginTop: 8 }}>{route.description}</p>
      <div className="stat-grid mt-16">
        <div className="stat"><div className="v tnum">{route.distanceKm} km</div><div className="k">Distance</div></div>
        <div className="stat"><div className="v tnum">~{route.minutes} min</div><div className="k">Walking time</div></div>
        <div className="stat"><div className="v tnum">RM{route.estimatedSpendRM}</div><div className="k">Est. local spend</div></div>
      </div>
      <div className="route-stops">
        {route.stops.map((s) => {
          const b = s.businessId ? getBusinessById(s.businessId) : undefined;
          return (
            <div className="route-stop" key={s.order}>
              <div className="n">Stop {s.order}</div>
              <div className="t">
                {b ? (
                  <a href={`#/business/${b.id}`} onClick={(e) => { e.preventDefault(); nav.go(`#/business/${b!.id}`); }}>{b.name}</a>
                ) : (
                  s.label
                )}
              </div>
              <div className="d">{s.note}</div>
              {b && <div className="small faint" style={{ marginTop: 2 }}>{catLabel(b.categoryId)} · {formatDistance(distanceFromCenter(b))} from centre · Local Score {b.localScore}</div>}
            </div>
          );
        })}
      </div>
      <div className="notice notice-accent mt-8">
        <span aria-hidden="true">🌿</span>
        <span>Walking this loop keeps your spending on foot, in the neighbourhood. We describe the
        benefit qualitatively rather than quoting an exact CO₂ figure — we'd rather be honest than
        precise-sounding.</span>
      </div>
    </div>
  );
}

// ── Map screen ───────────────────────────────────────────────────────────────
export function MapScreen({ nav }: { nav: Nav }) {
  const all = getApprovedBusinesses();
  const cats = getCategories();
  const [cat, setCat] = useState<string | null>(null);
  const [openOnly, setOpenOnly] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mapRef = useRef<MiniMap | null>(null);

  const filtered = useMemo(() => {
    let list = cat ? businessesInCategory(all, cat) : all;
    if (openOnly) list = list.filter((b) => isOpenNow(b));
    return list;
  }, [all, cat, openOnly]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const m = new MiniMap(canvasRef.current, filtered, {
      onSelect: (id) => { setSelected(id); },
    });
    mapRef.current = m;
    return () => { m.destroy(); mapRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mapRef.current?.setPoints(filtered);
    if (selected && !filtered.some((b) => b.id === selected)) setSelected(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

  useEffect(() => {
    mapRef.current?.setSelected(selected);
  }, [selected]);

  const sel = selected ? getBusinessById(selected) : undefined;

  return (
    <div className="page">
      <div className="topbar"><h1>Map</h1></div>
      <div className="map-wrap">
        <canvas ref={canvasRef} className="map-canvas" aria-label="Interactive map of local businesses" />
        <div className="map-filters">
          <div className="chip-row">
            <button className={`chip ${cat === null ? "active" : ""}`} onClick={() => setCat(null)}>All</button>
            {cats.map((c) => (
              <button key={c.id} className={`chip ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>{c.emoji} {c.label.split(" ")[0]}</button>
            ))}
            <button className={`chip ${openOnly ? "active" : ""}`} onClick={() => setOpenOnly(!openOnly)}>Open</button>
          </div>
        </div>
        <div className="map-ctrl">
          <button aria-label="Zoom in" onClick={() => mapRef.current?.flyTo(getDestination().center.lat, getDestination().center.lng, Math.min(18, 16.5))}>+</button>
          <button aria-label="Zoom out" onClick={() => mapRef.current?.flyTo(getDestination().center.lat, getDestination().center.lng, 14.5)}>−</button>
        </div>
        {sel && (
          <div className="map-pop">
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="badge-row" style={{ marginBottom: 4 }}>
                {sel.isDemo && <span className="badge badge-demo">DEMO</span>}
                <OwnershipBadge b={sel} />
              </div>
              <h3 style={{ fontSize: 15.5 }}>{sel.name}</h3>
              <div className="small muted">{catLabel(sel.categoryId)} · {priceLabel(sel.priceLevel)} · Local Score {sel.localScore}</div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => nav.go(`#/business/${sel.id}`)}>View</button>
            <button className="btn btn-ghost btn-sm" aria-label="Close" onClick={() => setSelected(null)}>✕</button>
          </div>
        )}
      </div>
      <p className="small faint" style={{ marginTop: 8 }}>
        Drag to pan, scroll or pinch to zoom, tap a marker for details. {filtered.length} of {all.length} places shown.
      </p>
    </div>
  );
}

// ── Business detail ──────────────────────────────────────────────────────────
export function BusinessDetailScreen({ nav, id }: { nav: Nav; id: string }) {
  const b = getBusinessById(id);
  const [toast, setToast] = useToast();
  const [fav, setFav] = useState(() => (id ? isFavorite(id) : false));
  const [visited, setVisited] = useState(() => (id ? hasMarkedVisited(id) : false));
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [visitDate, setVisitDate] = useState(new Date().toISOString().slice(0, 10));
  const [reviewErr, setReviewErr] = useState<string | null>(null);
  const [showHours, setShowHours] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  if (!b || b.status === "rejected") {
    return <EmptyState icon="🤔" title="Business not found" body="This listing doesn't exist or was removed." action={<a className="btn btn-secondary btn-sm" href="#/explore">Back to Explore</a>} />;
  }
  if (b.status === "pending") {
    return (
      <EmptyState
        icon="⏳"
        title="Awaiting verification"
        body={`"${b.name}" has been submitted and is pending admin verification. Local status: Unverified. It isn't publicly listed yet.`}
        action={<a className="btn btn-secondary btn-sm" href="#/explore">Back to Explore</a>}
      />
    );
  }

  const reviews = getReviewsFor(b.id);
  const open = isOpenNow(b);
  const dest = getDestination();
  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${b.latitude},${b.longitude}`;
  const waMsg = encodeURIComponent(`Hi ${b.name}! I found your place on LocalLoop.`);

  const onSave = () => {
    const nowFav = toggleFavorite(b.id);
    setFav(nowFav);
    setToast(nowFav ? "Saved to your list" : "Removed from saved");
  };

  const onVisitYes = () => {
    markVisited(b.id);
    setVisited(true);
    const est = b.priceLevel === 1 ? 15 : b.priceLevel === 2 ? 35 : 80;
    setToast(`Thanks! Impact updated — est. RM${est} local spending (estimate)`);
  };

  const submitReview = () => {
    if (!rating) { setReviewErr("Pick a star rating first."); return; }
    if (reviewText.trim().length < 4) { setReviewErr("Please write a short comment (4+ characters)."); return; }
    addReview(b.id, rating, reviewText, visitDate);
    setReviewText(""); setRating(0); setReviewErr(null);
    setToast("Review added — thanks for helping other travellers");
  };

  return (
    <div className="page">
      <div className="detail-hero">
        <div className="detail-back">
          <button className="btn btn-secondary btn-sm" onClick={() => nav.go("#/explore")}>← Back</button>
        </div>
        <PlaceholderArt b={b} height={200} />
      </div>

      <div className="detail-title-row">
        <div style={{ flex: 1 }}>
          <div className="badge-row" style={{ marginBottom: 8 }}>
            {b.isDemo && <span className="badge badge-demo">DEMO</span>}
            <OwnershipBadge b={b} />
            <FlavorBadge b={b} />
            <span className={`badge ${open ? "badge-open" : "badge-closed"}`}>{open ? "Open now" : "Closed"}</span>
          </div>
          <h1 style={{ fontSize: 26 }}>{b.name}</h1>
          <p className="muted" style={{ marginTop: 6 }}>
            {catEmoji(b.categoryId)} {catLabel(b.categoryId)} · {formatDistance(distanceFromCenter(b))} from {dest.name} centre · {priceLabel(b.priceLevel)}
          </p>
        </div>
        <ScoreDial value={b.localScore} size={72} />
      </div>

      {b.verificationNote && (
        <div className="notice mt-16"><span aria-hidden="true">🛡️</span><span><b>{b.verificationStatus.replace(/_/g, " ")}</b> — {b.verificationNote}</span></div>
      )}

      <div className="detail-actions">
        <a className="btn btn-primary" href={gmapsUrl} target="_blank" rel="noreferrer">🧭<span>Directions</span></a>
        <a className="btn btn-secondary" href={`tel:${b.phone.replace(/\s/g, "")}`}>📞<span>Call</span></a>
        <a className="btn btn-secondary" href={`https://wa.me/${b.whatsapp.replace(/[^0-9]/g, "")}?text=${waMsg}`} target="_blank" rel="noreferrer">💬<span>WhatsApp</span></a>
        <button className="btn btn-secondary" onClick={onSave}>{fav ? "♥" : "♡"}<span>{fav ? "Saved" : "Save"}</span></button>
      </div>

      {b.description && <p className="mt-16" style={{ fontSize: 16 }}>{b.description}</p>}

      {b.story && (
        <section className="card card-pad mt-16">
          <h3>Why this place matters</h3>
          <p className="muted" style={{ marginTop: 8 }}>{b.story}</p>
        </section>
      )}

      {(b.flavorProfile || (b.menu && b.menu.length > 0)) && (
        <section className="card card-pad mt-16">
          <h3>Taste guide & menu</h3>
          <p className="small muted" style={{ marginTop: 4 }}>
            New to local food? These 0–3 dials show how intense each flavor runs here, so you can
            order with confidence.
          </p>
          {b.flavorProfile && <div className="mt-16"><FlavorCard fp={b.flavorProfile} /></div>}
          {b.menu && b.menu.length > 0 && (
            <>
              <div className="row-between mt-16">
                <h3 style={{ fontSize: 15.5 }}>Menu</h3>
                <button className="btn btn-ghost btn-sm" onClick={() => setShowMenu(!showMenu)} aria-expanded={showMenu}>{showMenu ? "Hide" : "Show"}</button>
              </div>
              {showMenu && <MenuList menu={b.menu} />}
              <p className="small faint" style={{ marginTop: 8 }}>
                Prices and flavors are reported by the business and verified during listing review —
                ask the stall for today's version.
              </p>
            </>
          )}
        </section>
      )}

      {(b.whyVisit || b.whatsLocal) && (
        <section className="card card-pad mt-16">
          {b.whyVisit && (<><h3>Why visit?</h3><p className="muted" style={{ marginTop: 6 }}>{b.whyVisit}</p></>)}
          {b.whatsLocal && (<><h3 className="mt-16">What's local here?</h3><p className="muted" style={{ marginTop: 6 }}>{b.whatsLocal}</p></>)}
        </section>
      )}

      <section className="card card-pad mt-16">
        <button className="row-between" style={{ width: "100%", background: "none", border: "none", padding: 0, font: "inherit" }} onClick={() => setShowHours(!showHours)} aria-expanded={showHours}>
          <h3>Opening hours {open ? "" : ""}</h3>
          <span className="muted">{showHours ? "▲" : "▼"}</span>
        </button>
        <p className="small muted" style={{ marginTop: 6 }}>Today: {b.hours[new Date().getDay()] ?? "Closed"}</p>
        {showHours && <div className="mt-8"><HoursTable b={b} /></div>}
      </section>

      <section className="card card-pad mt-16">
        <h3>Local Score: {b.localScore}/100</h3>
        <p className="small muted" style={{ marginTop: 4 }}>
          A transparent, editable measure — not a scientific rating. Admins adjust the inputs below;
          the total recalculates.
        </p>
        <div className="mt-16"><ScoreBreakdown b={b} /></div>
      </section>

      <section className="card card-pad mt-16">
        <h3>Did you visit this place?</h3>
        {visited ? (
          <p className="small muted mt-8">✓ Marked as visited — it's counted in your Local Impact. Thank you for supporting a local business.</p>
        ) : (
          <>
            <p className="small muted mt-8">Your answer updates your estimated local impact (an estimate, not a transaction).</p>
            <div className="row mt-8">
              <button className="btn btn-primary btn-sm" onClick={onVisitYes}>Yes, I visited</button>
              <button className="btn btn-ghost btn-sm" onClick={() => setToast("No problem — maybe next time!")}>No</button>
            </div>
          </>
        )}
      </section>

      <section className="card card-pad mt-16">
        <div className="row-between">
          <h3>Reviews</h3>
          <span className="small muted tnum">{b.ratingAvg > 0 ? `${b.ratingAvg.toFixed(1)} ★ · ${b.ratingCount}` : "No reviews yet"}</span>
        </div>
        <div className="mt-8">
          {reviews.length === 0 && <p className="small muted">Be the first to leave a review.</p>}
          {reviews.map((r) => (
            <div className="review" key={r.id}>
              <div className="review-head">
                <span className="review-author">{r.author} {r.verifiedVisit && <span className="badge badge-local" style={{ fontSize: 10, padding: "2px 7px" }}>verified visit</span>}</span>
                <span className="review-date">{r.visitedDate}</span>
              </div>
              <div className="stars" aria-label={`${r.rating} out of 5`}>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16" style={{ borderTop: "1px solid var(--line)", paddingTop: 14 }}>
          <h4 style={{ fontSize: 15 }}>Leave a review</h4>
          <div className="rating-input mt-8" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} className={n <= rating ? "on" : ""} onClick={() => setRating(n)} role="radio" aria-checked={n === rating} aria-label={`${n} star${n > 1 ? "s" : ""}`}>★</button>
            ))}
          </div>
          <textarea
            className="textarea mt-8"
            placeholder="What did you think? (no spam, no business self-reviews)"
            value={reviewText}
            maxLength={400}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <div className="form-row mt-8" style={{ alignItems: "end" }}>
            <div className="field" style={{ marginBottom: 0 }}>
              <label htmlFor="visit-date">Visit date</label>
              <input id="visit-date" type="date" className="input" value={visitDate} max={new Date().toISOString().slice(0, 10)} onChange={(e) => setVisitDate(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={submitReview}>Submit review</button>
          </div>
          {reviewErr && <p className="small" style={{ color: "var(--danger)", marginTop: 6 }} role="alert">{reviewErr}</p>}
        </div>
      </section>

      {toast && <Toast message={toast} />}
    </div>
  );
}

// ── Saved ────────────────────────────────────────────────────────────────────
export function SavedScreen({ nav }: { nav: Nav }) {
  const favs = getFavoriteBusinesses();
  const [toast, setToast] = useToast();
  const [, force] = useState(0);
  useEffect(() => {
    const h = () => force((n) => n + 1);
    window.addEventListener("localloop:change", h);
    return () => window.removeEventListener("localloop:change", h);
  }, []);

  return (
    <div className="page">
      <div className="topbar"><h1>Saved</h1></div>
      {favs.length === 0 ? (
        <EmptyState
          icon="♡"
          title="Nothing saved yet"
          body="Tap the heart on any business to keep it here while you plan your trip."
          action={<a className="btn btn-primary btn-sm" href="#/explore">Explore Local</a>}
        />
      ) : (
        <div className="biz-list">
          {favs.map((b) => (
            <div key={b.id}>
              <BusinessCard b={b} onOpen={(id) => nav.go(`#/business/${id}`)} />
              <button
                className="btn btn-ghost btn-sm"
                style={{ marginTop: -6 }}
                onClick={() => { toggleFavorite(b.id); setToast("Removed from saved"); }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {toast && <Toast message={toast} />}
    </div>
  );
}

// ── Profile / Impact ─────────────────────────────────────────────────────────
export function ProfileScreen() {
  const impact = getImpactSummary();
  const events = getImpactEvents();
  const visitedIds = [...new Set(events.map((e) => e.businessId))];
  return (
    <div className="page">
      <div className="topbar"><h1>Profile & Impact</h1></div>
      <div className="notice notice-accent">
        <span aria-hidden="true">ℹ️</span>
        <span>You can browse everything without an account. Saving, reviews and impact tracking
        live on this device for the demo — a real deployment would attach them to a Supabase Auth account.</span>
      </div>

      <section className="card card-pad mt-16">
        <div className="row-between">
          <h2>Your Local Impact</h2>
          <span className="badge badge-demo">Demo estimates</span>
        </div>
        <div className="stat-grid mt-16">
          <div className="stat"><div className="v tnum">{impact.businessesVisited}</div><div className="k">Local businesses visited</div></div>
          <div className="stat"><div className="v tnum">RM{impact.estimatedSpendRM}</div><div className="k">Estimated local spending</div></div>
          <div className="stat"><div className="v tnum">RM{impact.thisTripRM}</div><div className="k">This trip (14 days)</div></div>
        </div>
        <p className="small faint mt-8">
          These are clearly-labelled estimates based on the places you marked as visited and typical
          price bands. No actual transaction data exists in the MVP.
        </p>
      </section>

      <section className="card card-pad mt-16">
        <h3>Impact log</h3>
        {events.length === 0 ? (
          <p className="small muted mt-8">No visits marked yet. Open a business and answer "Did you visit this place?" to start the log.</p>
        ) : (
          <div className="mt-8">
            {visitedIds.map((idv) => {
              const b = getBusinessById(idv);
              const ev = events.find((e) => e.businessId === idv)!;
              return (
                <div className="row-between" key={idv} style={{ padding: "8px 0", borderTop: "1px solid var(--line)" }}>
                  <span className="small" style={{ fontWeight: 600 }}>{b?.name ?? idv}</span>
                  <span className="small muted tnum">est. RM{ev.estimatedSpendRM} · {ev.createdAt.slice(0, 10)}</span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="card card-pad mt-16">
        <h3>Preferences (optional)</h3>
        <p className="small muted">Set once, used to tune recommendations later.</p>
        <div className="mt-8">
          {["Food & coffee", "Crafts & culture", "Nature & walking", "Family-friendly", "Budget picks"].map((p, i) => (
            <label className="check-row" key={p}>
              <input type="checkbox" defaultChecked={i < 2} onChange={() => { /* stored with profile in Phase 2 */ }} />
              <span className="txt">{p}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
