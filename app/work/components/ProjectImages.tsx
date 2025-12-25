import Image from "next/image";

export default function ProjectImages() {
  return (
    <>
      <div className="relative flex h-min w-full items-center justify-center px-[20px] md:px-[30px] lg:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative h-[250px] w-full rounded-[10px] md:h-[500px] lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src="/images/projects/project1/1.png"
                width={2033}
                height={1403}
                alt="Project 1 thumbnail m"
                className="h-full w-full rounded-[10px] object-cover object-center lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 4 */}
      <div className="flex h-min w-full max-w-[1600px] flex-col items-center justify-center px-[20px] py-[80px] md:px-[30px] md:py-[100px] lg:px-[50px]">
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
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative aspect-[1.16667] w-full rounded-[10px] md:aspect-[1.875] lg:aspect-auto lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] bg-red-300 lg:rounded-[20px]">
              <Image
                src="/images/projects/project1/2.png"
                width={2160}
                height={1536}
                alt="Project 1 thumbnail m"
                className="h-full w-full rounded-[10px] object-cover object-center lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 6 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-end gap-[20px] md:flex-row md:gap-[30px] lg:gap-[50px]">
          <div className="relative aspect-[1.16667] w-full flex-none rounded-[10px] bg-amber-300 md:aspect-[1.2] md:flex-[1_0_0] lg:aspect-auto lg:h-[500px] lg:rounded-[20px]">
            <div className="absolute inset-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src="/images/projects/project1/3.png"
                width={1866}
                height={1623}
                alt="Project 1 thumbnail m"
                className="h-full w-full rounded-[10px] object-cover object-center lg:rounded-[20px]"
              />
            </div>
          </div>

          <div className="relative aspect-[1.16667] w-full flex-none rounded-[10px] bg-amber-300 md:aspect-[1.2] md:flex-[1_0_0] lg:aspect-auto lg:h-[500px] lg:rounded-[20px]">
            <div className="absolute inset-0 rounded-[10px] lg:rounded-[20px]">
              <Image
                src="/images/projects/project1/4.png"
                width={1866}
                height={1623}
                alt="Project 1 thumbnail m"
                className="h-full w-full rounded-[10px] object-cover object-center lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 7 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative aspect-[1.4] w-full rounded-[10px] md:aspect-[1.875] lg:aspect-auto lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] bg-red-300 lg:rounded-[20px]">
              <Image
                src="/images/projects/project1/5.png"
                width={2528}
                height={1744}
                alt="Project 1 thumbnail m"
                className="h-full w-full rounded-[10px] object-cover object-center lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 8 */}
      <div className="relative flex h-min w-full items-center justify-center px-[20px] pb-[20px] md:px-[30px] md:pb-[30px] lg:px-[50px] lg:pb-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] items-end">
          <div className="relative aspect-[1.4] w-full rounded-[10px] md:aspect-[1.875] lg:aspect-auto lg:h-[700px] lg:rounded-[20px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] bg-red-300 lg:rounded-[20px]">
              <Image
                src="/images/projects/project1/6.png"
                width={2033}
                height={1403}
                alt="Project 1 thumbnail m"
                className="h-full w-full rounded-[10px] object-cover object-center lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* part 9 */}
      <div className="flex h-min w-full max-w-[1600px] items-center justify-center px-[20px] pt-[50px] pb-[100px] md:px-[30px] lg:px-[50px]">
        <div className="relative flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-start gap-y-[30px] md:flex-row">
          <div className="flex h-[20px] flex-[1_0_0] items-center gap-[5px]">
            <p className="font-semibold uppercase">final thoughts.</p>
          </div>

          <div className="flex h-auto w-full whitespace-pre-wrap md:w-[40%]">
            <p className="text-sm font-light">
              This project reminded me how powerful simplicity can be when it’s
              done with intent. With SALO, every decision came back to focus —
              stripping away noise, designing for longevity, and letting
              precision speak louder than polish.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
