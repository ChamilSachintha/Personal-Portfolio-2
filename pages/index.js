import Image from "next/image"; // Next image
// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion"; // Framer motion
import { fadeIn } from "../variants"; // Variants

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <h1 className="h1">
            Hi, I'm Chamil Sachintha <br />{" "}
            <span className="text-accent">
              Full-Stack, Front-End & UI/UX Engineer
            </span>
          </h1>
          {/* Subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I am passionate about developing full-stack applications, front-end applications and designing UI/UX and have a good point of view on colors.
          </p>
          {/* Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div>
            <ProjectsBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
