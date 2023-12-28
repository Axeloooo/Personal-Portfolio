"use client";

import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:axelshz@gmail.com">
          axelshz@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          maxLength={500}
          className="border-black/10 rounded-lg h-14 border px-4"
        ></input>
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg p-4 border border-black/10"
          maxLength={5000}
          required
        ></textarea>
        <button
          type="submit"
          placeholder="Your message"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white transition-all outline-none rounded-full focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="transition-all text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
