"use client";

import { HERO_CONTENT, CONTACT } from "../constants";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect, useContext } from "react";
import HeroCarousel from "./custom/HeroCarousel";
import CustomSection from "./custom/CustomSection";
import { ThemeContext } from "../context/ThemeContext";

const revealVariants = (direction: string, delay: number) => ({
  hidden: {
    x: direction === "left" ? 100 : -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    transition: { delay: delay, duration: 0.5 },
    opacity: 1,
  },
});

const avaterPopVariants = (delay: number) => ({
  hidden: {
    scale: 0,
    transition: {
      delay: delay,
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number],
    },
  },
  visible: {
    scale: 1,
    transition: {
      delay: delay,
      duration: 0.4,
      ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number],
    },
  },
});

const Hero = () => {
  const nameRef = useRef(null);
  const [avaterInView, setAvaterInView] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  const { scrollYProgress } = useScroll({
    target: nameRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const latest = scrollYProgress.get();
      setAvaterInView(latest > 0 && latest < 1);
    };

    const unsubscribe = scrollYProgress.on("change", handleScroll);

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <CustomSection className="overflow-x-hidden">
      <div ref={nameRef} className="h-4"></div>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Greeting section */}
            <div className="flex mb-6 w-full lg:w-fit">
              <motion.div
                layoutId="loader-greeting-avater"
                variants={avaterPopVariants(avaterInView ? 0 : 0.4)}
                initial="visible"
                animate={avaterInView ? "visible" : "hidden"}
                className="w-14 h-14 md:w-20 md:h-20 mr-4 rounded-full overflow-hidden relative"
              >
                <Image
                  src="/assets/avater2.png"
                  alt="Tarikur Rahman - Robotics & IoT Engineer Avatar"
                  fill
                  quality={80}
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </motion.div>
              <motion.div
                layoutId="loader-greeting-name"
                variants={avaterPopVariants(avaterInView ? 0.4 : 0)}
                initial="visible"
                animate={avaterInView ? "visible" : "hidden"}
                style={{
                  originX: 0,
                }}
                className="w-52"
              >
                <h1 className="flex items-center w-fit h-14 md:h-20 px-6 font-semibold text-xl rounded-full border-2 border-slate-500">
                  Hey, I&apos;m Tarikur
                </h1>
              </motion.div>
            </div>
            <motion.div
              variants={revealVariants("right", 0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-col w-full"
            >
              <span
                className={`bg-gradient-to-r bg-clip-text text-5xl tracking-tight text-transparent font-semibold pb-6 ${
                  darkMode
                    ? "from-pink-300 to-purple-500"
                    : "from-[#130a7b] to-[#6f1683]"
                }`}
              >
                Robotics Inventor <br /> & Tech Researcher{" "}
              </span>
              <p className="my-2 max-w-xl pb-4 xl:text-lg">{HERO_CONTENT}</p>
              
              {/* Social Links Section */}
              <div className="flex gap-3 pb-2">
                {/* Facebook Link */}
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    darkMode
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                  }`}
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    darkMode
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                  }`}
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                {/* GitHub Link */}
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    darkMode
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                  }`}
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 overflow-hidden">
          <motion.div
            variants={revealVariants("left", 1.2)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Hero;