import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <p className="font-mono text-sm text-accent">Software Engineer</p>

      <h1 className="mt-4 max-w-3xl text-5xl font-bold text-foreground">
        Hi, I'm Denton Flake
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted">
        I design and build modern websites and applications with a focus on clarity, performance, and strong user experience.
      </p>

      <div className="mt-8 flex gap-4">

        <Link
          href="#projects"
          className="rounded-md bg-accent px-4 py-2 font-medium text-accent-foreground"
        >View Projects</Link>

      </div>
    </section>
  );
};

export default Hero;
