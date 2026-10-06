// ─── Domain types ────────────────────────────────────────────────────────────
// Mirrors the MVP schema (businesses, categories, reviews, routes, impact…)
// so the in-browser data layer can be swapped for Supabase later.

export type OwnershipType =
  | "locally_owned"
  | "locally_operated"
  | "family_owned"
  | "cooperative"
  | "independent"
  | "chain"
  | "unknown";

export type VerificationStatus =
  | "UNVERIFIED"
  | "COMMUNITY_SUBMITTED"
  | "OWNER_VERIFIED"
  | "ADMIN_VERIFIED"
  | "COMMUNITY_VERIFIED";

export type BusinessStatus = "pending" | "approved" | "rejected" | "hidden";

export interface LocalScoreBreakdown {
  ownership: number;       // 30
  community: number;       // 20
  localProducts: number;   // 20
  independence: number;    // 15
  sustainability: number;  // 10
  reviews: number;         // 5
}

export interface BusinessCategory {
  id: string;
  slug: string;
  label: string;
  emoji: string;
  intent: string; // eat | shop | stay | experience | explore | buy
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  whatsapp: string;
  website: string;
  priceLevel: 1 | 2 | 3;
  ownershipType: OwnershipType;
  locallyOwned: boolean;
  locallyOperated: boolean;
  verificationStatus: VerificationStatus;
  verificationNote?: string;
  localScore: number;
  scoreInputs: LocalScoreBreakdown;
  yearsOperating: number;
  localEmployeeCount: number;
  story: string;
  whyVisit: string;
  whatsLocal: string;
  status: BusinessStatus;
  ratingAvg: number;
  ratingCount: number;
  isDemo: boolean;
  photos: string[];
  hours: Record<number, string | null>; // 0=Sunday; null = closed
  menu?: MenuItem[];
  flavorProfile?: FlavorProfile;
  alsoCategories?: string[]; // secondary categories (e.g. Buy Local)
  createdAt: string;
}

export interface Review {
  id: string;
  businessId: string;
  author: string;
  rating: number; // 1–5
  text: string;
  visitedDate: string;
  photo?: string;
  verifiedVisit: boolean;
  createdAt: string;
}

export interface RouteStop {
  order: number;
  businessId?: string;
  label: string;
  note: string;
}

export interface WalkRoute {
  id: string;
  name: string;
  description: string;
  distanceKm: number;
  minutes: number;
  stops: RouteStop[];
  estimatedSpendRM: number;
}

export interface ImpactEvent {
  id: string;
  businessId: string;
  estimatedSpendRM: number;
  createdAt: string;
}

export interface FavoriteEntry {
  businessId: string;
  createdAt: string;
}

/** Flavor-intensity guide for visitors new to local food. 0=none 1=gentle 2=moderate 3=strong */
export interface FlavorProfile {
  spice: number;
  sweet: number;
  sour: number;
  msg: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  priceRM?: number;
  spice: number;
  sweet: number;
  sour: number;
  msg: number;
  tip?: string;
}

export interface SubmissionPayload {
  businessName: string;
  ownerName: string;
  phone: string;
  whatsapp: string;
  email: string;
  category: string;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
  yearsOperating: string;
  localEmployees: string;
  locallyOwned: boolean;
  locallyOperated: boolean;
  ownershipType: OwnershipType;
  products: string;
  priceLevel: string;
  hours: string;
  menu?: { name: string; priceRM?: number; spice: number; sweet: number; sour: number; msg: number }[];
}

// ─── Scoring ─────────────────────────────────────────────────────────────────

export const SCORE_FACTORS: { key: keyof LocalScoreBreakdown; label: string; max: number; hint: string }[] = [
  { key: "ownership", label: "Local ownership", max: 30, hint: "Is the owner a resident of the destination?" },
  { key: "community", label: "Community presence", max: 20, hint: "Local staff, local networks, years of service." },
  { key: "localProducts", label: "Local products & services", max: 20, hint: "Sourcing, ingredients, crafts made locally." },
  { key: "independence", label: "Independent business", max: 15, hint: "Not part of a national or foreign chain." },
  { key: "sustainability", label: "Sustainability & practices", max: 10, hint: "Community and environmental practices." },
  { key: "reviews", label: "Visitor reviews", max: 5, hint: "Consistent visitor feedback." },
];

export function computeScore(b: LocalScoreBreakdown): number {
  return (
    b.ownership + b.community + b.localProducts + b.independence + b.sustainability + b.reviews
  );
}
