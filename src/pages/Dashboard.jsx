import React from 'react';
export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Total Students: 120</div>
        <div className="bg-white p-4 rounded shadow">Exams Conducted: 15</div>
        <div className="bg-white p-4 rounded shadow">Average Performance: 68%</div>
      </div>
    </div>
  );
}
