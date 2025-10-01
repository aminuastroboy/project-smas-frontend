import { useEffect, useState } from 'react'; import Sidebar from '../components/Sidebar'; import Navbar from '../components/Navbar'; import api from '../api';
const demo = [{subject:'Mathematics',score:85,remark:'Excellent'},{subject:'English',score:63,remark:'Needs Improvement'}];
export default function Exams(){ const [results,setResults]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{ async function f(){ try{ const r = await api.get('/exams/results/'); setResults(r.data); }catch(e){ setResults(demo);} finally{ setLoading(false);} } f(); },[]);
  if(loading) return <p className="p-6">Loading exam results...</p>;
  return (<div className="flex min-h-screen"><Sidebar /><div className="flex-1"><Navbar /><main className="p-6"><h2 className="text-xl font-bold mb-4">Exam Results</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{results.map((r,i)=>(<div key={i} className="bg-white p-4 rounded shadow"><div className="font-semibold">{r.subject}</div><div>Score: <strong>{r.score}</strong></div><div className={'mt-2 '+(r.score<70?'text-red-600':'text-green-600')}>{r.remark}</div></div>))}</div></main></div></div>);
}
