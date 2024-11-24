"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ProjectCarousal = () => {
  return (
    <div className="w-full h-screen bg-[#fefff2] text-black ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showIndicators={false}
        className="h-full"
      >
        <div className="relative h-screen">
          <Image
            src="/image1.png"
            alt="Project 1"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-screen">
          <Image
            src="/image2.png"
            alt="Project 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-screen">
          <Image
            src="/image3.png"
            alt="Project 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-screen">
          <Image
            src="/image4.png"
            alt="Project 4"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-screen">
          <Image
            src="/image5.png"
            alt="Project 5"
            fill
            className="object-cover"
          />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default ProjectCarousal;
