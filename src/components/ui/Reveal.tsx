"use client";
import { ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}




