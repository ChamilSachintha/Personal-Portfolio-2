"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import ProjectSlider from "../WorkSlider";
import Bulb from "../Bulb";
import Circles from "../Circles";

import { RxLayout, RxLayers, RxMix } from "react-icons/rx";

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("UI/UX");

  return (
    <section
      id="work"
      className="bg-primary/30 min-h-screen py-36 flex items-center relative overflow-hidden"
    >
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* ---------- TITLE ---------- */}
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
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20 text-white/70"
          >
            “ Every project is an opportunity to learn, figure out problems and
            challenges, and invent and reinvent. ”
          </motion.p>

          {/* ---------- TABS ---------- */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex justify-center mb-8 space-x-10"
          >
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
              onClick={() => setActiveTab("graphic-design")}
              className={`flex items-center gap-x-2 tab-btn ${
                activeTab === "graphic-design"
                  ? "text-accent font-semibold"
                  : "text-white/60"
              }`}
            >
              <RxLayers />
              Graphic Design
            </button>
          </motion.div>

          {/* ---------- SLIDER ---------- */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-[900px]"
          >
            <ProjectSlider activeTab={activeTab} />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </section>
  );
};

export default WorkSection;
