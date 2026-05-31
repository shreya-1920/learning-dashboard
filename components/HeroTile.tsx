type HeroTileProps = {
  totalCourses: number;
  averageProgress: number;
};

export default function HeroTile({
  totalCourses,
  averageProgress,
}: HeroTileProps) {
  return (
    <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8">
      <h1 className="text-5xl font-bold">
        Welcome Back, Shreya 👋
      </h1>

      <p className="mt-4 text-lg text-zinc-300">
        🔥 12 Day Learning Streak
      </p>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-zinc-800/60 rounded-xl p-4 border border-zinc-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <p className="text-sm text-zinc-400">
            Total Courses
          </p>
          <h3 className="text-2xl font-bold mt-2">
            {totalCourses}
          </h3>
        </div>

        <div className="bg-zinc-800/60 rounded-xl p-4 border border-zinc-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <p className="text-sm text-zinc-400">
            Avg Progress
          </p>
          <h3 className="text-2xl font-bold mt-2">
            {averageProgress}%
          </h3>
        </div>

        <div className="bg-zinc-800/60 rounded-xl p-4 border border-zinc-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <p className="text-sm text-zinc-400">
            Current Streak
          </p>
          <h3 className="text-2xl font-bold mt-2">
            12 Days
          </h3>
        </div>
      </div>
    </section>
  );
}