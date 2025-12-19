type Props = {
  item: {
    id: string;
    index: string;
    title: string;
    description: string;
  };
  isActive: boolean;
  onClick: () => void;
};

const OutcomeItem = ({ item, isActive, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="flex h-min w-full cursor-pointer flex-row items-start gap-[30px] transition-all duration-500"
    >
      {/* Index */}
      <div className="text-muted w-[30%]">0{item.index}</div>

      {/* Content */}
      <div className="flex w-full flex-[1_0_0] items-start border-b border-[#0c121e66] pb-[20px]">
        {/* Text block */}
        <div className="flex w-[80%] flex-col items-start gap-[10px]">
          <span className="text-sm font-semibold tracking-wide uppercase">
            {item.title}
          </span>

          {/* Description (accordion body) */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm">{item.description}</p>
          </div>
        </div>

        {/* Icon */}
        <div className="flex flex-[1_0_0] justify-end">
          <span className="text-xl select-none">{isActive ? "−" : "+"}</span>
        </div>
      </div>
    </div>
  );
};

export default OutcomeItem;
