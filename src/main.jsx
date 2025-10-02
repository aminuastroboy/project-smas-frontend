import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Exams from './pages/Exams';
import Results from './pages/Results';
import Reports from './pages/Reports';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <div className="flex">
        <aside className="w-64 h-screen bg-blue-900 text-white p-4">
          <h1 className="text-xl font-bold mb-6">School SMS</h1>
          <nav className="space-y-2">
            <Link className="block hover:bg-blue-700 p-2 rounded" to="/">Dashboard</Link>
            <Link className="block hover:bg-blue-700 p-2 rounded" to="/students">Students</Link>
            <Link className="block hover:bg-blue-700 p-2 rounded" to="/exams">Exams</Link>
            <Link className="block hover:bg-blue-700 p-2 rounded" to="/results">Results</Link>
            <Link className="block hover:bg-blue-700 p-2 rounded" to="/reports">Reports</Link>
            <Link className="block hover:bg-blue-700 p-2 rounded" to="/career">Career</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/results" element={<Results />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
