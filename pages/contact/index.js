// Components
import Circles from "/components/Circles";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Framer
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../variants";
import { useState } from "react"; // Import useState

const Contact = () => {
  // Create state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      // Make an HTTP POST request to your Pipedream webhook URL
      const response = await fetch("https://eo2bcmpwcxokod3.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Submission successful, you can show a success message or redirect
        alert("Form submitted successfully!");
      } else {
        // Submission failed, handle the error
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-[45px]"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* Form */}
          <form
            onSubmit={handleSubmit} // Handle form submission
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={name} // Bind the input value to the state
                onChange={(e) => setName(e.target.value)} // Update the state on input change
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={email} // Bind the input value to the state
                onChange={(e) => setEmail(e.target.value)} // Update the state on input change
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              value={subject} // Bind the input value to the state
              onChange={(e) => setSubject(e.target.value)} // Update the state on input change
              required
            />
            <textarea
              placeholder="Message"
              className="textarea"
              value={message} // Bind the input value to the state
              onChange={(e) => setMessage(e.target.value)} // Update the state on input change
              required
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
