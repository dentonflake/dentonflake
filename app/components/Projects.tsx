"use client";

const projects = [
  {
    number: "01",
    name: "Lacy Coombs Hairstylist",
    description:
      "Portfolio website for a hairstylist featuring service showcases, client booking functionality, and a polished, brand-aligned design.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    live: "https://www.lacycoombshairstylist.com/",
    github: null,
    featured: true,
  },
  {
    number: "02",
    name: "Chamber of Commerce",
    description:
      "Responsive chamber of commerce site featuring dynamic business listings, weather integration, and client-side interactivity.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://dentonflake.github.io/wdd231/chamber/",
    github: "https://github.com/dentonflake",
    featured: false,
  },
  {
    number: "03",
    name: "My Family",
    description:
      "Personal web project presenting family information in an accessible, clean, and well-structured format.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://dentonflake.github.io/wdd231/final/",
    github: "https://github.com/dentonflake",
    featured: false,
  },
];

const linkStyle = {
  fontFamily: "var(--font-martian), monospace",
  fontSize: "0.68rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  color: "var(--text-muted)",
  transition: "color 0.2s",
  whiteSpace: "nowrap" as const,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}
        >
          <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            02 /
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: 0,
            }}
          >
            Projects
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, i) => (
            <div
              key={project.number}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "2rem",
                alignItems: "start",
                padding: "2.5rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)";
                (e.currentTarget as HTMLElement).style.margin = "0 -2.5rem";
                (e.currentTarget as HTMLElement).style.padding = "2.5rem 2.5rem";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.margin = "0";
                (e.currentTarget as HTMLElement).style.padding = "2.5rem 0";
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "3rem",
                  color: "var(--text-faint)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {project.number}
              </span>

              {/* Content + links together */}
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        letterSpacing: "-0.01em",
                        color: "var(--text)",
                        margin: 0,
                      }}
                    >
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span
                        style={{
                          fontFamily: "var(--font-martian), monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          border: "1px solid var(--accent-dim)",
                          padding: "0.15em 0.5em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  {/* Links — always inside content column, no grid gymnastics */}
                  <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexShrink: 0 }}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                      >
                        Live ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.05rem", color: "var(--text-muted)", margin: "0 0 1rem", lineHeight: 1.65 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
