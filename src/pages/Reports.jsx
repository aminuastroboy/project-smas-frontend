import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../api";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await api.get("/exams/reports/");
        setReports(res.data);
      } catch (err) {
        console.error("Error fetching reports:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  if (loading) return <p className="p-6">Loading reports...</p>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">Reports</h2>
          {reports.length === 0 ? (
            <p>No reports available.</p>
          ) : (
            <ul className="space-y-3">
              {reports.map((r, i) => (
                <li key={i} className="p-4 border rounded shadow bg-white flex justify-between">
                  <span>{r.student_name} – {r.subject}</span>
                  <span className="font-bold">{r.grade}</span>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}
