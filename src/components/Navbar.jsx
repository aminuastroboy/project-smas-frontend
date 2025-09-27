import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold">SchoolERP</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-sm">Dashboard</Link>
          <Link to="/exams" className="text-sm">Exams</Link>
          <Link to="/results" className="text-sm">Results</Link>
          <Link to="/reports" className="text-sm">Reports</Link>
          <Link to="/login" className="text-sm text-blue-600">Login</Link>
        </div>
      </div>
    </nav>
  )
}
