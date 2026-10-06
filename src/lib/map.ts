// ─── Canvas map renderer ─────────────────────────────────────────────────────
// Zero-dependency slippy-style map on <canvas>: tiles drawn procedurally
// (river, roads, blocks, greenery), businesses as tappable markers.
// No tile server, no external origin — works under strict CSP.
import { DEST } from "../data/seed";
import { distanceKm } from "./store";
import type { Business } from "./types";

export interface MapPoint {
  business: Business;
  x: number;
  y: number;
}

const TILE = 256;

function project(lat: number, lng: number, z: number): { x: number; y: number } {
  const scale = TILE * 2 ** z;
  const x = ((lng + 180) / 360) * scale;
  const sinLat = Math.sin((lat * Math.PI) / 180);
  const y = (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale;
  return { x, y };
}

export class MiniMap {
  private canvas: HTMLCanvasElement;
  private z = 15;
  private center = { ...DEST.center };
  private points: MapPoint[] = [];
  private selectedId: string | null = null;
  private onSelect: (id: string | null) => void;
  private ctx: CanvasRenderingContext2D | null = null;
  private dragState: { startX: number; startY: number; startCx: number; startCy: number } | null = null;
  private pinch: { dist: number; z: number } | null = null;
  private raf = 0;
  private detached = false;

  constructor(
    canvas: HTMLCanvasElement,
    businesses: Business[],
    opts: { initialCenter?: { lat: number; lng: number }; initialZoom?: number; onSelect: (id: string | null) => void }
  ) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    this.onSelect = opts.onSelect;
    if (!ctx) {
      // No 2D context (headless/odd env): stay inert but harmless.
      this.detached = true;
      this.setPoints(businesses);
      return;
    }
    this.ctx = ctx;
    if (opts.initialCenter) this.center = { ...opts.initialCenter };
    if (opts.initialZoom) this.z = opts.initialZoom;
    this.onSelect = opts.onSelect;
    this.setPoints(businesses);
    this.bindEvents();
    this.scheduleDraw();
  }

  setPoints(businesses: Business[]) {
    const w = this.cssWidth(), h = this.cssHeight();
    this.points = businesses.map((b) => {
      const p = project(b.latitude, b.longitude, this.z);
      return { business: b, x: p.x, y: p.y };
    });
    void w; void h;
  }

  setSelected(id: string | null) {
    this.selectedId = id;
    this.scheduleDraw();
  }

  flyTo(lat: number, lng: number, z?: number) {
    this.center = { lat, lng };
    if (z) this.z = z;
    this.scheduleDraw();
  }

  private cssWidth(): number { return this.canvas.clientWidth || 360; }
  private cssHeight(): number { return this.canvas.clientHeight || 420; }

  private dpr(): number { return Math.min(window.devicePixelRatio || 1, 2); }

  private resize() {
    if (!this.ctx) return;
    const d = this.dpr();
    const w = this.cssWidth(), h = this.cssHeight();
    if (this.canvas.width !== w * d || this.canvas.height !== h * d) {
      this.canvas.width = w * d;
      this.canvas.height = h * d;
    }
    this.ctx.setTransform(d, 0, 0, d, 0, 0);
  }

  private worldToScreen(wx: number, wy: number): { x: number; y: number } {
    const c = project(this.center.lat, this.center.lng, this.z);
    return { x: wx - c.x + this.cssWidth() / 2, y: wy - c.y + this.cssHeight() / 2 };
  }

  private screenToLatLng(sx: number, sy: number): { lat: number; lng: number } {
    const c = project(this.center.lat, this.center.lng, this.z);
    const wx = sx - this.cssWidth() / 2 + c.x;
    const wy = sy - this.cssHeight() / 2 + c.y;
    const scale = TILE * 2 ** this.z;
    const lng = (wx / scale) * 360 - 180;
    const n = Math.PI - 2 * Math.PI * (wy / scale);
    const lat = (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    return { lat, lng };
  }

  // ── Base scenery (procedural, deterministic) ──
  private drawBase() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.cssWidth(), h = this.cssHeight();
    ctx.fillStyle = "#eef0e4";
    ctx.fillRect(0, 0, w, h);

    // deterministic pseudo-random
    let seed = 7;
    const rnd = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };

    const tl = this.screenToLatLng(0, 0);
    const br = this.screenToLatLng(w, h);
    const latSpan = Math.abs(tl.lat - br.lat);
    const lngSpan = Math.abs(br.lng - tl.lng);

    // greenery patches
    ctx.fillStyle = "#dfe8cf";
    for (let i = 0; i < 14; i++) {
      const lat = Math.min(tl.lat, br.lat) + rnd() * latSpan;
      const lng = Math.min(tl.lng, br.lng) + rnd() * lngSpan;
      const p = project(lat, lng, this.z);
      const s = this.worldToScreen(p.x, p.y);
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, 30 + rnd() * 70, 22 + rnd() * 46, rnd() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    // blocks
    ctx.fillStyle = "#e3e1d5";
    ctx.strokeStyle = "#d6d3c3";
    for (let i = 0; i < 26; i++) {
      const lat = Math.min(tl.lat, br.lat) + rnd() * latSpan;
      const lng = Math.min(tl.lng, br.lng) + rnd() * lngSpan;
      const p = project(lat, lng, this.z);
      const s = this.worldToScreen(p.x, p.y);
      const bw = 18 + rnd() * 54, bh = 14 + rnd() * 40;
      ctx.fillRect(s.x - bw / 2, s.y - bh / 2, bw, bh);
      ctx.strokeRect(s.x - bw / 2, s.y - bh / 2, bw, bh);
    }

    // river — a fixed S-curve through Riverstone
    ctx.strokeStyle = "#a9cbe0";
    ctx.lineWidth = Math.max(8, this.z * 2.2);
    ctx.lineCap = "round";
    ctx.beginPath();
    const riverPts: { lat: number; lng: number }[] = [
      { lat: 2.0472, lng: 102.5648 },
      { lat: 2.0452, lng: 102.5672 },
      { lat: 2.0430, lng: 102.5685 },
      { lat: 2.0412, lng: 102.5688 },
      { lat: 2.0394, lng: 102.5702 },
      { lat: 2.0372, lng: 102.5724 },
    ];
    riverPts.forEach((rp, i) => {
      const p = project(rp.lat, rp.lng, this.z);
      const s = this.worldToScreen(p.x, p.y);
      if (i === 0) ctx.moveTo(s.x, s.y); else ctx.lineTo(s.x, s.y);
    });
    ctx.stroke();
    ctx.lineWidth = 1;

    // roads
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = Math.max(3, this.z * 0.7);
    const roads: { lat: number; lng: number }[][] = [
      [{ lat: 2.0448, lng: 102.5662 }, { lat: 2.0444, lng: 102.5690 }, { lat: 2.0440, lng: 102.5704 }],
      [{ lat: 2.0422, lng: 102.5660 }, { lat: 2.0424, lng: 102.5695 }, { lat: 2.0426, lng: 102.5710 }],
      [{ lat: 2.0404, lng: 102.5668 }, { lat: 2.0407, lng: 102.5698 }, { lat: 2.0410, lng: 102.5712 }],
      [{ lat: 2.0460, lng: 102.5686 }, { lat: 2.0422, lng: 102.5688 }, { lat: 2.0388, lng: 102.5684 }],
      [{ lat: 2.0450, lng: 102.5710 }, { lat: 2.0412, lng: 102.5706 }, { lat: 2.0378, lng: 102.5700 }],
      [{ lat: 2.0437, lng: 102.5654 }, { lat: 2.0433, lng: 102.5690 }, { lat: 2.0430, lng: 102.5716 }],
    ];
    for (const road of roads) {
      ctx.beginPath();
      road.forEach((rp, i) => {
        const p = project(rp.lat, rp.lng, this.z);
        const s = this.worldToScreen(p.x, p.y);
        if (i === 0) ctx.moveTo(s.x, s.y); else ctx.lineTo(s.x, s.y);
      });
      ctx.stroke();
    }
    ctx.lineWidth = 1;

    // destination label
    const d = project(DEST.center.lat, DEST.center.lng - 0.0009, this.z);
    const ds = this.worldToScreen(d.x, d.y);
    ctx.font = "600 13px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "#6b705c";
    ctx.textAlign = "center";
    ctx.fillText(DEST.name.toUpperCase(), ds.x, ds.y);
  }

  private drawMarkers() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    for (const pt of this.points) {
      const s = this.worldToScreen(pt.x, pt.y);
      if (s.x < -40 || s.x > this.cssWidth() + 40 || s.y < -40 || s.y > this.cssHeight() + 40) continue;
      const sel = pt.business.id === this.selectedId;
      const cat = pt.business.categoryId;
      const emoji =
        cat === "cat-food" ? "🍜" :
        cat === "cat-shop" ? "🎨" :
        cat === "cat-stay" ? "🏡" :
        cat === "cat-experience" ? "🧑‍🌾" : "🚶";
      const r = sel ? 17 : 13;
      // pin shadow
      ctx.beginPath();
      ctx.ellipse(s.x, s.y + r + 2, r * 0.7, 3.4, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(20,40,20,0.18)";
      ctx.fill();
      // bubble
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fillStyle = sel ? "#14532d" : "#ffffff";
      ctx.fill();
      ctx.lineWidth = sel ? 3 : 2;
      ctx.strokeStyle = "#f59e0b";
      ctx.stroke();
      ctx.font = `${sel ? 15 : 12}px system-ui, -apple-system, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(emoji, s.x, s.y + 1);
      ctx.textBaseline = "alphabetic";
    }
  }

  private drawAttribution() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.font = "10px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "rgba(60,60,50,0.55)";
    ctx.textAlign = "left";
    ctx.fillText("Illustrated demo map · not for navigation", 8, this.cssHeight() - 8);
  }

  private draw() {
    if (this.detached) return;
    this.resize();
    this.drawBase();
    this.drawMarkers();
    this.drawAttribution();
  }

  private scheduleDraw() {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => this.draw());
  }

  private bindEvents() {
    const el = this.canvas;
    const pos = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onDown = (e: PointerEvent) => {
      const p = pos(e);
      this.dragState = { startX: p.x, startY: p.y, startCx: this.center.lat, startCy: this.center.lng };
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!this.dragState) return;
      const p = pos(e);
      const dx = p.x - this.dragState.startX;
      const dy = p.y - this.dragState.startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) {
        const a = this.screenToLatLng(0, 0);
        const b = this.screenToLatLng(1, 0);
        void a; void b;
        const metersPerPx = (156543.03392 * Math.cos((this.center.lat * Math.PI) / 180)) / 2 ** this.z;
        const dLat = (dy * metersPerPx) / 111320;
        const dLng = (-dx * metersPerPx) / (111320 * Math.cos((this.center.lat * Math.PI) / 180));
        this.center = { lat: this.dragState.startCx + dLat, lng: this.dragState.startCy + dLng };
        this.scheduleDraw();
      }
    };
    const onUp = (e: PointerEvent) => {
      const p = pos(e);
      const moved =
        this.dragState &&
        Math.abs(p.x - this.dragState.startX) + Math.abs(p.y - this.dragState.startY) > 6;
      const wasDrag = !!moved;
      this.dragState = null;
      if (!wasDrag) {
        // hit-test markers (nearest within 22px)
        let best: { id: string; d: number } | null = null;
        for (const pt of this.points) {
          const s = this.worldToScreen(pt.x, pt.y);
          const d = Math.hypot(s.x - p.x, s.y - p.y);
          if (d < 24 && (!best || d < best.d)) best = { id: pt.business.id, d };
        }
        this.onSelect(best ? best.id : null);
        this.selectedId = best ? best.id : this.selectedId;
        this.scheduleDraw();
      }
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const nz = Math.max(13, Math.min(18, this.z + (e.deltaY < 0 ? 0.5 : -0.5)));
      if (nz !== this.z) {
        const before = this.screenToLatLng(pos(e as unknown as PointerEvent).x, pos(e as unknown as PointerEvent).y);
        this.z = nz;
        // keep cursor point stable-ish
        const after = this.screenToLatLng(pos(e as unknown as PointerEvent).x, pos(e as unknown as PointerEvent).y);
        this.center.lat += before.lat - after.lat;
        this.center.lng += before.lng - after.lng;
        this.setPoints(this.points.map((p) => p.business));
        this.scheduleDraw();
      }
    };
    const touches = new Map<number, { x: number; y: number }>();
    const onTouchStart = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) touches.set(t.identifier, { x: t.clientX, y: t.clientY });
      if (e.touches.length === 2) {
        const [a, b] = Array.from(e.touches);
        this.pinch = { dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), z: this.z };
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && this.pinch) {
        e.preventDefault();
        const [a, b] = Array.from(e.touches);
        const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
        const nz = Math.max(13, Math.min(18, this.pinch.z + Math.log2(d / this.pinch.dist)));
        if (Math.abs(nz - this.z) >= 0.05) {
          this.z = nz;
          this.setPoints(this.points.map((p) => p.business));
          this.scheduleDraw();
        }
      }
    };
    const onTouchEnd = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) touches.delete(t.identifier);
      if (e.touches.length < 2) this.pinch = null;
    };
    const ro = new ResizeObserver(() => {
      this.setPoints(this.points.map((p) => p.business));
      this.scheduleDraw();
    });
    ro.observe(el);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    this.cleanup = () => {
      ro.disconnect();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }

  private cleanup: (() => void) | null = null;

  destroy() {
    this.detached = true;
    cancelAnimationFrame(this.raf);
    this.cleanup?.();
  }
}

export function nearbyWithin(list: Business[], lat: number, lng: number, km: number): Business[] {
  return list.filter((b) => distanceKm(lat, lng, b.latitude, b.longitude) <= km);
}
