"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import ProjectSlider from "../WorkSlider";
import Bulb from "../Bulb";
import Circles from "../Circles";

import { RxLayout, RxLayers, RxMix } from "react-icons/rx";

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("front-end");

  return (
    <section
      id="work"
      className="bg-primary/30 min-h-screen py-36 flex items-center relative overflow-hidden"
    >
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">

          {/* ---------- LEFT TEXT ---------- */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-10 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="h2 text-[45px]"
            >
              My Projects <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6 max-w-[300px] mx-auto lg:mx-0"
            >
              “ Every project is an opportunity to learn, figure out problems
              and challenges, and invent and reinvent. ”
            </motion.p>
          </div>

          {/* ---------- RIGHT SLIDER + TABS ---------- */}
          <motion.div
            variants={fadeIn("up", 0.45)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full xl:max-w-[65%]"
          >
            {/* Tabs */}
            <div className="flex justify-center space-x-10 w-full py-5">
              <button
                onClick={() => setActiveTab("front-end")}
                className={`flex items-center gap-x-2 tab-btn ${
                  activeTab === "front-end"
                    ? "text-accent font-semibold"
                    : "text-white/60"
                }`}
              >
                <RxLayout />
                Front-End
              </button>

              <button
                onClick={() => setActiveTab("UI/UX")}
                className={`flex items-center gap-x-2 tab-btn ${
                  activeTab === "UI/UX"
                    ? "text-accent font-semibold"
                    : "text-white/60"
                }`}
              >
                <RxMix />
                UI / UX
              </button>

              <button
                onClick={() => setActiveTab("full-stack")}
                className={`flex items-center gap-x-2 tab-btn ${
                  activeTab === "full-stack"
                    ? "text-accent font-semibold"
                    : "text-white/60"
                }`}
              >
                <RxLayers />
                Full-Stack
              </button>
            </div>

            {/* Slider */}
            <ProjectSlider activeTab={activeTab} />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </section>
  );
};

export default WorkSection;
