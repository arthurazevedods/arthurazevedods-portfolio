import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardProject from "@/components/CardProject";
import projectsData from "@/data/projects.json";
import Radio from "@/components/Radio";

export const Route = createFileRoute({
  component: Projects,
});

function Projects() {
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
            <Radio/>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectsData.map((project, index) => (
              <CardProject key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}