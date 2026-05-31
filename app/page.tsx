import { supabase } from "../lib/supabase";

import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return <h1>Error loading courses</h1>;
  }

  const totalCourses = courses?.length || 0;

  const averageProgress =
    courses && courses.length > 0
      ? Math.round(
          courses.reduce(
            (sum, course) => sum + course.progress,
            0
          ) / courses.length
        )
      : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white p-6">
      <div className="grid lg:grid-cols-4 gap-6">

        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        <div className="lg:col-span-3 space-y-6">

          <HeroTile
            totalCourses={totalCourses}
            averageProgress={averageProgress}
          />

          <section className="grid md:grid-cols-2 gap-4">
            {courses?.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
                icon_name={course.icon_name}
              />
            ))}
          </section>

          <ActivityTile />

        </div>

      </div>
    </main>
  );
}