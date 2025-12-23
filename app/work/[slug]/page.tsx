import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";
import { projects } from "@/app/util/data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* part 1 about */}
      <div className="relative flex h-min w-full max-w-[1600px] flex-row items-center justify-center px-[20px] md:px-[50px]">
        <div className="z-10 flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-start gap-[100px] pt-[150px] pb-[30px]">
          <div className="flex h-min w-full flex-col items-end gap-[60px] border-b border-[#0c121e1a] pb-[35px]">
            <div className="flex h-min w-full items-center">
              <p className="font-richmond text-[5rem]">{project.title}</p>
            </div>

            <div className="flex h-min w-full flex-col items-start gap-y-[30px] md:flex-row">
              <div className="flex h-[20px] flex-[1_0_0] flex-row items-center gap-[5px]">
                <p className="text-[17px] font-bold uppercase">
                  about this project.
                </p>
              </div>

              <div className="flex h-auto w-full flex-col justify-start whitespace-pre-wrap md:w-[40%]">
                <p className="text-left text-sm">
                  Zidio Task Management System is a web-based productivity tool
                  designed to help teams plan, track, and manage tasks with
                  clarity. The project focuses on reducing task overload,
                  improving visibility across workflows, and enabling teams to
                  collaborate efficiently through a structured yet flexible
                  interface.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-min w-full items-end">
            <p>
              Role: UI/UX software design / Platform : Web / Duration: 2 months
            </p>
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] md:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative h-[700px] w-full rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[20px] bg-red-300">
              {/* <Image
                src="/images/thumbnail.png"
                width={1266}
                height={739}
                alt="Project 1 thumbnail m"
                className="aspect-[auto 2400/1656] h-full w-full object-cover object-center"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* part 4 */}
      <div className="flex h-min w-full max-w-[1600px] flex-col items-center justify-center px-[20px] py-[100px] md:px-[50px]">
        <div className="flex h-min w-full max-w-[1100px] flex-col items-center gap-x-[80px] gap-y-[40px] md:flex-row md:items-start">
          <div className="flex h-min flex-[1_0_0] flex-col items-center justify-center gap-[10px]">
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="font-semibold uppercase">challenge.</p>
            </div>
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="text-sm font-light">
                Midtsommer Festivalen is a new cultural event celebrating light,
                community, and the timeless Scandinavian midsummer tradition.
                The visual identity needed to capture that fleeting feeling of
                warmth and togetherness — without leaning into folklore clichés
                or feeling overly modern.
              </p>
            </div>
          </div>

          <div className="flex h-min flex-[1_0_0] flex-col items-center gap-[10px]">
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="font-semibold uppercase">approach.</p>
            </div>
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="text-sm font-light">
                Midtsommer Festivalen is a new cultural event celebrating light,
                community, and the timeless Scandinavian midsummer tradition.
                The visual identity needed to capture that fleeting feeling of
                warmth and togetherness — without leaning into folklore clichés
                or feeling overly modern.
              </p>
            </div>
          </div>

          <div className="flex h-min flex-[1_0_0] flex-col items-center gap-[10px]">
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="font-semibold uppercase">outcome.</p>
            </div>
            <div className="h-auto w-full max-w-[500px] whitespace-pre-wrap">
              <p className="text-sm font-light">
                Midtsommer Festivalen is a new cultural event celebrating light,
                community, and the timeless Scandinavian midsummer tradition.
                The visual identity needed to capture that fleeting feeling of
                warmth and togetherness — without leaning into folklore clichés
                or feeling overly modern.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* part 5 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[50px] md:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative h-[700px] w-full rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[20px] bg-red-300">
              {/* <Image
                src="/images/thumbnail.png"
                width={1266}
                height={739}
                alt="Project 1 thumbnail m"
                className="aspect-[auto 2400/1656] h-full w-full object-cover object-center"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* part 6 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[50px] md:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end gap-[50px]">
          <div className="relative h-[500px] flex-[1_0_0] rounded-[20px] bg-amber-300">
            <div className="absolute rounded-[20px]">
              {/* <Image alt="a" src="" className="w-full h-full rounded-[20px] object-center object-cover"/> */}
            </div>
          </div>

          <div className="relative h-[500px] flex-[1_0_0] rounded-[20px] bg-amber-300">
            <div className="absolute rounded-[20px]">
              {/* <Image alt="a" src="" className="w-full h-full rounded-[20px] object-center object-cover"/> */}
            </div>
          </div>
        </div>
      </div>

      {/* part 7 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[50px] md:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative h-[700px] w-full rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[20px] bg-red-300">
              {/* <Image
                src="/images/thumbnail.png"
                width={1266}
                height={739}
                alt="Project 1 thumbnail m"
                className="aspect-[auto 2400/1656] h-full w-full object-cover object-center"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* part 8 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[50px] md:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative h-[700px] w-full rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[20px] bg-red-300">
              {/* <Image
                src="/images/thumbnail.png"
                width={1266}
                height={739}
                alt="Project 1 thumbnail m"
                className="aspect-[auto 2400/1656] h-full w-full object-cover object-center"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* part 9 */}
      <div className="flex h-min w-full max-w-[1600px] items-center justify-center px-[20px] pt-[50px] pb-[100px] md:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-center justify-center">
          <div className="flex h-[20px] flex-[1_0_0] items-center gap-[5px]">
            <p className="font-semibold uppercase">final thoughts.</p>
          </div>

          <div className="flex h-auto w-[40%] whitespace-pre-wrap">
            <p className="text-sm font-light">
              This project reminded me how powerful simplicity can be when it’s
              done with intent. With SALO, every decision came back to focus —
              stripping away noise, designing for longevity, and letting
              precision speak louder than polish.
            </p>
          </div>
        </div>
      </div>

      {/* more projects */}
      <div className="flex h-min w-full max-w-[1600px] items-center justify-center px-[20px] pt-[50px] pb-[100px] md:px-[50px]">
        <div className="flex h-min w-full max-w-[1200px] flex-col items-center justify-center gap-[35px]">
          <div className="flex w-full items-center">
            <div className="h-auto w-[40%]">
              <p className="font-richmond text-[4.5rem]">More Projects</p>
            </div>
          </div>

          <div className="flex h-min w-full items-center justify-center gap-[20px]">
            <div className="aspect-[1.09816] h-[322px] flex-[1_0_0] rounded-[10px] bg-amber-200">
              {/* <Image src="" alt="" className="w-full h-full object-cover object-center rounded-[10px]"/> */}
            </div>
            <div className="aspect-[1.09816] h-[322px] flex-[1_0_0] rounded-[10px] bg-amber-200"></div>
            <div className="aspect-[1.09816] h-[322px] flex-[1_0_0] rounded-[10px] bg-amber-200"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
