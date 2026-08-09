"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Awards from "./Awards";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { EXPERIENCES } from "../constants";

const navbarVariants = (direction: string, delay: number): Variants => ({
  hidden: { y: direction === "top" ? -100 : 100, opacity: 0 },
  visible: {
    y: 0,
    transition: { delay: delay, duration: 0.5, ease: "easeOut" as const },
    opacity: 1,
  },
});

export default function HomePageClient() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" setLoading={setLoading} />
      ) : (
        <motion.div key="home">
          <Navbar />
          <div className="pt-16 sm:pt-20" />

          <Hero />

          <motion.div
            variants={navbarVariants("bottom", 1)}
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
          >
            <div id="skills">
              <Skills />
            </div>
            <div id="experience">
              <Experience SectionTopic={EXPERIENCES} title="Experience" />
            </div>
            <div className="h-28"></div>
            <div id="awards">
              <Awards />
            </div>
            <section id="gallery">
              <Gallery />
            </section>
            <div id="contact">
              <Contact />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
