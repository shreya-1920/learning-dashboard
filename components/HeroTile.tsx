"use client";

import { motion } from "framer-motion";

type HeroTileProps = {
  totalCourses: number;
  averageProgress: number;
};

export default function HeroTile({
  totalCourses,
  averageProgress,
}: HeroTileProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-900/20 via-zinc-900 to-purple-900/20 rounded-3xl p-6 md:p-8 border border-zinc-800 overflow-hidden"
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Welcome Back,
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}Shreya
          </span>
        </h1>

        <motion.span
          animate={{ rotate: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-3xl md:text-5xl"
        >
          👋
        </motion.span>
      </div>

      <p className="mt-4 text-base md:text-lg text-zinc-300 flex items-center gap-2">
        🔥 12 Day Learning Streak
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        <motion.div
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <p className="text-sm text-zinc-400">
            Total Courses
          </p>

          <h3 className="text-3xl font-bold mt-2 text-blue-400">
            {totalCourses}
          </h3>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
        >
          <p className="text-sm text-zinc-400">
            Avg Progress
          </p>

          <h3 className="text-3xl font-bold mt-2 text-purple-400">
            {averageProgress}%
          </h3>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
        >
          <p className="text-sm text-zinc-400">
            Current Streak
          </p>

          <h3 className="text-3xl font-bold mt-2 text-orange-400">
            12 Days
          </h3>
        </motion.div>

      </div>
    </motion.section>
  );
}