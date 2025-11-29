"use client";

import { useState } from "react";

// Components
import Circles from "../Circles";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ContactSection = () => {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch("https://eo2bcmpwcxokod3.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");

        // Clear fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-primary/30 flex items-center"
    >
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative">
        {/* Background Circles */}
        {/* <Circles /> */}

        {/* Content */}
        <div className="flex flex-col w-full max-w-[700px] relative z-10">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="h2 text-center mb-12 text-[45px]"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6 w-full mx-auto"
          >
            {/* Name + Email */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            {/* Message */}
            <textarea
              placeholder="Message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            {/* Button */}
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
