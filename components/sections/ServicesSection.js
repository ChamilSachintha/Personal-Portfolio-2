"use client";

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-primary/30 min-h-screen py-36 flex items-center relative"
    >
      {/* Background decorative elements */}
      <Circles />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text content */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="h2 xl:mt-8 text-[45px]"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-4 max-w-[300px] mx-auto lg:mx-0"
            >
              “ When passion and skill work together, expect a masterpiece. ”
            </motion.p>
          </div>

          {/* Slider section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      {/* Bulb effect */}
      <Bulb />
    </section>
  );
};

export default ServicesSection;
