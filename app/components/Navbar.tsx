import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6">
      {/* logo */}
      <div className="flex-center">
        <Image
          src="/images/logo.svg"
          alt="Anuj logo"
          width={70}
          height={70}
          priority
        />
      </div>

      {/* Menu */}
      <nav className="border-app bg-bg/60 flex items-center gap-8 rounded-full border px-4 py-2 text-sm backdrop-blur-md">
        <Link href="/" className="hover-soft">
          Home
        </Link>
        <Link href="/work" className="hover-soft">
          Work
        </Link>
        <Link href="/about" className="hover-soft">
          About
        </Link>
      </nav>

      {/* CTA */}
      <button className="border-app bg-bg/60 filter:backdrop-blur-md rounded-full border px-4 py-2">
        Collaborate
      </button>
    </header>
  );
}

export default Navbar;
