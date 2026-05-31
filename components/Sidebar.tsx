import {
  LayoutDashboard,
  BookOpen,
  Activity,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block bg-zinc-900 rounded-2xl p-6 sticky top-6 h-[85vh] border border-zinc-800">

        <div className="mb-10">
          <h2 className="text-4xl font-black tracking-tight">
            <span className="text-white">Edu</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Dash
            </span>
          </h2>

          <p className="text-zinc-500 text-sm mt-1">
            Learning Dashboard
          </p>
        </div>

        <ul className="space-y-4">

          <li className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 cursor-pointer">
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

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800">
        <ul className="flex justify-around items-center py-3">

          <li className="flex flex-col items-center text-blue-400">
            <LayoutDashboard size={20} />
            <span className="text-xs mt-1">Home</span>
          </li>

          <li className="flex flex-col items-center text-zinc-400">
            <BookOpen size={20} />
            <span className="text-xs mt-1">Courses</span>
          </li>

          <li className="flex flex-col items-center text-zinc-400">
            <Activity size={20} />
            <span className="text-xs mt-1">Activity</span>
          </li>

          <li className="flex flex-col items-center text-zinc-400">
            <Settings size={20} />
            <span className="text-xs mt-1">Settings</span>
          </li>

        </ul>
      </nav>
    </>
  );
}