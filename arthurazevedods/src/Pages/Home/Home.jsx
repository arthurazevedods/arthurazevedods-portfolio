import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";

import projects from '@json/projects.json';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="m-auto  text-3xl justify-start block  mt-4 border-b border-slate-300 pb-2 max-w-[360px]">
        <h3>
          <b>Projetos</b> & Repositórios.
        </h3>
      </div >

      <ul className="container flex justify-around flex-wrap " >
        {projects.map((project) => (
          <li key={project.id}>
            <Card project={project}  />
          </li>
        ))}
        
      </ul>
      <Skills />
      <Footer />
    </>

  )
}