"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const activity = [
    { day: "Mon", value: 60 },
    { day: "Tue", value: 85 },
    { day: "Wed", value: 40 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 70 },
  ];

  const average = Math.round(
    activity.reduce((sum, item) => sum + item.value, 0) /
      activity.length
  );

  const bestDay = activity.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-bold text-3xl">
            Weekly Activity
          </h2>

          <p className="text-zinc-400 text-sm mt-1">
            Learning consistency over the last 5 days
          </p>
        </div>

        <span className="text-sm text-zinc-400 hidden md:block">
          Last 5 Days
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all"
        >
          <p className="text-sm text-zinc-400">
            Best Day
          </p>

          <h3 className="text-2xl font-bold mt-2 text-green-400">
            {bestDay.day}
          </h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
        >
          <p className="text-sm text-zinc-400">
            Average Activity
          </p>

          <h3 className="text-2xl font-bold mt-2 text-blue-400">
            {average}%
          </h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
        >
          <p className="text-sm text-zinc-400">
            Weekly Goal
          </p>

          <h3 className="text-2xl font-bold mt-2 text-purple-400">
            Achieved 🎯
          </h3>
        </motion.div>

      </div>

      <div className="space-y-4">
        {activity.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg">
                {item.day}
              </span>

              <span className="text-green-400 font-semibold">
                {item.value}%
              </span>
            </div>

            <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{
                  width: `${item.value}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}