import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  return (
    <>
      <h3 className="flex justify-center text-4xl bold pb-8 ">Trabalhos Recentes</h3>
      <Carousel className="w-full max-w-xs m-auto">
        <CarouselContent className="m-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="h-[300px] w-full bg-[#090d0d] border-4 rounded-4xl border-amber-300">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Projects;
