import React, {useEffect, useState} from 'react'
import api from '../utils/api'
export default function Results(){
  const [results,setResults]=useState([])
  useEffect(()=>{fetch()},[])
  async function fetch(){
    try{const r = await api.get('/exams/my-results/'); setResults(r.data)}catch(e){console.error(e)}
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">My Results</h1>
      <div className="mt-4 space-y-4">
        {results.map(res=> (
          <div key={res.id} className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold">{res.exam?.title} — {res.percent}%</h3>
            <p className="text-sm">Score: {res.total_score}/{res.exam?.total_marks || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
