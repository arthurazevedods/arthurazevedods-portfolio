import ElementSkills from "./ElementSkills";

type SkillsCategoriesProps = {
  title: string;
  elements: string[];
};

function SkillsCategories({ title, elements }: SkillsCategoriesProps) {
  return (
    <div className="w-full rounded-[20px] flex flex-col justify-around bg-[#282a36] p-6 gap-6">
      <h4
        className="flex justify-center text-3xl md:text-4xl font-bold pb-10 text-[#f8f8f2]"
        style={{ fontFamily: "var(--font-titles)" }}
      >
        {title}
      </h4>
      <div className="flex flex-wrap justify-center gap-4">
        {elements.map((element, index) => (
          <ElementSkills key={index} element={{ name: element }} />
        ))}
      </div>
    </div>
  );
}

export default SkillsCategories;