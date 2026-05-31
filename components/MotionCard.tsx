"use client";

import { motion } from "framer-motion";

export default function MotionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {children}
    </motion.div>
  );
}