import React from "react";
import NameSection from "./components/NameSection";
import ProjectCarousal from "./components/ProjectCarousal";

const page = () => {
  return (
    <div>
      <ProjectCarousal />
      <NameSection />
    </div>
  );
};

export default page;
