// Tiny utilities shared across the frontend.

/**
 * Concatenates conditional class names. Drop-in for `clsx`/`classnames` —
 * keeps the dependency footprint small.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Formats a Validate Group case number: VG-YYYY-XXXXX.
 * The real backend will own this; this helper exists so mock data
 * can produce realistic numbers and tests can validate the shape.
 */
export function caseNumber(year: number, sequence: number): string {
  return `VG-${year}-${String(sequence).padStart(5, "0")}`;
}

const CASE_NUMBER_RE = /^VG-\d{4}-\d{5}$/;
export function isValidCaseNumber(value: string): boolean {
  return CASE_NUMBER_RE.test(value);
}

/**
 * Formats an ISO timestamp to a short user-facing date, e.g. "Apr 23, 2025".
 */
export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Formats an ISO timestamp to a longer form including time, used in timelines.
 */
export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return `${formatDate(iso)}, ${d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
