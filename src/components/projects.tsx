"use client";

import React from "react";
import Project from "@/components/project";
import SectionHeader from "@/components/section-header";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
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
