"use client";

import React, { useState } from "react";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiMysql,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";

// Components
import Avatar from "./../Avatar";
import Circles from "../Circles";
import ParticlesContainer from "./../ParticlesContainer";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Counter
import CountUp from "react-countup";

// ---------------------------------------
// DATA
// ---------------------------------------
export const aboutData = [
  {
    title: "work experience",
    info: [
      {
        title: "UI/UX Engineer - Axienta (Pvt) Ltd",
        stage: "NOV 2025 - Present",
      },
      {
        title: "Associate UI/UX Engineer - Axienta (Pvt) Ltd",
        stage: "NOV 2023 - NOV 2025",
      },
      {
        title: "Web Developer, UI/UX Designer & Video Editor - Freelancer",
        stage: "APR 2020 - Present",
      },
      {
        title: "Digital Media & Web Editor - Siyakma Academy",
        stage: "FEB 2023 - JAN 2024",
      },
      {
        title: "Intern Software Engineer - Fixellit (PVT) LTD",
        stage: "FEB 2023 - JUL 2023",
      },
      {
        title: "Trainee - People's Bank RHO Badulla",
        stage: "DEC 2017 - APR 2018",
      },
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
        icons: [
          <FaHtml5 key={"html5"} />,
          <FaCss3 key={"css3"} />,
          <FaJs key={"javascript"} />,
          <FaReact key={"react"} />,
          <SiNextdotjs key={"nextdotjs"} />,
          <FaWordpress key={"wordpress"} />,
        ],
      },
      {
        title: "Back-End Development",
        icons: [<FaPhp key={"php"} />, <SiMysql key={"mysql"} />],
      },
      {
        title: "UI/UX Designing",
        icons: [
          <FaFigma key={"figma"} />,
          <SiAdobephotoshop key={"photoshop"} />,
        ],
      },
      {
        title: "Video Editing",
        icons: [<SiAdobepremierepro key={"premierpro"} />],
      },
      {
        title: "Graphic Designing",
        icons: [
          <SiAdobephotoshop key={"photoshop"} />,
          <SiCanva key={"canva"} />,
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title:
          "BSc (Hons) in Computer Engineering - Faculty of Engineering, University of Jaffna",
        stage: "",
      },
      {
        title: "G.C.E Advance Level Examination (2017)",
        stage: "2As, 1B",
      },
      {
        title: "G.C.E Ordinary Level Examination (2012)",
        stage: "7As, 2Bs",
      },
    ],
  },
];

// ---------------------------------------
// COMPONENT
// ---------------------------------------

const AboutSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <section
      id="about"
      className="h-full bg-primary/30 py-32 text-center xl:text-left lg:overflow-hidden lg:h-screen mx-auto overflow-hidden"
    >
      <Circles />

      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        {/* ---------- LEFT TEXT SIDE ---------- */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 lg:text-[45px] text-[32px]"
          >
            I&apos;m not perfect but I&apos;m a{" "}
            <span className="text-accent">Limited Edition</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m Chamil, currently working as a UI/UX Engineer, while also
            freelancing as a Web Developer, UI/UX Designer, Video Editor, and
            Graphic Designer. I hold a BSc (Hons) degree in Computer
            Engineering. As a passionate UI/UX enthusiast, I love developing
            front-end applications and designing intuitive, aesthetic interfaces
            with a keen eye for colors and visual balance. Through freelancing,
            I've worked with clients worldwide — including the US, UK, Brazil,
            Australia, Hong Kong, and Japan.
          </motion.p>

          {/* ---------- COUNTERS ---------- */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* Satisfied clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------- RIGHT INFO TABS ---------- */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[530px] px-[20px] md:px-0"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative 
                  after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start text-left">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-start text-white/60"
              >
                <div className="text-sm font-light mb-1 md:mb-0">
                  {item.title}
                </div>

                {item.stage && <div className="text-xs hidden md:flex">:</div>}
                <div className="text-xs">{item.stage}</div>

                {/* Skill Icons */}
                <div className="flex gap-x-4 mt-2 md:mt-0">
                  {item.icons?.map((icon, i) => (
                    <div key={i} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
