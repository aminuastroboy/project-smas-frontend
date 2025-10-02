import React from 'react';
const students = [
  { id: 1, name: "Amina Yusuf", class: "SS2", guardian: "amina.parent@email.com" },
  { id: 2, name: "John Doe", class: "SS1", guardian: "john.parent@email.com" }
];
export default function Students() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Class</th>
            <th className="p-2">Guardian</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} className="border-b">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.class}</td>
              <td className="p-2">{s.guardian}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
