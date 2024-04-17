"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Trevis portrait"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              height="192"
              priority
              quality="95"
              src="/me.jpg"
              width="192"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
      >
        <span className="font-bold">Hello, I&apos;m Trevis.</span> I am a{" "}
        <span className="font-bold">full-stack software developer</span> with{" "}
        <span className="font-bold">{new Date().getFullYear() - 2008 -1 } years</span> of experience.
      </motion.h1>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          download
          href="/CV.pdf"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/tnbaker/"
          rel="noopener" target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/trevisbaker"
          rel="noopener" target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
