function SelectedWork() {
  return (
    <div className="flex h-min w-full flex-col items-center">
      <div className="flex h-min w-full max-w-[1600px] items-start px-[20px] pt-[150px] md:px-[50px]">
        <div className="flex h-min flex-[1_0_0] flex-col items-start justify-between gap-y-[25px] xl:flex-row xl:items-end">
          <p className="font-richmond text-[3.1rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[6rem]">
            Selected work.
          </p>

          <div className="flex h-auto w-full max-w-[500px] flex-col justify-start xl:w-[25%]">
            <p className="text-left text-sm">
              These are some of the projects I am the most proud of. Read more
              about every project by clicking on them. Hopefully they will give
              you an idea of my design style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedWork;
