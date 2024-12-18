"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    name: "Selena",
    category: "Headgear Design",
    imageUrl: "/1.png",
    pdfUrl: "/pdfs/selene_compressed.pdf",
  },
  {
    id: "2",
    name: "Hidesign  Project",
    category: "Bag Design",
    imageUrl: "/2.png",
    pdfUrl: "/pdfs/highdesign_compressed.pdf",
  },
  {
    id: "3",
    name: "LV x YK ",
    category: "Product Packaging Design",
    imageUrl: "/9.png",
    pdfUrl: "/pdfs/Louis_Vuitton_compressed.pdf",
  },
  {
    id: "4",
    name: "Glimmer",
    category: "Bag Design",
    imageUrl: "/4.png",
    pdfUrl: "/pdfs/Bag_design_glimmer_compressed.pdf",
  },
  {
    id: "5",
    name: "Beret Hat",
    category: "Headgear Design",
    imageUrl: "/5.png",
    pdfUrl: "/pdfs/beret_hat_compressed.pdf",
  },
  {
    id: "6",
    name: "Loops & Lore",
    category: "Belt Design",
    imageUrl: "/6.png",
    pdfUrl: "/pdfs/BeltBag_compressed.pdf",
  },
  {
    id: "7",
    name: "Heating Pad",
    category: "Smart Mechanisms Project",
    imageUrl: "/7.png",
    pdfUrl: "/pdfs/heating_pad_compressed.pdf",
  },
  {
    id: "8",
    name: "Baggit Range Design",
    category: "Bag Design",
    imageUrl: "/8.png",
    pdfUrl: "/pdfs/Range_Design_compressed.pdf",
  },
  {
    id: "9",
    name: "Kolahpuri Craft",
    category: "Lamp Design",
    imageUrl: "/3.png",
    pdfUrl: "/pdfs/Kolahpuri_chappal_compressed.pdf",
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
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
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

        <div className="relative group">
          <button
            onClick={scrollPrev}
            className="absolute left-[-30px] sm:left-[-30px] md:left-[-40px] lg:left-[-60px] top-1/2 transform -translate-y-1/2 text-[#90b4aa] hover:text-[#434850] transition-colors duration-300 bg-transparent p-2 z-10"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6 md:gap-8 min-h-[400px]">
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

          <button
            onClick={scrollNext}
            className="absolute right-[-30px] sm:right-[-30px] md:right-[-40px] lg:right-[-60px] top-1/2 transform -translate-y-1/2 text-[#90b4aa] hover:text-[#434850] transition-colors duration-300 bg-transparent p-2 z-10"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
