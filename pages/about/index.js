import React, { useState } from "react";
//  Icons
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
  SiAdobexd,
  SiAdobephotoshop,
  SiMysql,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";
// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// Counter
import CountUp from "react-countup";
// ParticlesContainer
import ParticlesContainer from "../../components/ParticlesContainer";

//  Data
export const aboutData = [
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
        icons: [<FaFigma key={"figma"} />, <SiAdobephotoshop key={"photoshop"} />],
      },
      {
        title: "Video Editing",
        icons: [<SiAdobepremierepro key={"premierpro"} />],
      },
      {
        title: "Graphic Designing",
        icons: [<SiAdobephotoshop key={"photoshop"} />, <SiCanva key={"canva"} />],
      },
    ],
  },
  {
    title: "work experience",
    info: [
      {
        title: "Web Editor (Part time) - Siyakma Academy",
        stage: "FEB 2023 - Present",
      },
      {
        title: "Intern Software Engineer - Fixellit (PVT) LTD",
        stage: "FEB 2023 - JUL 2023",
      },
      {
        title: "Video Editor - Fiverr (Freelance)",
        stage: "APR 2020 - APR 2021",
      },
      {
        title: "Trainee - People's Bank RHO Badulla",
        stage: "DEC 2017 - APR 2018",
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

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/32 py-32 text-center xl:text-left lg:overflow-hidden lg:h-screen mx-auto overflow-hidden">
      <Circles />
      {/* Particles */}
      {/* <ParticlesContainer /> */}
      {/* Avatar image */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
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
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-[14px]"
          >
            I&apos;m Chamil, a tech enthusiast whose journey began three years
            ago when I dived into freelancing as a video editor while
            simultaneously pursuing a Computer Engineering degree. I had the
            privilege of collaborating with clients worldwide, from the US, UK,
            Brazil, Australia, Hong Kong, and Japan. <br /> I&apos;m now deeply
            immersed in the IT field, having completed a rewarding 6-month
            software engineering internship at Fixellit (PVT) LTD and currently
            working part-time as a Web Editor at Siyakma Academy. Passionate
            about crafting seamless user experiences, I&apos;m actively seeking
            job opportunities in Full-stack, Front-end, and UI/UX Engineering to
            continue my journey of innovation and growth.
          </motion.p>
          {/* Counters */}
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
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[530px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* Title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* Icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
