import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardProject from "@/components/CardProject";
import projectsData from "@/data/projects.json";
import Radio from "@/components/Radio";
import { useRadioStore } from "@/store/radio"; // importe o store

export const Route = createFileRoute({
  component: Projects,
});

type Project = {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
  tag: string;
};

function Projects() {
  const selected = useRadioStore((state) => state.selected);

  // Defina o filtro de acordo com o selecionado no radio
  const filteredProjects = projectsData.filter((project: Project) =>
    selected === 1
      ? project.tag === "produto"
      : selected === 2
      ? project.tag === "projeto"
      : project.tag === "repositorio"
  );

  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-16 px-4">
        <section className="w-full max-w-5xl">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12 text-[#bd93f9]"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Produtos, Projetos & Repositórios
          </h1>
          <div className="w-full flex justify-center">
            <Radio />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;