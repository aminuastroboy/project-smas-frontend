import React from 'react';
export default function Navbar(){ return (
  <nav className="bg-white border-b p-4 flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <div className="font-bold text-lg">School ERP</div>
      <div className="text-sm text-gray-500">Demo</div>
    </div>
    <div className="flex items-center space-x-3">
      <button className="text-sm text-gray-700">Profile</button>
      <button className="text-sm text-gray-700">Logout</button>
    </div>
  </nav>
)}
