import CardProject from "./CardProject";
import projectsData from "../data/projects.json";

function RecentWorks() {
  return (
    <section className="container mx-auto px-6">
      <h3
        className="flex justify-start text-5xl font-bold pb-8"
        style={{ fontFamily: "var(--font-titles)" }}
      >
        Trabalhos Recentes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default RecentWorks;