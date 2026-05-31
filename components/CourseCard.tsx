"use client";

import MotionCard from "./MotionCard";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  FileCode,
  Layers,
} from "lucide-react";

type CourseProps = {
  title: string;
  progress: number;
  icon_name: string;
};

const icons = {
  BookOpen,
  Code,
  FileCode,
  Layers,
};

const cardStyles = {
  BookOpen: {
    icon: "text-blue-400",
    border: "hover:border-blue-500",
    shadow: "hover:shadow-blue-500/30",
    progress: "bg-blue-500",
    badge: "text-blue-400 bg-blue-500/10",
  },
  Code: {
    icon: "text-purple-400",
    border: "hover:border-purple-500",
    shadow: "hover:shadow-purple-500/30",
    progress: "bg-purple-500",
    badge: "text-purple-400 bg-purple-500/10",
  },
  FileCode: {
    icon: "text-cyan-400",
    border: "hover:border-cyan-500",
    shadow: "hover:shadow-cyan-500/30",
    progress: "bg-cyan-500",
    badge: "text-cyan-400 bg-cyan-500/10",
  },
  Layers: {
    icon: "text-orange-400",
    border: "hover:border-orange-500",
    shadow: "hover:shadow-orange-500/30",
    progress: "bg-orange-500",
    badge: "text-orange-400 bg-orange-500/10",
  },
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: CourseProps) {
  const Icon =
    icons[icon_name as keyof typeof icons] || BookOpen;

  const style =
    cardStyles[
      icon_name as keyof typeof cardStyles
    ] || cardStyles.BookOpen;

  return (
    <MotionCard>
      <article
        className={`
          relative
          overflow-hidden
          bg-zinc-900
          rounded-3xl
          p-6
          border
          border-zinc-800
          ${style.border}
          hover:shadow-lg
          ${style.shadow}
          transition-all
          duration-300
        `}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white via-transparent to-transparent pointer-events-none" />

        <div className="flex justify-between items-start mb-5">
          <div className="p-3 rounded-xl bg-zinc-800">
            <Icon
              size={30}
              className={style.icon}
            />
          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${style.badge}`}
          >
            Active
          </span>
        </div>

        <h3 className="font-semibold text-xl leading-snug">
          {title}
        </h3>

        <div className="mt-6">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-zinc-400">
              Progress
            </span>

            <span className="font-semibold">
              {progress}%
            </span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
            <motion.div
              className={`${style.progress} h-full rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      </article>
    </MotionCard>
  );
}