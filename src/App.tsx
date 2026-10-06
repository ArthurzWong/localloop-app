// ─── App shell: routing, bottom nav, assistant FAB, PWA install ──────────────
import React, { useEffect, useState } from "react";
import { HomeScreen, ExploreScreen, MapScreen, BusinessDetailScreen, SavedScreen, ProfileScreen, RouteScreen } from "./screens/tourist";
import { SubmitScreen, AdminConsole, AssistantPanel } from "./screens/ops";

interface RouteInfo {
  name: string;
  parts: string[];
  query: URLSearchParams;
}

function parseHash(): RouteInfo {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [pathPart, queryPart] = raw.split("?");
  const parts = pathPart.split("/").filter(Boolean);
  return { name: parts[0] ?? "home", parts, query: new URLSearchParams(queryPart ?? "") };
}

function useHashRoute(): RouteInfo {
  const [route, setRoute] = useState(parseHash);
  useEffect(() => {
    const h = () => setRoute(parseHash());
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  return route;
}

const BRAND_MARK = (
  <svg width="18" height="18" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="5" />
    <circle cx="32" cy="30" r="5" fill="currentColor" />
    <path d="M32 46 v10 M22 56 h20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
  </svg>
);

const ICONS: Record<string, React.ReactNode> = {
  home: <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>,
  explore: <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>,
  map: <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14 M15 6v14" /></svg>,
  saved: <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.6-9.2-9C1.2 7.9 3 4.5 6.4 4.5c2 0 3.5 1.1 4.3 2.6h2.6c.8-1.5 2.3-2.6 4.3-2.6 3.4 0 5.2 3.4 3.6 6.5C19 15.4 12 20 12 20z" transform="scale(0.92) translate(1,1)" /></svg>,
  profile: <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>,
};

function Tabbar({ active, go }: { active: string; go: (h: string) => void }) {
  const tabs: { id: string; label: string; hash: string; icon: React.ReactNode }[] = [
    { id: "home", label: "Home", hash: "#/", icon: ICONS.home },
    { id: "explore", label: "Explore", hash: "#/explore", icon: ICONS.explore },
    { id: "map", label: "Map", hash: "#/map", icon: ICONS.map },
    { id: "saved", label: "Saved", hash: "#/saved", icon: ICONS.saved },
    { id: "profile", label: "Profile", hash: "#/profile", icon: ICONS.profile },
  ];
  return (
    <nav className="tabbar" aria-label="Main navigation">
      <div className="tabbar-inner">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? "active" : ""}`}
            onClick={() => go(t.hash)}
            aria-current={active === t.id ? "page" : undefined}
          >
            <span className="tab-ico">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function useInstallPrompt() {
  const [evt, setEvt] = useState<any>(null);
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    const h = (e: Event) => { e.preventDefault(); setEvt(e); };
    const hi = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", h);
    window.addEventListener("appinstalled", hi);
    return () => { window.removeEventListener("beforeinstallprompt", h); window.removeEventListener("appinstalled", hi); };
  }, []);
  const promptInstall = async () => {
    if (!evt) return false;
    evt.prompt();
    await evt.userChoice;
    setEvt(null);
    return true;
  };
  return { canInstall: !!evt, promptInstall, installed };
}

export function App() {
  const route = useHashRoute();
  const [assistantOpen, setAssistantOpen] = useState(false);
  const { canInstall, promptInstall } = useInstallPrompt();

  const nav = { go: (h: string) => { window.location.hash = h.startsWith("#") ? h : `#${h}`; } };

  useEffect(() => {
    if (!window.location.hash) window.location.hash = "#/";
    window.scrollTo(0, 0);
  }, [route.name, route.parts.join("/")]);

  const active = route.name === "" ? "home" : route.name;
  const showAssistant = !["submit", "admin"].includes(active);

  let screen: React.ReactNode;
  switch (active) {
    case "explore":
      screen = <ExploreScreen nav={nav} initialCat={route.query.get("cat") ?? undefined} />;
      break;
    case "business":
      screen = <BusinessDetailScreen nav={nav} id={route.parts[1] ?? ""} />;
      break;
    case "map":
      screen = <MapScreen nav={nav} />;
      break;
    case "saved":
      screen = <SavedScreen nav={nav} />;
      break;
    case "profile":
      screen = <ProfileScreen />;
      break;
    case "route":
      screen = <RouteScreen nav={nav} routeId={route.parts[1] ?? ""} />;
      break;
    case "submit":
      screen = <SubmitScreen />;
      break;
    case "admin":
      screen = <AdminConsole />;
      break;
    default:
      screen = <HomeScreen nav={nav} />;
  }

  const inDetail = active === "business" || active === "route" || active === "submit" || active === "admin";

  return (
    <>
      <header className="app-shell" style={{ paddingBottom: 0 }}>
        <div className="topbar">
          <a className="brand" href="#/" aria-label="LocalLoop home">
            <span className="brand-mark">{BRAND_MARK}</span>
            LocalLoop
          </a>
          <div className="row">
            <span className="demo-tag">DEMO · RIVERSTONE</span>
            {canInstall && (
              <button className="btn btn-secondary btn-sm" onClick={promptInstall}>Install app</button>
            )}
          </div>
        </div>
      </header>

      <main className="app-shell" id="main">
        {screen}
      </main>

      {showAssistant && (
        <button className="fab" onClick={() => setAssistantOpen(true)} aria-label="Open LocalLoop assistant">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3c-1.5 0-2.9-.3-4.1-1L3 20l1.3-4.1a8 8 0 0 1-.8-3.4A8.4 8.4 0 0 1 12 4.2a8.4 8.4 0 0 1 9 7.3z" />
            <path d="M8.5 11.5h.01 M12.5 11.5h.01 M16.5 11.5h.01" strokeWidth="2.6" />
          </svg>
        </button>
      )}
      {assistantOpen && showAssistant && <AssistantPanel onClose={() => setAssistantOpen(false)} nav={nav} />}

      {!inDetail && <Tabbar active={active} go={nav.go} />}
    </>
  );
}
