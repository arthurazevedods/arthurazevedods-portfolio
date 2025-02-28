
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import projects from '@json/projects.json';

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="m-auto mt-20 text-3xl justify-start block  pb-2 max-w-[360px]">
        <h3>
          <b>Projetos</b> & Repositórios.
        </h3>
      </div >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.github}>
            <Card project={project} showUrlButton={true} />
          </div>
        ))}
      </div>
      <Footer />
    </>

  )
}