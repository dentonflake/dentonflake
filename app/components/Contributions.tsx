// Server Component — no "use client"

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
};

const QUERY = `
  query {
    user(login: "dentonflake") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

async function fetchContributions(): Promise<ContributionCalendar | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error("GITHUB_TOKEN is missing from environment variables.");
    return null;
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      console.error("GitHub API error:", res.status, res.statusText);
      return null;
    }
    
    const json = await res.json();
    if (json.errors) {
      console.error("GitHub GraphQL errors:", json.errors);
      return null;
    }
    
    return json?.data?.user?.contributionsCollection?.contributionCalendar ?? null;
  } catch (err) {
    console.error("Fetch contributions error:", err);
    return null;
  }
}

function getLevel(count: number, max: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= max * 0.25) return 1;
  if (count <= max * 0.5) return 2;
  if (count <= max * 0.75) return 3;
  return 4;
}

const LEVEL_COLORS = [
  "var(--bg-elevated)",
  "#3e361a",
  "#70622a",
  "#a38e3a",
  "var(--accent)", // #d4af37
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default async function Contributions() {
  const calendar = await fetchContributions();
  if (!calendar) return null;

  const { totalContributions, weeks } = calendar;
  const max = Math.max(
    ...weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)),
    1
  );

  // Build month label positions
  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, colIdx) => {
    const firstDay = week.contributionDays[0];
    if (firstDay) {
      const month = new Date(firstDay.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        monthLabels.push({ label: MONTHS[month], col: colIdx });
        lastMonth = month;
      }
    }
  });

  const CELL = 12;
  const GAP = 3;
  const totalCols = weeks.length;
  const gridW = totalCols * (CELL + GAP) - GAP;

  return (
    <div style={{ marginTop: "2rem" }} className="reveal-on-scroll">
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ width: "24px", height: "1px", background: "var(--accent)" }} />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", margin: 0 }}>
            GitHub Momentum
          </p>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--text-muted)", margin: 0 }}>
          <span style={{ color: "var(--text)", fontWeight: "bold" }}>{totalContributions.toLocaleString()}</span> contributions / past year
        </p>
      </div>

      {/* Scrollable graph */}
      <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
        <div style={{ minWidth: `${gridW + 32}px` }}>
          {/* Month labels row */}
          <div style={{ display: "flex", marginLeft: "28px", marginBottom: "4px", position: "relative", height: "16px" }}>
            {monthLabels.map(({ label, col }) => (
              <span
                key={`${label}-${col}`}
                style={{
                  position: "absolute",
                  left: `${col * (CELL + GAP)}px`,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Grid: day labels + cells */}
          <div style={{ display: "flex", gap: "0" }}>
            {/* Day-of-week labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: `${GAP}px`, marginRight: "4px", flexShrink: 0 }}>
              {DAY_LABELS.map((label, i) => (
                <div
                  key={i}
                  style={{
                    height: `${CELL}px`,
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div style={{ display: "flex", gap: `${GAP}px` }}>
              {weeks.map((week, wIdx) => (
                <div key={wIdx} style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}>
                  {week.contributionDays.map((day) => {
                    const level = getLevel(day.contributionCount, max);
                    const color = LEVEL_COLORS[level];
                    return (
                      <div
                        key={day.date}
                        title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
                        style={{
                          width: `${CELL}px`,
                          height: `${CELL}px`,
                          borderRadius: "2px",
                          background: color,
                          flexShrink: 0,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "0.75rem", marginLeft: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-muted)" }}>Less</span>
            {LEVEL_COLORS.map((color, i) => (
              <div key={i} style={{ width: `${CELL}px`, height: `${CELL}px`, borderRadius: "2px", background: color, flexShrink: 0 }} />
            ))}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-muted)" }}>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
