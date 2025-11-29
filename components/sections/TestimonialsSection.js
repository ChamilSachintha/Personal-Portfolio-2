"use client";

import TestimonialSlider from "../../components/TestimonialSlider";

// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="bg-primary/30 min-h-screen py-32 text-center flex items-center"
    >
      <div className="container mx-auto flex flex-col justify-center">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="h2 mb-6 text-[45px]"
        >
          Testimonials <span className="text-accent">.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 max-w-[480px] mx-auto"
        >
          “ Always give people more than what they expect to get. ”
        </motion.p>

        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.45)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
