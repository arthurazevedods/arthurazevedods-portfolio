import "./App.css";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import SectionElement from "@/components/SectionElement";

export const Route = createFileRoute({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionElement section={{ name: "Produtos", projectsPath:"../data/projects.json"}} />
        <SectionElement section={{ name: "Trabalhos Recentes", projectsPath:"../data/projects.json" }} />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
