import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
    </main>
  );
}
