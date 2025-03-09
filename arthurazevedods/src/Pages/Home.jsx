
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import CarouselProjects from "../components/CarouselProjects";

import projects from '@json/projects.json';
import FormContactMe from "@/components/FormContactMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="m-auto  text-3xl justify-start block  mt-4  pb-2 max-w-[360px]">
        <h3>
          <b>Projetos</b> & Repositórios.
        </h3>
      </div >

      
      <CarouselProjects projectsData={projects}/>      
      <FormContactMe />
      <Footer />
    </>

  )
}