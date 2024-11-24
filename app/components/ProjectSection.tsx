"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: "1",
    name: "Project One",
    category: "Accessories",
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    name: "Project Two",
    category: "Jewelry",
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    name: "Project Three",
    category: "Fashion",
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    name: "Project Four",
    category: "Accessories",
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Projects</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 min-h-[400px]">
              {projects.map((project) => (
                <div key={project.id} className="flex-[0_0_auto]">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
