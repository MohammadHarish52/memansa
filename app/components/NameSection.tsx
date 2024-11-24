"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NameSection = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#fbf3ea]">
      {/* Left side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#434850] tracking-tight leading-tight font-['Caveat']">
            MEMANSA
            <br />
            BAJPAI
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-0.5 bg-[#90b4aa] mt-6 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8"
          >
            <span className="text-lg md:text-xl font-light text-[#90b4aa] border border-[#90b4aa] px-4 py-2">
              ACCESSORIES DESIGNER
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex justify-center items-center"
      >
        <Image
          src="/landing.png" // Replace with your image path
          alt="Memansa Bajpai"
          width={500}
          height={500}
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
};

export default NameSection;
