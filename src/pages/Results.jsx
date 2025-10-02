import React from 'react';
const results = [
  { subject: "Math", score: 40 },
  { subject: "English", score: 70 },
  { subject: "Physics", score: 55 }
];
export default function Results() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Subject</th>
            <th className="p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-b">
              <td className="p-2">{r.subject}</td>
              <td className={`p-2 ${r.score < 50 ? 'text-red-500' : 'text-green-600'}`}>{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
