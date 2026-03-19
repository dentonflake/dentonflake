"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 40) setActive("#");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .filter((l) => l.href !== "#")
      .map((l) => document.querySelector(l.href) as HTMLElement | null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const linkStyle = (href: string) => ({
    fontFamily: "var(--font-martian), monospace",
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    color: active === href ? "var(--accent)" : "var(--text-muted)",
    transition: "color 0.2s ease",
  });

  return (
    <nav
      className="nav-wrap"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled || open ? "rgba(14,12,10,0.95)" : "transparent",
        backdropFilter: scrolled || open ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.04em",
          color: "var(--text)",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        DF
      </a>

      {/* Desktop + tablet links */}
      <div className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={linkStyle(l.href)}
            onClick={() => setOpen(false)}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color =
                active === l.href ? "var(--accent)" : "var(--text-muted)")
            }
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Hamburger (only visible at very small sizes via CSS) */}
      <button
        className="nav-hamburger"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.25rem",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <span style={{ display: "block", width: "22px", height: "1px", background: "var(--text)", transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
        <span style={{ display: "block", width: "22px", height: "1px", background: "var(--text)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
        <span style={{ display: "block", width: "22px", height: "1px", background: "var(--text)", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
      </button>
    </nav>
  );
}
