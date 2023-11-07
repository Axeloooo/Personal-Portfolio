"use client";

import React from "react";
import SectionHeader from "@/components/section-header";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        🎓 I'm a third-year Software Engineering student minoring in Aerospace
        Engineering at the University of Calgary.
      </p>

      <p className="mb-3">
        👨🏼‍💻 During summer 2023 I had the privilege of interning at Sigma as a
        Software Engineer, where I contributed to a B2B Foodservice Ecommerce
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
        UCalgary. I worked with Bandist as a Full-Stack Developer on a music
        notification app and later joined Fashion as a Backend/Algorithm
        Developer, creating an app that educates users about eco-friendly
        clothing choices.
      </p>
    </motion.section>
  );
}

export default About;
