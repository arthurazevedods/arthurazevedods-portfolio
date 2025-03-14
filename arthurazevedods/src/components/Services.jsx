import {
  Code,
  Database,
  BookOpen,
  ChartBar,
  Lightbulb,
  Bot
} from 'lucide-react';
const services = [
  {
    icon: <Code className="h-6 w-6 text-blue-600" />,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas, responsivas e de alto desempenho."
  },
  {
    icon: <Database className="h-6 w-6 text-green-600" />,
    title: "Análise de Dados",
    description: "Extraia insights valiosos de seus dados com ferramentas avançadas de análise."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-orange-600" />,
    title: "Aulas Personalizadas",
    description: "Aulas sob medida para suas necessidades, com foco em programação, análise de dados e muito mais."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
    title: "Criação de MVP's",
    description: "Desenvolvemos MVPs (Produtos Viáveis Mínimos) para validar suas ideias de negócios de forma rápida e eficiente."
  },
  {
    icon: <ChartBar className="h-6 w-6 text-purple-600" />,
    title: "Relatórios e Dashboards",
    description: "Visualize dados de forma clara e intuitiva com dashboards interativos e relatórios detalhados."
  },
  {
    icon: <Bot className="h-6 w-6 text-red-600" />,
    title: "Robótica Educacional",
    description: "Introdução à robótica e programação para crianças e jovens, promovendo o aprendizado prático e criativo."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 w-full">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">
            Serviços
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Soluções completas para suas necessidades
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços especializados em desenvolvimento web, análise de dados, educação e inovação para impulsionar seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;