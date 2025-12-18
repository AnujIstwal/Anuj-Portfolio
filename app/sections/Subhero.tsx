function Subhero() {
    return (
        <section className="flex items-start relative h-screen w-screen">
            {/* Subhero content goes here */}
            <div className="max-w-400 flex flex-row items-start justify-between w-full px-[50px] pt-[150px] overflow-visible relative">
                <div className="max-w-[800px] min-h-min">
                    <p className="font-richmond text-left text-[4.3rem] md:text-[3.75rem] lg:text-[7rem]">
                        I help teams turn complex ideas into simple, usable
                        interfaces.
                    </p>
                </div>
                <div className="pt-2.5">
                    <p className="uppercase text-xl font-light tracking-widest">
                        anuj kumar
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Subhero;
