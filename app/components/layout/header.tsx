import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <Link href="/" className="text-xl font-bold text-foreground">
          D<span className="mx-0.5 text-accent">/</span>F
        </Link>
      </div>
    </header>
  );
};

export default Header;
