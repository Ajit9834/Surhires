/** Tiny class-name joiner so components stay readable without a dependency. */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

/** Normalises text for case/whitespace-insensitive matching in the job filters. */
export function normalise(value: string): string {
  return value.trim().toLowerCase();
}
