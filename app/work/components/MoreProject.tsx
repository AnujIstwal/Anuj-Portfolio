export default function MoreProject() {
  return (
    <>
      <div className="border-border flex h-min w-full max-w-[1600px] items-center justify-center border-t px-[20px] pt-[50px] pb-[100px] md:px-[30px] lg:px-[50px]">
        <div className="flex h-min w-full max-w-[1200px] flex-col items-center justify-center gap-[35px]">
          <div className="flex w-full items-center">
            <div className="h-auto w-[100%] lg:w-[40%]">
              <p className="font-richmond text-[2.88rem] md:text-[3.6rem] lg:text-[4.5rem]">
                More Projects
              </p>
            </div>
          </div>

          <div className="flex h-min w-full flex-col items-center justify-center gap-[20px] md:flex-row">
            <div className="aspect-[1.09816] w-full flex-none rounded-[10px] bg-amber-200 md:flex-[1_0_0]">
              {/* <Image src="" alt="" className="w-full h-full object-cover object-center rounded-[10px]"/> */}
            </div>
            <div className="aspect-[1.09816] w-full flex-none rounded-[10px] bg-amber-200 md:flex-[1_0_0]"></div>
            <div className="aspect-[1.09816] w-full flex-none rounded-[10px] bg-amber-200 md:flex-[1_0_0]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
