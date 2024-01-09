import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Notion Plus",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["AWS", "Terraform", "Python", "React", "Javascript"],
    imageUrl: "/axel.webp",
  },
  {
    title: "Game Heaven",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Express", "MongoDB", "Vite", "React", "Tailwind", "Javascript"],
    imageUrl: "/game-heaven.webp",
  },
  {
    title: "Bandist",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Flutter", "Dart", "Sqlite", "Django", "Python"],
    imageUrl: "/bandist.webp",
  },
  {
    title: "The Last Show",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["AWS", "Terraform", "Python", "React", "Javascript"],
    imageUrl: "/axel.png",
  },
] as const;

export const skillsData = [
  "AWS",
  "Terraform",
  "Docker",
  "Flutter",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Spring Boot",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "C/C++",
  "Dart",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "Tailwind",
  "CSS",
  "HTML",
  "Figma",
  "Linux",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "Software Engineering - University of Calgary",
    location: "Calgary, AB",
    description:
      "3.2/4.0 GPA. Relevant courses: Full-Stack Web Development, Data Structures and Algorithms, Machine Learning, Databases, Operating Systems, Networked Systems and more.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2021 - Present",
  },
  {
    title: "Frontend Developer - Relectric Car Team",
    location: "Calgary, AB",
    description:
      "Electrifying a 1966 Volvo P220. Creating the car's dashboard control system.",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - Dec 2022",
  },
  {
    title: "Frontend Developer - Techstart UCalgary",
    location: "Calgary, AB",
    description:
      "Building a cross-platform mobile app for a concert ticket and accommodation startup. Working on an agile team of 6 developers.",
    icon: React.createElement(RiFlutterFill),
    date: "Oct 2022 - April 2023",
  },
  {
    title: "Software Developer Intern - Sigma",
    location: "Remote",
    description:
      "Full stack development for a multinational company. Maintaining and developing new features for the company's e-commerce platform.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Sept 2023",
  },
  {
    title: "Lead Backend Developer - Techstart UCalgary",
    location: "Calgary, AB",
    description:
      "Developing an e-commerce mobile app for an eco-friendly clothing startup. Leading an agile team of 3 developers.",
    icon: React.createElement(FaNodeJs),
    date: "Oct 2023 - Present",
  },
] as const;
