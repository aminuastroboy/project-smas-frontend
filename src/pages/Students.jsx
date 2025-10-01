import { useEffect, useState } from 'react'; import Sidebar from '../components/Sidebar'; import Navbar from '../components/Navbar'; import api from '../api';
const demo = [{id:1,name:'John Doe',classroom:'JSS1',avg:72},{id:2,name:'Jane Smith',classroom:'JSS2',avg:88}];
export default function Students(){
  const [students,setStudents]=useState([]); const [loading,setLoading]=useState(true);
  useEffect(()=>{ async function f(){ try{ const r = await api.get('/users/students/'); setStudents(r.data); }catch(e){ setStudents(demo); } finally{ setLoading(false);} } f(); },[]);
  if(loading) return <p className="p-6">Loading students...</p>;
  return (<div className="flex min-h-screen"><Sidebar /><div className="flex-1"><Navbar /><main className="p-6"><h2 className="text-xl font-bold mb-4">Students</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{students.map(s=> (<div key={s.id} className="bg-white p-4 rounded shadow"><div className="font-semibold">{s.name || s.user?.username}</div><div className="text-sm text-gray-500">{s.classroom || s.classroom}</div><div className="mt-2">Average: <strong>{s.avg ?? 'N/A'}</strong></div></div>))}</div></main></div></div>);
}
