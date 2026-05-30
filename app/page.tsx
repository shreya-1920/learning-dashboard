import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
  return (
    <div>
      <h1>Error loading courses</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

  return (
    <main>
      <h1>My Courses</h1>

      {courses?.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>Progress: {course.progress}%</p>
          <p>Icon: {course.icon_name}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}