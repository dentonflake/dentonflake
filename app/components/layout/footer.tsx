
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-sm text-muted">
          D<span className="mx-0.5 text-accent">/</span>F
        </p>

        <div className="flex gap-4 text-sm">
          <Link href="https://github.com" className="text-muted hover:text-accent">
            GitHub
          </Link>
          <Link href="https://linkedin.com" className="text-muted hover:text-accent">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
