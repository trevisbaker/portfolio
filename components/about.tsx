"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      ref={ref}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for computer programming. My first place of employment was for a multinational company called Fintrac.
        I dedicated 14 years of my career (started as an IT Specialist) learning<span className="italic"> to code</span>&nbsp;&ndash;&nbsp;
        building apps for the web, desktop and mobile devices.
      </p>

      <p className="mb-3">
        My core tech-stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgresSQL
        </span>
        . I am also familiar with  <span className="font-medium">TypeScript, Java, C#, VB.NET, mySQL, SQL, no-SQL (mongoDB)</span>, and bunch of other frameworks including
        <span className="font-medium"> Angular, Vuejs, Expressjs, Tailwindcss</span>, etc. I am always looking to
        learn new technologies.
      </p>

      <p><span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem and seeing others benefiting from these applications. </p>
    </motion.section>
  );
}
