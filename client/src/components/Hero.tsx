export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[40vh] py-8 md:py-12">
      <div className="relative isolate">
        <div className="mx-auto container mt-4 py-6 sm:py-8 lg:py-10">
          <div className="text-start">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-semibold tracking-tight text-balance text-[#f8f8f2]"
              style={{ fontFamily: "var(--font-titles)" }}>
              Olá, sou o <span className="font-extrabold">Arthur</span>
            </h1>
            <p className="mt-10 text-5xl font-medium text-pretty text-[#bd93f9] sm:text-3xl/8">
              Sou <span className="font-bold italic">desenvolvedor web</span>,
              analista de dados e professor. Tenho paixão por tecnologia, ensino
              e por transformar dados em soluções inteligentes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#f1fa8c]  px-5 py-3 text-3xl font-semibold text-[#282a36] shadow-xs hover:bg-[#ffb86c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd93f9]"
              >
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
