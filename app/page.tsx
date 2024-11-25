import React from "react";
import NameSection from "./components/NameSection";
import Contact from "./components/Contact";
import ProjectSection from "./components/ProjectSection";
import About from "./components/About";
import Experience from "./components/Experience";
// import ProjectCarousal from "./components/ProjectCarousal";

const page = () => {
  return (
    <div>
      <NameSection />
      <ProjectSection />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default page;
