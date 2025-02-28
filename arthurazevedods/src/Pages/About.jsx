
import { Image } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button"


export default function About() {
  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                src="#"
                className="absolute inset-0 h-full w-full object-cover 
                            rounded-3xl"
                alt="banner"
                width={800}
                height={800}
              />
            </div>

            <div className="sm:py-12 lg:py-24">
              <h2 className="lg:text-3xl sm:text-2xl font-bold capitalize  text-gray-900">
                Sobre mim
              </h2>

              <p className="mt-4 text-gray-700 lg:text-lg">
                Olá! Meu nome é Arthur A. Silva, sou bacharel em Ciência da Computação pela Universidade Federal 
                do Maranhão e possuo pós-graduações em Docência do Ensino Superior e Robótica Educacional. 
                Minha carreira é marcada pela atuação como professor, desenvolvedor web e analista de dados, 
                combinando habilidades técnicas e pedagógicas para impactar positivamente o aprendizado e a 
                inovação.
              </p>

              <p className="mt-4 text-gray-700 lg:text-lg">
              Atualmente, sou professor no Instituto Estadual de Educação, Ciência e Tecnologia do Maranhão (IEMA), 
              onde leciono (ou já lecionei) disciplinas como Banco de Dados, Programação Web, Programação Orientada a Objetos
              Introdução a Algoritmos, Desenvolvimento de Software e Robótica Educacional.
              </p>

              <p className="mt-4 text-gray-700 lg:text-lg">
              Minhas competências técnicas incluem linguagens como Python, Golang, JavaScript 
              (Node.js, React.js, Vue.js) e conhecimentos em banco de dados (SQL Server, MongoDB, Firebase). 
              Atualmente tenho trabalhado mais com Golang e React, 
              mas estou sempre pronto para novos aprendizados e disposto a novos desafios.
              </p>

              

              <Button className="mt-4 capitalize">
                Entrar em contato!
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}