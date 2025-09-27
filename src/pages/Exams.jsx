import React, {useEffect, useState} from 'react'
import api from '../utils/api'
export default function Exams(){
  const [exams,setExams]=useState([])
  useEffect(()=>{fetch()},[])
  async function fetch(){
    try{const r = await api.get('/exams/'); setExams(r.data)}catch(e){console.error(e)}
  }
  function take(e){ alert('Exam UI placeholder for '+e.title) }
  return (
    <div>
      <h1 className="text-2xl font-bold">Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {exams.map(ex=> (
          <div key={ex.id} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">{ex.title}</h3>
            <p className="text-sm">Subject: {ex.subject?.name || 'N/A'}</p>
            <p className="text-sm">Date: {ex.date || 'N/A'}</p>
            <button onClick={()=>take(ex)} className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">Take Exam</button>
          </div>
        ))}
      </div>
    </div>
  )
}
