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

export default function CourseCard({
  title,
  progress,
  icon_name,
}: CourseProps) {
  const Icon =
    icons[icon_name as keyof typeof icons] || BookOpen;

  return (
    <MotionCard>
      <article className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
        
        <div className="mb-4">
          <Icon size={30} />
        </div>

        <h3 className="font-semibold text-xl">
          {title}
        </h3>

        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-blue-500 h-full rounded-full"
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