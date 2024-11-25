"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#fbf3ea]">
      {/* Left side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-[#434850] tracking-tight leading-tight mb-8 font-sans">
            ABOUT ME
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-0.5 bg-[#90b4aa] mt-6 mb-8 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-lg text-[#434850] leading-relaxed">
              I'm a student at NIFT Mumbai majoring in Accessory Design. I'm
              innovative and trend-conscious, with a knack for producing
              impactful designs. Skilled in effective communication and
              negotiation, adept at receiving feedback gracefully.
            </p>
            <p className="text-lg text-[#434850] leading-relaxed mt-4">
              Proficient in analyzing diverse methods, techniques, and materials
              to optimize design outcomes. Collaborative approach that pushes
              boundaries and defies conventions to deliver visually
              sophisticated designs aligned with project requirements.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Responsive Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full md:w-1/2 flex justify-center items-center bg-[#fbf3ea] py-16"
      >
        <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[90vh]">
          <Image
            src="/about.jpg" // Replace with your image path
            alt="Memansa's Design"
            layout="fill" // Allow the image to fully fill its container
            objectFit="contain" // Ensure the image scales without cropping
            className="rounded-lg"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
