export default function ResultCard({ subject, score, remark }) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h3 className="text-lg font-bold">{subject}</h3>
      <p>Score: <span className="font-semibold">{score}</span></p>
      <p className="text-gray-600">{remark}</p>
    </div>
  );
}
