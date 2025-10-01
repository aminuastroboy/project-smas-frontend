import { NavLink } from 'react-router-dom';
export default function Sidebar(){ const base = 'flex flex-col p-4 space-y-2 text-gray-700'; return (
  <aside className="w-64 bg-gray-50 border-r">
    <div className="p-4 font-bold">Menu</div>
    <nav className="p-4 space-y-2">
      <NavLink className={base} to="/dashboard">Dashboard</NavLink>
      <NavLink className={base} to="/students">Students</NavLink>
      <NavLink className={base} to="/exams">Exams</NavLink>
      <NavLink className={base} to="/reports">Reports</NavLink>
      <NavLink className={base} to="/settings">Settings</NavLink>
    </nav>
  </aside>
)}
