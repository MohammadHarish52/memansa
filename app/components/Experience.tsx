"use client";
import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  date: string;
  title: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "AMAMA JEWELS",
    date: "June 2024- July 2024",
    title: "Product Design Intern",
    responsibilities: [
      "Designed and developed home decor prototypes for the Amama Homes collection, integrating signature jewelry elements into innovative products.",
      "Collaborated with artisans in the manufacturing process, utilizing brass and 22k gold plating techniques, ensuring quality craftsmanship.",
      "Led creative direction for Instagram reels and stories, enhancing the brand's digital presence and engagement to 1M+.",
    ],
  },
  {
    company: "HIDESIGN",
    date: "Feb 2024- May 2024",
    title: "Live Classroom Project",
    responsibilities: [
      "Created the Kawaii-Coquette collection, focusing on simple yet chic silhouettes that reflect the brand's identity while incorporating playful XO motifs.",
      "Collaborated with artisans to ensure high-quality craftsmanship, overseeing the production process from concept to completion, and maintaining brand standards.",
    ],
  },
  {
    company: "KAAPSHI : KOLHAPURI CRAFT",
    date: "2023-2025",
    title: "Craft Research & Documentation and Product Development",
    responsibilities: [
      "Conducted comprehensive research and documentation of the Kolhapuri craft cluster, focusing on traditional techniques and craftsmanship.",
      "Executed market surveys to identify consumer preferences and trends, informing product development strategies.",
      "Developed innovative product categories beyond traditional chappals, enhancing the craft's market potential and appeal.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-[#fbf3ea] py-16 px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin text-[#434850] tracking-tight leading-tight mb-12 font-sans">
          Experience
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-24 h-0.5 bg-[#90b4aa] mt-6 mb-12 origin-left"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border-l-2 border-[#90b4aa] pl-8 py-4"
            >
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#90b4aa]" />
                <h3 className="text-2xl font-semibold text-[#434850] mb-1">
                  {exp.company}
                </h3>
                <p className="text-[#90b4aa] mb-2">{exp.date}</p>
                <p className="text-xl text-[#434850] mb-4 font-medium">
                  {exp.title}
                </p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-[#434850] leading-relaxed list-disc ml-4"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
