import { getGithubActivity } from "@/lib/github";

export async function GithubActivity() {
  const { days, fetchedAt, stale } = await getGithubActivity();
  const firstDay = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const padded = [...Array.from({ length: firstDay }, () => null), ...days];
  while (padded.length % 7) padded.push(null);
  const weeks = Array.from({ length: padded.length / 7 }, (_, i) =>
    padded.slice(i * 7, i * 7 + 7),
  );
  const total = days.reduce((sum, day) => sum + day.count, 0);
  return (
    <section className="activity-section" aria-labelledby="activity-heading">
      <div className="flex items-center justify-between gap-3">
        <h2 id="activity-heading" className="section-title">
          github activity
        </h2>
        <span className="activity-period">
          <span className="desktop-period">past year</span>
          <span className="mobile-period">past 6 months</span>
        </span>
      </div>
      <div
        className="contribution-grid"
        role="img"
        aria-label={`${total.toLocaleString("en")} GitHub contributions in the past year. Mobile displays the most recent six months. ${stale ? "Showing saved data." : ""}`}
      >
        {weeks.map((week, index) => (
          <div
            key={index}
            className={`contribution-week ${index < weeks.length - 26 ? "older-week" : ""}`}
          >
            {week.map((day, dayIndex) => (
              <span
                key={day?.date ?? `empty-${dayIndex}`}
                className="contribution-cell"
                data-level={day?.level ?? 0}
                data-empty={!day || undefined}
                title={
                  day
                    ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                    : undefined
                }
              />
            ))}
          </div>
        ))}
      </div>
      <div className="activity-footer flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <a
          href="https://github.com/philldev?tab=overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          @philldev
          {stale && (
            <span title={`Saved ${fetchedAt.slice(0, 10)}`}>
              {" "}
              · saved {fetchedAt.slice(0, 10)}
            </span>
          )}
        </a>
        <div className="flex items-center gap-1" aria-hidden="true">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              key={level}
              className="contribution-cell legend-cell"
              data-level={level}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
