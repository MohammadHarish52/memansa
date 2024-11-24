"use client";

import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-6 bg-[#fefff2] text-[#242425]">
      <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-serif text-center">About Me</h1>
        <p className="text-lg text-center">
          Hi, I'm Memansa! I'm a final year student at NIFT Mumbai, passionate
          about accessories design. I love creating unique and creative pieces,
          and I'm a big fan of cats. In my free time, I enjoy exploring new
          design trends and experimenting with different materials. My goal is
          to create designs that not only look good but also tell a story.
        </p>
        <div className="w-full aspect-square relative">
          <Image
            src="/about.png"
            alt="Memansa's Design"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
