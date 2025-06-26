import { useRadioStore } from "../store/radio";

const Radio = () => {
  const selected = useRadioStore((state) => state.selected);
  const setSelected = useRadioStore((state) => state.setSelected);
  return (
    <div className={`relative flex items-center rounded-lg bg-[#282a36] text-[#f8f8f2] w-[300px] overflow-hidden border-3  mb-4 ${
      selected === 1 ? "border-[#F87359]"
      : selected === 2 ? "border-[#ffb86c]"
      : "border-[#bd93f9] "
    }`}
    
    >
      <label
        className={`flex-1 py-2 cursor-pointer flex justify-center items-center font-semibold text-sm z-10 transition-colors ${
          selected === 1 ? "text-neutral-900" : ""
        }`}
      >
        <input
          type="radio"
          name="value-radio"
          className="hidden"
          checked={selected === 1}
          onChange={() => setSelected(1)}
        />
        Produtos
      </label>
      <label
        className={`flex-1 py-2 cursor-pointer flex justify-center items-center font-semibold text-sm z-10 transition-colors ${
          selected === 2 ? "text-neutral-900" : ""
        }`}
      >
        <input
          type="radio"
          name="value-radio"
          className="hidden"
          checked={selected === 2}
          onChange={() => setSelected(2)}
        />
        Projetos
      </label>
      <label
        className={` flex-1 py-2  cursor-pointer flex justify-center items-center font-semibold text-sm z-10 transition-colors ${
          selected === 3 ? "text-neutral-900" : ""
        }`}
      >
        <input
          type="radio"
          name="value-radio"
          className="hidden"
          checked={selected === 3}
          onChange={() => setSelected(3)}
        />
        Repositórios
      </label>
      <span
        className={`absolute top-0 h-full w-1/3 z-0 transition-all duration-150
          ${
            selected === 1
              ? "left-0 bg-[#F87359]"
              : selected === 2
              ? "left-1/3 bg-[#ffb86c]"
              : "left-2/3 bg-[#bd93f9]"
          }
        `}
      />
    </div>
  );
};

export default Radio;
