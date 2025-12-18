import Hero from "./sections/hero/Hero";
import Work from "./sections/work/Work";
import Subhero from "./sections/Subhero";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Subhero />
            {/* <Work /> */}
        </div>
    );
}
