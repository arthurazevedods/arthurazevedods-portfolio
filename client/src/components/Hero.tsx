'use client'

export default function Hero() {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative isolate  py-12">
        
        <div className="mx-auto max-w-2xl py-12 sm:py-10 lg:py-6">
          <div className="text-start">
            <h1 className="sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance text-[#f8f8f2] " style={{ fontFamily: "var(--font-titles)" }} >
              Olá, sou o <span className="font-extrabold">Arthur</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-[#bd93f9] sm:text-xl/8">
              Sou <span className="font-bold italic">desenvolvedor web</span>, analista de dados e professor. Tenho paixão por tecnologia, ensino e por transformar dados em soluções inteligentes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#f1fa8c] px-3.5 py-2.5 text-sm font-semibold text-[#282a36] shadow-xs hover:bg-[#ffb86c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd93f9]"
              >
                Fale comigo
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
