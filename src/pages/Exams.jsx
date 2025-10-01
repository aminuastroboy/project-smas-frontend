import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ResultCard from "../components/ResultCard";
import api from "../api";

export default function Exams() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await api.get("/exams/results/");
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching results:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (loading) return <p className="p-6">Loading exam results...</p>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((r, i) => (
            <ResultCard key={i} subject={r.subject} score={r.score} remark={r.remark} />
          ))}
        </main>
      </div>
    </div>
  );
}
