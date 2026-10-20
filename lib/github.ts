import snapshot from "./github-snapshot.json";

export type ContributionDay = { date: string; level: number; count: number };
export type Activity = {
  days: ContributionDay[];
  fetchedAt: string;
  stale: boolean;
};

// Parse only the public calendar's explicit data attributes; never render remote HTML.
export function parseContributions(html: string): ContributionDay[] {
  const counts = new Map<string, number>();
  for (const match of html.matchAll(
    /<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g,
  )) {
    const id = match[1].match(/\bfor="([^"]+)"/)?.[1];
    const count = match[2]
      .replace(/<[^>]*>/g, "")
      .trim()
      .match(/^(No|[\d,]+) contributions? on /)?.[1];
    if (id && count)
      counts.set(id, count === "No" ? 0 : Number(count.replaceAll(",", "")));
  }
  const days: ContributionDay[] = [];
  for (const match of html.matchAll(
    /<td\b[^>]*\bdata-date="\d{4}-\d{2}-\d{2}"[^>]*>/g,
  )) {
    const date = match[0].match(/\bdata-date="([^"]+)"/)?.[1];
    const level = Number(match[0].match(/\bdata-level="(\d)"/)?.[1]);
    const id = match[0].match(/\bid="([^"]+)"/)?.[1];
    if (date && id && level >= 0 && level <= 4 && counts.has(id))
      days.push({ date, level, count: counts.get(id)! });
  }
  const sorted = [...new Map(days.map((day) => [day.date, day])).values()].sort(
    (a, b) => a.date.localeCompare(b.date),
  );
  if (
    sorted.length < 365 ||
    sorted.some(
      (day, index) =>
        index > 0 &&
        Date.parse(day.date) - Date.parse(sorted[index - 1].date) !== 86400000,
    )
  ) {
    throw new Error("GitHub contribution calendar is incomplete");
  }
  return sorted;
}

export async function getGithubActivity(): Promise<Activity> {
  try {
    const response = await fetch(
      "https://github.com/users/philldev/contributions",
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
        headers: { Accept: "text/html" },
      },
    );
    if (!response.ok) throw new Error("GitHub is unavailable");
    return {
      days: parseContributions(await response.text()),
      fetchedAt: new Date().toISOString(),
      stale: false,
    };
  } catch {
    return { ...snapshot, stale: true };
  }
}
