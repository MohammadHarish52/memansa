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
    name: "Hidesign Classroom Project",
    category: "Bag Design",
    imageUrl: "/image1.png",
    pdfUrl: "/pdfs/highdesign_compressed.pdf",
  },
  {
    id: "2",
    name: "Louis Vuitton x Yayoi ",
    category: "Product Packaging Design",
    imageUrl: "/image2.png",
    pdfUrl: "/pdfs/Louis_Vuitton_compressed.pdf",
  },
  {
    id: "3",
    name: "Heating Pad",
    category: "Smart Mechanisms Project",
    imageUrl: "/image3.png",
    pdfUrl: "/pdfs/heating_pad_compressed.pdf",
  },
  {
    id: "4",
    name: "Glimmer",
    category: "Bag Design",
    imageUrl: "/image4.png",
    pdfUrl: "/pdfs/bag_design_glimmer_compressed.pdf",
  },
  {
    id: "5",
    name: "Baggit Range Design",
    category: "Bag Design",
    imageUrl: "/image5.png",
    pdfUrl: "/pdfs/bag_design_glimmer_compressed.pdf",
  },
  {
    id: "6",
    name: "Selena",
    category: "Headgear Design",
    imageUrl: "/image6.png",
    pdfUrl: "/pdfs/selena_compressed.pdf",
  },
  {
    id: "7",
    name: "Beret Hat",
    category: "Headgear Design",
    imageUrl: "/image7.png",
    pdfUrl: "/pdfs/beret_hat_compressed.pdf",
  },
  {
    id: "8",
    name: "Kolahpuri Craft Lamp ",
    category: "Craft Based Project",
    imageUrl: "/image8.png",
    pdfUrl: "/pdfs/kolahpuri_chappal_compressed.pdf",
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
