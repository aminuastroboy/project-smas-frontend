import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/exams" className="hover:text-gray-300">Exams</Link>
        <Link to="/reports" className="hover:text-gray-300">Reports</Link>
        <Link to="/settings" className="hover:text-gray-300">Settings</Link>
      </nav>
    </aside>
  );
}
