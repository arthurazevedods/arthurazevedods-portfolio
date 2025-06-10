import CardProject from "./CardProject";
import projectsData from "../data/projects.json";

function RecentWorks() {
  return (
    <section className="container mx-auto  py-20 md:py-32">
      <h3
        className="flex justify-start text-5xl md:text-6xl font-bold pb-14"
        style={{ fontFamily: "var(--font-titles)" }}
      >
        Trabalhos Recentes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {projectsData.map((project, index) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default RecentWorks;