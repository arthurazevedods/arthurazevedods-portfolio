const langs_frameworks = [
  "HTML", "CSS", "Python", "Javascript", "Typescript", "Golang", "C/C++",
  "React", "Vue", "Django", "Tailwind", "Bootstrap", "Nodejs", "Express"
];

function LanguagesAndFrameworks() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="w-full rounded-[20px] flex flex-col justify-around bg-[#282a36] p-6 gap-6">
        <h3
          className="flex justify-center text-3xl md:text-4xl font-bold pb-10 text-[#f8f8f2]"
          style={{ fontFamily: "var(--font-titles)" }}
        >
          Linguagens & Frameworks
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {langs_frameworks.map((element) => (
            <div
              key={element}
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
              {element}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LanguagesAndFrameworks;
