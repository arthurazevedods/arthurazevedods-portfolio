import { useState } from "react";

const Radio = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="relative flex items-center rounded-lg bg-[#282a36] text-[#f8f8f2] w-[300px] overflow-hidden border-2 border-[#bd93f9] mb-4">
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
        className={`flex-1 py-2 cursor-pointer flex justify-center items-center font-semibold text-sm z-10 transition-colors ${
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
        Reposiórios
      </label>
      <span
        className={`absolute top-0 h-full w-1/3 z-0 transition-all duration-150
          ${
            selected === 1
              ? "left-0 bg-[#50fa7b]"
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
