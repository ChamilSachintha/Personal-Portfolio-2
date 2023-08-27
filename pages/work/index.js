// Components
import ProjectSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Project = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12 text-[45px]"
            >
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[300px] mx-auto lg:mx-0"
            >
              “ Every project is an opportunity to learn, figure out problems
              and challenges, and invent and reinvent. ”
            </motion.p>
          </div>
          {/* Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Project;
