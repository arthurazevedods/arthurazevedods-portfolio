type Element = {
  name: string;
};

function ElementSkills({element}:{element: Element}) {
  return (
    <div
      className="
                relative inline-block
                bg-gradient-to-b from-[#44475a] to-[#6272a4]
                text-[#f8f8f2] font-bold font-sans text-lg
                rounded-full px-7 py-3
                cursor-pointer
                shadow-lg
                transition-all duration-300 ease-in-out
                hover:from-[#6272a4] hover:to-[#bd93f9]
                hover:-translate-y-0.5
                active:scale-95 active:shadow-md
                animate-shimmer
              "
    >
      {element.name}
    </div>
  );
}

export default ElementSkills;
