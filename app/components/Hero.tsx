"use client";

import { useEffect, useRef } from "react";

const TITLES = [
  "Applications Developer",
  "Full-Stack Engineer",
  "Problem Solver",
];

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let titleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = TITLES[titleIdx];
      if (!titleRef.current) return;

      if (!deleting) {
        titleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 2200);
          return;
        }
        timeout = setTimeout(tick, 65);
      } else {
        titleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          titleIdx = (titleIdx + 1) % TITLES.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, 35);
      }
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="hero-pad"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      {/* Radial gradient vignette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "var(--accent)",
          opacity: 0.04,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Label */}
        <div
          className="animate-in"
          style={{
            animationDelay: "0.1s",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "2.5rem",
              height: "1px",
              background: "var(--accent)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-martian), monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-in"
          style={{
            animationDelay: "0.2s",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: "0 0 1.5rem",
          }}
        >
          Denton
          <br />
          <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>Flake</span>
        </h1>

        {/* Divider */}
        <hr
          className="animate-in rule"
          style={{ animationDelay: "0.3s", marginBottom: "1.5rem" }}
        />

        {/* Typewriter title + bio */}
        <div
          className="animate-in"
          style={{
            animationDelay: "0.4s",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-martian), monospace",
                fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              <span ref={titleRef} style={{ color: "var(--text)" }}>
                Applications Developer
              </span>
              <span
                className="cursor-blink"
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  background: "var(--accent)",
                  marginLeft: "3px",
                  verticalAlign: "text-bottom",
                }}
              />
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-crimson), serif",
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              margin: 0,
              maxWidth: "440px",
              lineHeight: 1.65,
            }}
          >
            Full-stack developer & software development student.
            Building applications that feel{" "}
            <em style={{ color: "var(--text)" }}>intentional</em> and easy to use.
          </p>
        </div>

        {/* CTA */}
        <div
          className="animate-in"
          style={{
            animationDelay: "0.5s",
            marginTop: "2.5rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
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
              padding: "0.75em 1.5em",
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
            View Projects ↓
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--font-martian), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--text-muted)",
              padding: "0.75em 1.5em",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
