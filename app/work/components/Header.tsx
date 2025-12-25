type Project = {
  slug: string;
  title: string;
  description: string;
};

function Header({ project }: { project: Project }) {
  return (
    <div className="relative flex h-min w-full max-w-[1600px] flex-row items-center justify-center px-[20px] md:px-[30px] lg:px-[50px]">
      <div className="z-10 flex h-min max-w-[1200px] flex-[1_0_0] flex-col items-start gap-[50px] pt-[150px] pb-[30px] md:gap-[60px] lg:gap-[100px]">
        <div className="flex h-min w-full flex-col items-end gap-[60px] border-b border-[#0c121e1a] pb-[35px]">
          <div className="flex h-min w-full items-center">
            <p className="font-richmond text-[3.1rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[6rem]">
              {project.title}
            </p>
          </div>

          <div className="flex h-min w-full flex-col items-start gap-y-[30px] md:flex-row">
            <div className="flex h-[20px] flex-[1_0_0] flex-row items-center gap-[5px]">
              <p className="text-[17px] font-bold uppercase">
                project overview.
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
          <p className="">
            <span className="opacity-50">Role:</span> UI/UX software design{" "}
            <span className="text-lg">/</span>
            {"  "}
            <span className="opacity-50">Platform:</span> Web{" "}
            <span className="text-lg">/</span>
            {"  "}
            <span className="opacity-50">Duration:</span> 2 months
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
