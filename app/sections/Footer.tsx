import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer" className="">
      <div className="footer-container relative">
        <div className="relative h-[600px] w-full rounded-tl-[30px] rounded-tr-[30px] bg-black">
          <Image
            src="/images/bg-name.svg"
            alt="ANUJ KUMAR"
            width={1000}
            height={800}
            priority
            className="absolute top-1/2 left-1/2 mx-auto max-w-[95%] -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
            <Image
              src="/images/hero-image-3.png"
              alt="Anuj – UI UX Designer"
              width={1000}
              height={1754}
              priority
              className="max-w-92"
            />
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="footer-bottom">
            <div className="footer-bottom-1">
              <div className="flex h-[20px] w-min items-center p-[10px] text-sm whitespace-nowrap">
                3 spots available
              </div>
              <div className="max-w-[600px]">
                <p className="font-richmond text-center text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
                  Let’s build something meaningful together.
                </p>
              </div>

              {/* CTA */}
              <div className="h-[30px] w-auto">
                <button className="border-app bg-bg/60 filter:backdrop-blur-md rounded-full border px-4 py-2">
                  Collaborate
                </button>
              </div>
            </div>

            <div className="footer-bottom-2 flex-col text-xs md:flex-row">
              <div>anujistwal80@gmail.com</div>
              <div>All rights reserved ©2025</div>
              <div>Follow :</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
