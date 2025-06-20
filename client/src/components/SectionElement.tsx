import CardProject from "./CardProject";
import projectsData from "../data/projects.json";
type Section = {
  name: string;
  projectsPath: string;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  tag:string;
};

function SectionElement({ section }: { section: Section }) {
  const filteredProjects = projectsData.filter((project: Project) =>
    section.name === "Produtos"
      ? project.tag === "produto"
      : project.tag !== "produto"
  );

  return (
    <section className="container mx-auto">
      <h3
        className="flex justify-start text-5xl md:text-6xl font-bold pb-14"
        style={{ fontFamily: "var(--font-titles)" }}
      >
        {section.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {filteredProjects.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SectionElement;

