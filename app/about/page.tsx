import { FiInstagram, FiDribbble, FiLinkedin } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Philosophy from "./components/Philosophy";

export default function About() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      <main className="bg-bg flex h-min min-h-screen w-auto flex-col items-center">
        {/* header */}
        <div className="flex h-min w-full flex-col items-center">
          <div className="flex h-min w-full max-w-[1600px] items-start px-[20px] pt-[150px] md:px-[50px]">
            <div className="border-border flex h-min flex-[1_0_0] flex-col items-start justify-between gap-y-[25px] border-b pb-[50px] xl:flex-row">
              <p className="font-richmond text-[3.1rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[6rem]">
                About me.
              </p>

              <div className="flex h-auto w-full max-w-[500px] flex-col justify-start xl:w-[25%] xl:pt-[20px]">
                <p className="text-justify text-left text-sm">
                  I’m a UI/UX designer focused on building digital products that
                  feel calm, intentional, and easy to use. <br /> <br /> My work
                  lives at the intersection of clarity, structure, and subtle
                  emotion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect */}
        <section className="flex w-full flex-col items-center justify-between px-[20px] py-16 md:px-[50px] md:py-24">
          <div className="flex h-min w-full max-w-[800px] flex-col items-start justify-between gap-[40px] md:flex-row md:items-center">
            {/* WHAT I DO */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-[17px] font-bold uppercase">
                What I do.
              </h3>

              <ul className="space-y-4 text-sm">
                <li>Product & SaaS interfaces</li>
                <li>Design systems & components</li>
                <li>Visual refinement & hierarchy</li>
                <li>Interaction and motion fundamentals</li>
              </ul>
            </div>

            {/* LET'S CONNECT */}
            <div>
              <h3 className="mb-6 text-[17px] font-bold uppercase">
                Let’s connect.
              </h3>

              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                    <FiInstagram size={16} strokeWidth={1.5} />
                  </span>
                  <a
                    href="https://instagram.com/anujistwal"
                    className="text-sm text-[#0c121e]/80 hover:text-[#0c121e] hover:underline"
                  >
                    insta/anujistwal
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                    <FiDribbble size={16} strokeWidth={1.5} />
                  </span>
                  <a
                    href="https://dribbble.com/anujistwal"
                    className="text-sm text-[#0c121e]/80 hover:text-[#0c121e] hover:underline"
                  >
                    dribbble/anujistwal
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded border border-[#0c121e]/20">
                    <FiLinkedin size={16} strokeWidth={1.5} />
                  </span>
                  <a
                    href="https://linkedin.com/in/anuj-kumar"
                    className="text-sm text-[#0c121e]/80 hover:text-[#0c121e] hover:underline"
                  >
                    linkedin/anuj-kumar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <Philosophy />
      </main>

      <Footer />
    </div>
  );
}
