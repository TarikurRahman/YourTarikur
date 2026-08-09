"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const StickyAvatar = () => {
  return (
    <motion.div
      className="z-40 -ml-5 sm:-ml-9 lg:-ml-1 box-content h-6 w-6 transform rounded-full border-2 ring-2 ring-indigo-500 sticky left-0 top-1/2 lg:left-1/2"
      style={{ borderColor: "var(--bg-color-light)" }}
      initial={{ opacity: 1, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "-20% 0px -20% 0px" }}
      transition={{
        duration: 0.4,
        ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number],
      }}
    >
      <Image
        src="/assets/avater.png"
        alt="Tarikur Rahman - Robotics & IoT Engineer Avatar"
        width={24}
        height={24}
        quality={80}
        loading="lazy"
        className="h-6 w-6 rounded-full outline-purple-500"
      />
    </motion.div>
  );
};

export default StickyAvatar;
