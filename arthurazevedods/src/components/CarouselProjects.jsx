import Card from '../components/Card'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
/* eslint-disable react/prop-types */
export default function CarrouselProjects({ projects }) {
    return (
        <>
            <Carousel className="relative">
                <CarouselContent>
                    
                    {projects.map((project) => (
                        <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                            <Card project={project} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md" />
            </Carousel>


        </>

    )
}