"use client";

import { motion } from "framer-motion";

export default function MotionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}