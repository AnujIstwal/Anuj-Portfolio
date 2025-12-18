import Image from "next/image";

function Navbar() {
    return (
        <header className="w-full flex items-center justify-between px-8 py-6">
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
            <nav className="flex items-center gap-8 text-sm border border-app px-4 py-2 rounded-full bg-bg/60 filter:backdrop-blur-md">
                <a href="#home" className="hover-soft">
                    Home
                </a>
                <a href="#work" className="hover-soft">
                    Work
                </a>
                <a href="#about" className="hover-soft">
                    About
                </a>
            </nav>

            {/* CTA */}
            <button className="border border-app px-4 py-2 rounded-full bg-bg/60 filter:backdrop-blur-md  ">
                Collaborate
            </button>
        </header>
    );
}

export default Navbar;
