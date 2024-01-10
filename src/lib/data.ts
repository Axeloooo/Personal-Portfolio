import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
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
    title: "Lotion Plus",
    description:
      "Full stack serverless web application for simple note taking.",
    tags: ["Terraform", "Lambda", "DynamoDB", "Python", "React", "Javascript"],
    imageUrl: "/lotion.png",
    githubUrl: "https://github.com/Axeloooo/Lotion-Plus",
  },
  {
    title: "The Last Show",
    description:
      "Full stack serverless web application that creates imaginative obituaries for fictional characters.",
    tags: ["Terraform", "Lambda", "DynamoDB", "Python", "React", "Javascript"],
    imageUrl: "/last-show.png",
    githubUrl: "https://github.com/Axeloooo/The-Last-Show",
  },
  {
    title: "Bandist",
    description:
      "Full stack cross-platform application for finding and booking local concerts for your favorite bands.",
    tags: ["Flutter", "Dart", "Sqlite", "Django", "Python"],
    imageUrl: "/band.png",
    githubUrl: "https://github.com/techstartucalgary/Bandist",
  },
  {
    title: "SEUC Website",
    description:
      "The official website for the Student Energy University of Calgary Chapter.",
    tags: ["Vite", "React", "Typescript", "Framer Motion"],
    imageUrl: "/seuc-website.png",
    githubUrl: "https://github.com/studentenergyuofc/seucalgary-website",
  },
  {
    title: "Game Heaven",
    description:
      "Full stack web application for finding and buying the most popular video games.",
    tags: ["Express", "MongoDB", "Vite", "React", "Tailwind", "Typescript"],
    imageUrl: "/game.png",
    githubUrl: "https://github.com/Axeloooo/Ecommerce-API",
  },
  {
    title: "Airline Reservation Web Application",
    description:
      "Full stack web application for booking flights and managing reservations.",
    tags: ["Spring Boot", "MySQL", "Java", "React", "Javascript"],
    imageUrl: "/airline.png",
    githubUrl: "https://github.com/TheKenDoll/480TermProject",
  },
  {
    title: "LibCode",
    description:
      "A comprehensive library encompassing a wide range of essential data structures, designed to serve as a reusable and versatile package.",
    tags: ["PyPi", "Python", "PyTest"],
    imageUrl: "/libcode.png",
    githubUrl: "https://github.com/Axeloooo/LibCode",
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
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "C",
  "C++",
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
    title: "VP Development - Student Energy UCalgary",
    location: "Calgary, AB",
    description:
      "Full stack development for a non-profit organization. Developing and maintaining the organization's website and internal tools.",
    icon: React.createElement(FaCode),
    date: "Sept 2023 - Present",
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
