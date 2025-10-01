import { useEffect, useState } from 'react'; import Sidebar from '../components/Sidebar'; import Navbar from '../components/Navbar'; import api from '../api';
const demo = [{student_name:'John Doe',subject:'Mathematics',grade:'A'},{student_name:'Jane Smith',subject:'English',grade:'A'}];
export default function Reports(){ const [reports,setReports]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{ async function f(){ try{ const r = await api.get('/exams/reports/'); setReports(r.data); }catch(e){ setReports(demo);} finally{ setLoading(false);} } f(); },[]);
  if(loading) return <p className="p-6">Loading reports...</p>;
  return (<div className="flex min-h-screen"><Sidebar /><div className="flex-1"><Navbar /><main className="p-6"><h2 className="text-xl font-bold mb-4">Guardian Reports</h2>{reports.length===0? <p>No reports</p>:<ul className="space-y-3">{reports.map((r,i)=>(<li key={i} className="p-4 bg-white rounded shadow flex justify-between"><span>{r.student_name} — {r.subject}</span><strong>{r.grade}</strong></li>))}</ul>}</main></div></div>);
}
