import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute({
  component: About,
});


function About() {
  return (
    <>
      <Navbar />
      <section className="bg-[#282a36] text-[#f8f8f2] min-h-[80vh]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative sm:top-12 lg:top-24 overflow-hidden rounded-3xl sm:h-80 lg:order-last lg:h-100 shadow-lg border border-[#44475a]/40">
              <img
                src="/foto.jpg"
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                alt="banner"
                width={400}
                height={400}
                style={{ background: "#44475a" }}
              />
            </div>

            <div className="sm:py-12 lg:py-24 flex flex-col justify-center">
              <h2
                className="lg:text-4xl sm:text-3xl text-start font-bold capitalize text-[#bd93f9]"
                style={{ fontFamily: "var(--font-titles)" }}
              >
                Sobre mim
              </h2>

              <p className="mt-4 text-[#f8f8f2] lg:text-lg text-start">
                Olá! Meu nome é Arthur A. Silva, sou <span className="text-[#66f859]">bacharel em Ciência da Computação pela Universidade Federal
                do Maranhão</span> e possuo pós-graduações em Docência do Ensino Superior e Robótica Educacional.
                Minha carreira é marcada pela atuação como professor, desenvolvedor web e analista de dados,
                combinando habilidades técnicas e pedagógicas para impactar positivamente o aprendizado e a
                inovação.
              </p>

              <p className="mt-4 text-[#f8f8f2] lg:text-lg text-start">
                Atualmente, sou <span className="text-[#66f859]">professor no Instituto Estadual de Educação, Ciência e Tecnologia do Maranhão  (IEMA)</span>,
                onde leciono (ou já lecionei) disciplinas como Banco de Dados, Programação Web, Programação Orientada a Objetos,
                Introdução a Algoritmos, Desenvolvimento de Software e Robótica Educacional.
              </p>

              <p className="mt-4 text-[#f8f8f2] lg:text-lg text-start">
                Minhas competências técnicas incluem o <span className="text-[#66f859]">desenvolvimento</span> de aplicações web responsivas, <span className="text-[#66f859]">ensino</span> de
                programação e robótica para estudantes de diferentes idades e níveis de habilidade, além da
                análise e interpretação de dados para a tomada de decisões informadas.
              </p>

              <p className="mt-4 lg:text-lg text-start">
                Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente,
                com o objetivo de continuar contribuindo para a educação e a inovação tecnológica.
              </p>

              <Button className="mt-8 w-fit h-16 text-xl bg-[#bd93f9] text-[#282a36] hover:bg-[#9b59b6]">
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;