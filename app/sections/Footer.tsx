import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiDribbble, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer" className="bg-black">
      <div className="footer-container relative">
        <div className="relative h-[600px] w-full rounded-tl-[30px] rounded-tr-[30px] bg-black">
          <Image
            src="/images/bg-name.svg"
            alt="ANUJ KUMAR"
            width={1000}
            height={800}
            className="absolute top-1/2 left-1/2 mx-auto max-w-[95%] -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
            <Image
              src="/images/hero-image-3.png"
              alt="Anuj – UI UX Designer"
              width={1000}
              height={1754}
              className="max-w-92"
            />
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="footer-bottom">
            <div className="footer-bottom-1">
              <div className="flex h-[20px] items-center gap-[5px] p-[10px]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#c1d9a8]"></span>
                <p>Currently open</p>
              </div>
              <div className="max-w-[600px]">
                <p className="font-richmond text-center text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
                  Let’s build something meaningful together.
                </p>
              </div>

              {/* CTA */}
              <div className="h-[30px] w-auto">
                <div className="border-app bg-bg/60 flex cursor-pointer items-center justify-center gap-[5px] rounded-full border px-4 py-2 backdrop-blur-md">
                  <span className="bg-accent h-[5px] w-[5px] rounded-full"></span>
                  <p>Collaborate</p>
                </div>
              </div>
            </div>

            <div className="footer-bottom-2 flex-col gap-[10px] text-xs md:flex-row md:gap-[20px]">
              <div>anujistwal80@gmail.com</div>
              <div>All rights reserved ©2025</div>
              <div className="color-text flex items-center gap-2">
                <p>Follow: </p>
                <Link
                  href="https://www.instagram.com/uiby.ajistwal/"
                  target="_blank"
                >
                  <FiInstagram className="cursor-pointer" />
                </Link>
                <Link href="https://dribbble.com/anujistwal" target="_blank">
                  <FiDribbble className="cursor-pointer" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anuj-kumar-393196200/"
                  target="_blank"
                >
                  <FiLinkedin className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
