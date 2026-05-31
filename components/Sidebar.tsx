import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="bg-zinc-900 rounded-2xl p-6 sticky top-6 h-[85vh]">
      <h2 className="text-3xl font-bold mb-8">
        EduDash
      </h2>

      <ul className="space-y-4">
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 hover:text-blue-400 cursor-pointer transition-all duration-300">
          <LayoutDashboard size={18} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 hover:text-blue-400 cursor-pointer transition-all duration-300">
          <BookOpen size={18} />
          Courses
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 hover:text-blue-400 cursor-pointer transition-all duration-300">
          <Activity size={18} />
          Activity
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 hover:text-blue-400 cursor-pointer transition-all duration-300">
          <Settings size={18} />
          Settings
        </li>
      </ul>
    </nav>
  );
}