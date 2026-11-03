import { useEffect, useSyncExternalStore } from "react";
import { isChapterId, type ChapterId } from "@/data/chapters";
import { isVarietyId, type VarietyId } from "@/data/garden";
import { isZoneId, type ZoneId } from "@/data/zones";

export type Library = {
  chapter: ChapterId;
  zone: ZoneId;
  variety: VarietyId;
  lastFrost: string;
  firstFrost: string;
  checks: string[];
};

const KEY = "stem-to-seed";

const defaults: Library = {
  chapter: "cover",
  zone: "6",
  variety: "tango",
  lastFrost: "",
  firstFrost: "",
  checks: [],
};

let snapshot: Library = defaults;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(snapshot));
  } catch {
    /* private mode or a full disk */
  }
}

function dateOrEmpty(value: unknown) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}

export function hydrateLibrary() {
  let next: Library = { ...defaults, checks: [] };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Library>;
      next = {
        chapter: isChapterId(parsed.chapter) ? parsed.chapter : defaults.chapter,
        zone: isZoneId(parsed.zone) ? parsed.zone : defaults.zone,
        variety: isVarietyId(parsed.variety) ? parsed.variety : defaults.variety,
        lastFrost: dateOrEmpty(parsed.lastFrost),
        firstFrost: dateOrEmpty(parsed.firstFrost),
        checks: Array.isArray(parsed.checks)
          ? parsed.checks.filter((item): item is string => typeof item === "string")
          : [],
      };
    }
  } catch {
    next = { ...defaults, checks: [] };
  }
  const hash = window.location.hash.replace(/^#/, "");
  if (isChapterId(hash)) next.chapter = hash;
  snapshot = next;
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useLibrary() {
  return useSyncExternalStore(subscribe, () => snapshot, () => defaults);
}

export function useHydrateLibrary() {
  useEffect(() => {
    hydrateLibrary();
  }, []);
}

export function patchLibrary(partial: Partial<Library>) {
  snapshot = { ...snapshot, ...partial };
  persist();
  if (partial.chapter) {
    const url = `${window.location.pathname}${window.location.search}#${partial.chapter}`;
    window.history.replaceState(null, "", url);
  }
  emit();
}

export function toggleCheck(id: string) {
  const has = snapshot.checks.includes(id);
  snapshot = {
    ...snapshot,
    checks: has ? snapshot.checks.filter((item) => item !== id) : [...snapshot.checks, id],
  };
  persist();
  emit();
}
