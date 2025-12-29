import Image from "next/image";
import Link from "next/link";
import { projects } from "../util/data";

const columns = [
  { key: "row1", cardClass: "row1-card" },
  { key: "row2", cardClass: "row2-card" },
  { key: "row3", cardClass: "row3-card" },
];

function Work() {
  return (
    <section
      id="work"
      className="bg-bg relative z-2 -mt-13 flex h-min w-full justify-center pt-25"
    >
      <div className="relative flex w-full max-w-400 flex-[1_0_0] flex-col gap-[10px] px-[20px] md:px-[50px]">
        <div className="flex w-full items-center justify-between">
          <div className="w-[60%] text-xl font-semibold whitespace-pre-wrap">
            WORK.
          </div>
          <div className="flex h-[20px] items-center p-[10px]">
            Case Studies.
          </div>
        </div>

        <div className="flex h-min w-full flex-col items-center gap-[10px_13px] lg:flex-row">
          {columns.map((column, colIndex) => (
            <div
              key={column.key}
              className="flex w-full flex-[1_0_0] flex-col items-center gap-[10px] md:flex-row lg:flex-col"
            >
              {[0, 1, 2].map((cardIndex) => {
                const project = projects[colIndex];

                return (
                  <div key={cardIndex} className={column.cardClass}>
                    {cardIndex === 0 && project ? (
                      <Link href={`/work/${project.slug}`}>
                        <Image
                          src={project.thumbnail}
                          alt={`Project ${colIndex + 1}`}
                          fill
                          className="project-thumbnail"
                          priority={colIndex === 0}
                        />
                      </Link>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
          {/* 
          <div className="flex w-full flex-[1_0_0] flex-col items-center gap-[10px] md:flex-row lg:flex-col">
            <div className="row1-card">
              <Link href={`/work/${projects[0].slug}`}>
                <Image
                  src="/images/project1.png"
                  alt="Project 1"
                  fill
                  className="project-thumbnail"
                  priority
                />
              </Link>
            </div>
            <div className="row1-card"></div>
            <div className="row1-card"></div>
          </div>
          <div className="flex w-full flex-[1_0_0] flex-col items-center gap-[10px] md:flex-row lg:flex-col">
            <div className="row2-card">
              <Image
                src="/images/project2.png"
                alt="Project 2"
                fill
                className="project-thumbnail"
                priority
              />
            </div>
            <div className="row2-card"></div>
            <div className="row2-card"></div>
          </div>
          <div className="flex w-full flex-[1_0_0] flex-col items-center gap-[10px] md:flex-row lg:flex-col">
            <div className="row3-card">
              <Image
                src="/images/project3.png"
                alt="Project 3"
                fill
                className="project-thumbnail"
                priority
              />
            </div>
            <div className="row3-card"></div>
            <div className="row3-card"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Work;
