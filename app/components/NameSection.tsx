"use client";

import React from "react";
import { motion } from "framer-motion";

const NameSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#fefff2]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -right-8 top-0 w-16 h-12 border-t-2 border-r-2 border-black"
        />
        <h1 className="text-5xl md:text-7xl font-medium text-black mb-4 font-['Caveat']">
          Memansa
          <br />
          <span className="ml-16">Bajpai</span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-24 h-0.5 bg-black mx-auto mt-4 origin-left"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <span className="text-lg md:text-xl font-light text-black border border-black px-4 py-2">
            Accessories Designer
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NameSection;
