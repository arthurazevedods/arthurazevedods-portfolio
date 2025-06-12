import SkillsCategories from "./SkillsCategories";

const langs_frameworks = [
  "HTML", "CSS", "Python", "Javascript", "Typescript", "Golang", "C/C++",
  "React", "Vue", "Django", "Tailwind", "Bootstrap", "Nodejs", "Express", "SQL"
];

const tools = [
  "Linux", "Git", "Github", "Vite", "Postaman", "Insomnia", "Figma","Jupyter Notebook", "Google Colab",
  "Firebase","MongoDB", "MySQL", "PostgreSQL", "Supabase","SQLite"
];

const outhers = [
  "Arduíno", "Rest API", "Vercel"
];

function Skills() {
  return (
    <section className="container mx-auto py-16 md:py-24 flex flex-col justify-around gap-8">
      <SkillsCategories title="Linguagens & Frameworks" elements={langs_frameworks} />
      <SkillsCategories title="Tecnologias & Ferramentas" elements={tools} />
      <SkillsCategories title="Outros" elements={outhers} />
    </section>
  );
}

export default Skills;
