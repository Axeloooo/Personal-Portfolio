"use client";

import React from "react";
import SectionHeader from "@/components/section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.175 }}
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        🎓 I'm a third-year Software Engineering student at the University of
        Calgary.
      </p>

      <p className="mb-3">
        👨🏼‍💻 During summer 2023 I had the privilege of interning at Sigma as a
        Software Engineer, where I contributed to a B2B Food Service E-commerce
        Platform. This experience honed my knowledge in Spring Boot, SQL, CI/CD,
        and End-to-end testing, and introduced me to SAP and Azure DevOps.
      </p>

      <p className="mb-3">
        🦖 Currently, I'm Co-VP Development for the Student Energy University of
        Calgary Chapter. I maintain our official website, interview junior
        developer candidates, and have provided consulting to the Faculty of
        Science on potential new academic programs.
      </p>

      <p className="mb-3">
        📱 Since September 2022, I've been a Software Developer with TechStart
        UCalgary. I worked with the Bandist startup as a Full-Stack Developer on
        a music notification app and later joined the ReThread startup as a Lead
        Backend Developer, creating an app educates users about eco-friendly
        clothing choices through a seamless e-commerce.
      </p>
    </motion.section>
  );
}
