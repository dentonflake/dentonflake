import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-accent">Contact</p>
      <h2 className="mt-4 text-3xl font-bold text-foreground">Let&apos;s build something solid.</h2>
      <p className="mt-4 max-w-2xl text-muted">
        I&apos;m open to freelance work, collaborations, and full-time opportunities. If you&apos;d like to connect, feel free to reach out.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="mailto:me@dentonflake.com"
          className="rounded-md bg-accent px-4 py-2 font-medium text-accent-foreground"
        >
          me@dentonflake.com
        </Link>

        <Link
          href="https://github.com/dentonflake"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-4 py-2 text-foreground"
        >
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/dentonflake"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-4 py-2 text-foreground"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default Contact;
