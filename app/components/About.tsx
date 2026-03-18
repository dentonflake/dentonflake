import Image from "next/image";
import Contributions from "./Contributions";

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Prisma", "PostgreSQL", "SQL", "REST APIs"] },
  { category: "Tools", items: ["Retool", "Git", "GitHub", "Figma", "Vercel"] },
];

export default function About() {
  
  return (
    <section
      id="about"
      className="section-pad"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <div
        className="reveal"
        style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}
      >
        <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          01 /
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
          About
        </h2>
      </div>

      <div className="two-col">
        {/* Bio column */}
        <div>
          {/* Profile photo */}
          <div
            className="reveal reveal-delay-1"
            style={{
              width: "100%",
              maxWidth: "320px",
              aspectRatio: "3/4",
              marginBottom: "2rem",
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <Image
              src="/profile.png"
              alt="Denton Flake"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              quality={50}
              priority
            />
            <div style={{ position: "absolute", top: 0, right: 0, width: "40px", height: "40px", borderBottom: "1px solid var(--accent-dim)", borderLeft: "1px solid var(--accent-dim)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "40px", borderTop: "1px solid var(--accent-dim)", borderRight: "1px solid var(--accent-dim)" }} />
          </div>

          <div className="reveal reveal-delay-2">
            <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.75, marginBottom: "1rem" }}>
              I&apos;m a full-stack applications developer and full-time student pursuing a{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Bachelor of Science in Software Development
              </strong>
              .
            </p>
            <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              I have 1 year of professional experience building internal tools and APIs,
              along with 5+ years of self-taught experience across a wide variety
              of libraries and frameworks.
            </p>
            <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
              I care about building things that feel{" "}
              <em style={{ color: "var(--text)" }}>intentional</em> — software that&apos;s as
              pleasant to use as it is solid under the hood.
            </p>
          </div>
        </div>

        {/* Skills column */}
        <div className="reveal reveal-delay-2">
          <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2rem" }}>
            Skills & Tools
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {skills.map((group) => (
              <div key={group.category}>
                <p
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {group.category}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "1rem 1.25rem",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                flexShrink: 0,
                boxShadow: "0 0 8px #4ade8088",
              }}
            />
            <span style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1rem", color: "var(--text-muted)" }}>
              Open to freelance work, collaborations, and full-time opportunities
            </span>
          </div>
        </div>
      </div>

      <Contributions />
    </section>
  );
}
