"use client";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dentonflake",
    handle: "@dentonflake",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dentonflake",
    handle: "dentonflake",
  },
  {
    label: "Email",
    href: "mailto:me@dentonflake.com",
    handle: "me@dentonflake.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}
        >
          <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            04 /
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
            Contact
          </h2>
        </div>

        <div className="two-col">
          {/* Big CTA */}
          <div className="reveal">
            <h3
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                margin: "0 0 1.5rem",
              }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: "var(--accent)" }}>something.</span>
            </h3>
            <p style={{ fontFamily: "var(--font-crimson), serif", fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "400px", lineHeight: 1.7, margin: "0 0 2.5rem" }}>
              I&apos;m open to freelance work, collaborations, and full-time
              opportunities. Have a project in mind? Let&apos;s talk.
            </p>
            <a
              href="mailto:me@dentonflake.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-martian), monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--bg)",
                background: "var(--accent)",
                padding: "0.9em 2em",
                border: "1px solid var(--accent)",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--bg)";
              }}
            >
              Send me an email ↗
            </a>
          </div>

          {/* Socials */}
          <div className="reveal reveal-delay-2">
            <p style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Find me online
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.25rem 0",
                    borderBottom: i < socials.length - 1 ? "1px solid var(--border)" : "none",
                    textDecoration: "none",
                    transition: "padding-left 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0.75rem";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                  }}
                >
                  <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)" }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                    {s.handle} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Denton Flake
          </span>
          <span style={{ fontFamily: "var(--font-martian), monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--text-faint)" }}>
            Built with Next.js
          </span>
        </div>
      </div>
    </section>
  );
}
