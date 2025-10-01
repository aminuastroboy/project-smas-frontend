import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exams from "./pages/Exams";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
