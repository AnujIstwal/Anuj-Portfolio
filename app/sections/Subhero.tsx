function Subhero() {
  return (
    <section className="subhero bg-bg border-border relative z-2 flex h-screen w-full items-start border-t">
      {/* Subhero content goes here */}
      <div className="relative flex w-full max-w-400 flex-row items-start justify-between overflow-visible px-[50px] pt-[150px]">
        <div className="min-h-min max-w-[800px]">
          <p className="font-richmond text-left text-[4.3rem] md:text-[3.75rem] lg:text-[7rem]">
            I help teams turn complex ideas into simple, usable interfaces.
          </p>
        </div>
        <div className="pt-2.5">
          <p className="text-xl font-light tracking-widest uppercase">
            anuj kumar
          </p>
        </div>
      </div>
    </section>
  );
}

export default Subhero;
