"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    name: "Project One",
    category: "Accessories",
    imageUrl: "/image1.png", // Update with your actual image paths
  },
  {
    id: "2",
    name: "Project Two",
    category: "Jewelry",
    imageUrl: "/image2.png",
  },
  {
    id: "3",
    name: "Project Three",
    category: "Fashion",
    imageUrl: "/image3.png",
  },
  {
    id: "4",
    name: "Project Four",
    category: "Accessories",
    imageUrl: "/image4.png",
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full min-h-screen bg-[#fbf3ea] flex flex-col justify-center py-16">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin text-[#434850] tracking-tight leading-tight mb-12 font-sans">
            PROJECTS
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-0.5 bg-[#90b4aa] mt-6 mb-12 origin-left"
          />
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 min-h-[400px]">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-[0_0_auto]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-[#90b4aa ] text-[#90b4aa] hover:bg-[#90b4aa] hover:text-[#fbf3ea]"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-[#90b4aa] text-[#90b4aa] hover:bg-[#90b4aa] hover:text-[#fbf3ea]"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
