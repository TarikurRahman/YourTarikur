"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const fullText = "Hey, I'm Tarikur";

const Loader = ({ setLoading }: { setLoading: (v: boolean) => void }) => {
  const count = useMotionValue(3);
  const visibleText = useTransform(count, (latest) =>
    fullText.slice(0, Math.round(latest))
  );

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      animate(count, fullText.length, {
        type: "tween",
        duration: 0.4,
        ease: "linear",
      });
    }, 1200);

    const completeTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(completeTimeout);
    };
  }, [count, setLoading]);

  return (
    <div className="flex items-center justify-center min-h-screen z-10">
      <motion.div className="flex flex-nowrap space-x-4">
        <motion.div
          layoutId="loader-greeting-avater"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="w-20 h-20 rounded-full overflow-hidden relative"
        >
          <Image
            src="/assets/avater.png"
            alt="Tarikur Rahman - Robotics & IoT Engineer Avatar"
            fill
            quality={80}
            className="object-cover"
            priority
            loading="eager"
          />
        </motion.div>
        <motion.div layoutId="loader-greeting-name" className="w-52">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: [0.6, 0.01, -0.05, 0.9],
            }}
            className="flex items-center w-fit h-20 px-6 font-semibold text-xl rounded-full border-2 border-slate-500"
            style={{
              originX: 0,
              color: "var(--text-color)",
            }}
            suppressHydrationWarning
          >
            <motion.span>{visibleText}</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
