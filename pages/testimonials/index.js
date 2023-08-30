// Components
import TestimonialSlider from "../../components/TestimonialSlider";

// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0 text-[45px]"
        >
          Testimonials <span className="text-accent">.</span>
        </motion.h2>
        <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 mx-auto lg:mx-0"
            >
            “ Always give people more than what they expect to get. ”
            </motion.p>
        {/* Slider */}
        <motion.div
        variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden">
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
