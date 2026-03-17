const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "UI",
    items: ["Tailwind CSS", "Responsive Design", "Accessibility", "Figma"],
  },
  {
    title: "Tools",
    items: ["Node.js", "Git", "GitHub", "PostgreSQL"],
  },
];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-accent">About Me</p>
      <h2 className="mt-4 text-3xl font-bold text-foreground">Building thoughtful digital experiences</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 text-muted">
          <p>
            I&apos;m Denton Flake, a developer focused on building clean, modern websites and applications that feel intentional and easy to use.
          </p>
          <p>
            I enjoy turning ideas into polished interfaces, writing maintainable code, and creating experiences that balance design, usability, and performance.
          </p>
        </div>

        <div className="space-y-6">
          <p className="font-mono text-sm text-accent">Skills</p>

          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
