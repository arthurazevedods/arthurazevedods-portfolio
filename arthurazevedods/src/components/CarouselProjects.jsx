import Card from "../components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* eslint-disable react/prop-types */
export default function CarouselProjects({ projectsData }) {
  // Filtra os projetos e repositórios com base na propriedade "tab"
  const projects = projectsData.filter((item) => item.tab === "projeto");
  const repositories = projectsData.filter((item) => item.tab === "repositório");

  return (
    <Tabs defaultValue="projetos" className="w-full mx-auto">
      <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto">
        <TabsTrigger value="projetos">Projetos</TabsTrigger>
        <TabsTrigger value="repositorios">Repositórios</TabsTrigger>
      </TabsList>

      {/* Aba Projetos */}
      <TabsContent value="projetos">
        <Carousel className="relative" 
            opts={{
                align: "start",
                loop: true,
              }}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.github} className="md:basis-1/2 lg:basis-1/3">
                <Card project={project} showUrlButton={true}/>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md" />
        </Carousel>
      </TabsContent>

      {/* Aba Repositórios */}
      <TabsContent value="repositorios">
        <Carousel className="relative">
          <CarouselContent>
            {repositories.map((repo) => (
              <CarouselItem key={repo.github} className="md:basis-1/2 lg:basis-1/3">
                <Card project={repo} showUrlButton={false}/>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md" />
        </Carousel>
      </TabsContent>
    </Tabs>
  );
}
