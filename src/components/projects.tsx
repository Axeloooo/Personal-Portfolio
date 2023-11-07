import React from "react";
import Project from "@/components/project";
import SectionHeader from "@/components/section-header";
import { projectsData } from "@/lib/data";

function Projects() {
  return (
    <section>
      <SectionHeader>My projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}></Project>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
