import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
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
      <div className="container flex justify-around">
        <Card
          name="Dona"
          description="Página principal e-commerce de roupas, desenvolvido utilizando HTML e CSS com o auxílio do Bootstrap."
        />
        <Card
          name="Dona"
          description="Página principal e-commerce de roupas, desenvolvido utilizando HTML e CSS com o auxílio do Bootstrap."
        />
        <Card
          name="Dona"
          description="Página principal e-commerce de roupas, desenvolvido utilizando HTML e CSS com o auxílio do Bootstrap."
        />
      </div>
      <Skills />
      <Footer />
    </>

  )
}