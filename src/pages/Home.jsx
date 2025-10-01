import { Link } from 'react-router-dom';
export default function Home(){ return (
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-2xl w-full p-6 bg-white rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-2">School ERP Demo</h1>
      <p className="mb-4">A simple demo showing exams, students and guardian reports.</p>
      <div className="space-x-3"><Link to="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded">Go to Dashboard</Link></div>
    </div>
  </div>
)}
