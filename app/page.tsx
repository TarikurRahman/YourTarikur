"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { EXPERIENCES } from "./constants";

const navbarVariants = (direction: string, delay: number): Variants => ({
  hidden: { y: direction === "top" ? -100 : 100, opacity: 0 },
  visible: {
    y: 0,
    transition: { delay: delay, duration: 0.5, ease: "easeOut" as const },
    opacity: 1,
  },
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" setLoading={setLoading} />
      ) : (
        <motion.div key="home">
          <Navbar />
          <div className="pt-16 sm:pt-20" />

          <nav aria-label="Main navigation" className="sr-only">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/projects/PHOENIX-F1">PHOENIX-F1</a></li>
              <li><a href="/projects/PHANTOM-X">PHANTOM-X</a></li>
              <li><a href="/#awards">Awards</a></li>
              <li><a href="/#gallery">Gallery</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </nav>

          <Hero />

          <motion.div
            variants={navbarVariants("bottom", 1)}
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
          >
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience SectionTopic={EXPERIENCES} title="Experience" /></section>
            <div className="h-28"></div>
            <section id="awards"><Awards /></section>
            <section id="gallery"><Gallery /></section>
            <section id="contact"><Contact /></section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
