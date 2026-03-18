"use client";

const experience = [
  {
    company: "Nellis Auction",
    role: "Applications Developer",
    period: "2024 – Present",
    type: "Full-time",
    description:
      "Building and maintaining internal tools, APIs, and frontend applications. Leveraged Retool to rapidly develop internal dashboards and workflows, reducing operational overhead across departments.",
    tech: ["Retool", "SQL", "REST APIs", "PostgreSQL"],
  },
  {
    company: "Contract Work",
    role: "Freelance Developer",
    period: "Ongoing",
    type: "Freelance",
    description:
      "Independent client projects including full-stack web applications, booking systems, and portfolio websites. End-to-end ownership from design to deployment.",
    tech: ["Next.js", "TypeScript", "Prisma", "Vercel"],
  },
];

const education = [
  {
    institution: "Brigham Young University – Idaho",
    degree: "B.S. Software Development",
    period: "In Progress",
    note: "Full-time student",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}
        >
          <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            03 /
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
            Experience
          </h2>
        </div>

        <div className="two-col">
          {/* Work experience */}
          <div>
            <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Work
            </p>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  bottom: "0",
                  width: "1px",
                  background: "var(--border)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "3rem", paddingLeft: "2rem" }}>
                {experience.map((job, i) => (
                  <div key={job.company} className={`reveal reveal-delay-${i + 1}`} style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "-2rem",
                        top: "8px",
                        width: "9px",
                        height: "9px",
                        borderRadius: "50%",
                        background: i === 0 ? "var(--accent)" : "var(--bg-elevated)",
                        border: "1px solid " + (i === 0 ? "var(--accent)" : "var(--border)"),
                        transform: "translateX(-4px)",
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem", flexWrap: "wrap", gap: "0.25rem" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-syne), sans-serif",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "var(--text)",
                          margin: 0,
                        }}
                      >
                        {job.company}
                      </h3>
                      <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                        {job.period}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.08em", margin: "0 0 0.75rem" }}>
                      {job.role} · {job.type}
                    </p>
                    <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.05rem", color: "var(--text-muted)", margin: "0 0 0.75rem", lineHeight: 1.65 }}>
                      {job.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {job.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="reveal reveal-delay-2">
            <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Education
            </p>
            {education.map((ed) => (
              <div
                key={ed.institution}
                style={{
                  padding: "2rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "1px",
                }}
              >
                <div style={{ position: "absolute", top: 0, right: 0, width: "60px", height: "60px" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", borderBottom: "1px solid var(--accent-dim)", borderLeft: "1px solid var(--accent-dim)" }} />
                </div>
                <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--text-muted)", margin: "0 0 0.75rem" }}>
                  {ed.period}
                </p>
                <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--text)", margin: "0 0 0.35rem", letterSpacing: "-0.01em" }}>
                  {ed.institution}
                </h3>
                <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.05rem", color: "var(--text-muted)", margin: "0 0 0.5rem" }}>
                  {ed.degree}
                </p>
                <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {ed.note}
                </span>
              </div>
            ))}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
              {[
                { value: "1yr+", label: "Professional exp." },
                { value: "5yr+", label: "Self-taught" },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "var(--bg)", padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--text)", margin: "0 0 0.25rem", letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
