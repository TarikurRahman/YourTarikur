"use client";

import React, { useState, useContext, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AWARDS } from "../constants";
import CustomSection from "./custom/CustomSection";
import { ThemeContext } from "../context/ThemeContext";

const AwardCard = ({
  award,
  index,
  category,
  expandedCard,
  handleCardClick,
  darkMode,
}: {
  award: {
    year: string;
    position: string;
    event: string;
    description: string;
    link: string;
    logo?: string;
    logoDark?: string;
    logoSecondary?: string;
    logos?: string[];
  };
  index: number;
  category: string;
  expandedCard: string | null;
  handleCardClick: (id: string) => void;
  darkMode: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  // Enhanced color logic tailored for Gold Medals, 1st Places, and Special positions
  let hoverBgColor = "";
  let hoverBorderColor = "";
  let lightGlowColor = "";
  let activeBg = "";
  let activeText = "";
  let activeBorder = "";

  const isGoldOrFirst = 
    award.position.includes("Gold Medalist") || 
    award.position.includes("1st Place") || 
    award.position === "Champion";

  const isSilverOrSecond = 
    award.position.includes("2nd Place") || 
    award.position === "1st Runner Up";

  if (category === "International" || isGoldOrFirst) {
    hoverBgColor = "hover:bg-[#F6B443] hover:text-[#000000]"; // Elite Gold Accent
    hoverBorderColor = "hover:border-[#FACC15]";
    lightGlowColor = "rgba(246, 180, 67, 0.2)";
    activeBg = "#F6B443";
    activeText = "#000000";
    activeBorder = "#FACC15";
  } else if (isSilverOrSecond) {
    hoverBgColor = "hover:bg-[#C0C0C0] hover:text-[#000000]"; // Silver Accent
    hoverBorderColor = "hover:border-[#E2E8F0]";
    lightGlowColor = "rgba(192, 192, 192, 0.2)";
    activeBg = "#C0C0C0";
    activeText = "#000000";
    activeBorder = "#E2E8F0";
  } else if (award.position.includes("5th Place") || award.position === "2nd Runner Up") {
    hoverBgColor = "hover:bg-[#B87332] hover:text-[#FFFFFF]"; // Bronze / Special Distinctions
    hoverBorderColor = "hover:border-[#FFB86C]";
    lightGlowColor = "rgba(184, 115, 50, 0.2)";
    activeBg = "#B87332";
    activeText = "#FFFFFF";
    activeBorder = "#FFB86C";
  } else {
    // Default fallback for Finalists or general events
    hoverBgColor = "hover:bg-purple-600 hover:text-white";
    hoverBorderColor = "hover:border-purple-400";
    lightGlowColor = "rgba(147, 51, 234, 0.15)";
    activeBg = "#9333EA";
    activeText = "#FFFFFF";
    activeBorder = "#A855F7";
  }

  const gradientColor = darkMode
    ? "rgba(255,255,255,0.2)"
    : lightGlowColor || "rgba(59, 130, 246, 0.15)";
  const bgClass = darkMode ? hoverBgColor : "";

  const isExpanded = expandedCard === `${category}-${index}`;

  const activeStyle: React.CSSProperties =
    isExpanded && darkMode
      ? {
          backgroundColor: activeBg,
          color: activeText,
          borderColor: activeBorder || undefined,
        }
      : {};

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group/card relative overflow-hidden transition-colors duration-300 ${bgClass} ${hoverBorderColor} h-fit border border-slate-500 rounded-xl backdrop-blur-sm w-full max-w-sm p-4 flex flex-col items-center cursor-pointer lg:cursor-auto`}
      style={activeStyle}
      onClick={() => handleCardClick(`${category}-${index}`)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${gradientColor}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex items-center gap-2">
          {!darkMode && award.logoDark ? (
            <Image src={award.logoDark} alt={`${award.event} logo`} width={80} height={80} className="h-20 w-auto" />
          ) : (
            <>
              {award.logo && (
                <Image src={award.logo} alt={`${award.event} logo`} width={80} height={80} className="h-20 w-auto" />
              )}
              {award.logos &&
                award.logos.map((imgLogo, idx) => (
                  <Image
                    key={idx}
                    src={imgLogo}
                    alt={`${award.event} logo ${idx + 1}`}
                    width={80}
                    height={80}
                    className="h-20 w-auto"
                  />
                ))}
            </>
          )}
        </div>
        {award.logoSecondary && (
          <Image src={award.logoSecondary} alt={`${award.event} secondary logo`} width={48} height={48} className="h-12 w-auto" />
        )}
        <h3 className="text-xl text-center font-semibold mt-2">
          {award.position} - {award.event}
        </h3>

        <div className="hidden lg:block text-center text-sm mt-2">
          <p>{award.description}</p>
          {award.link && award.link !== "#" && (
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 block"
            >
              See more
            </a>
          )}
        </div>

        <AnimatePresence>
          {expandedCard === `${category}-${index}` && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden text-center text-sm mt-2 overflow-hidden"
            >
              <p>{award.description}</p>
              {award.link && award.link !== "#" && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-2 block"
                >
                  See more
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Awards = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const { darkMode } = useContext(ThemeContext);

  const handleCardClick = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <CustomSection className="overflow-x-hidden min-h-150">
      <h2 className="mt-20 mb-2 text-center font-semibold text-3xl">Awards</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="mb-10 h-0.5 bg-purple-500 w-28 mx-auto"
      ></motion.div>

      {Object.keys(AWARDS).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="mt-10 mb-6 text-center font-semibold text-2xl text-purple-400">
            {category.split(",").join(" / ")} Achievements
          </h2>
          <div className="flex justify-center flex-wrap gap-5 px-4">
            {AWARDS[category].map((award, index) => (
              <AwardCard
                key={index}
                award={award}
                index={index}
                category={category}
                expandedCard={expandedCard}
                handleCardClick={handleCardClick}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      ))}
    </CustomSection>
  );
};

export default Awards;