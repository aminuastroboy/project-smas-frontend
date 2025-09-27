import React, {useEffect, useState} from 'react'
import api from '../utils/api'
export default function Dashboard(){
  const [summary,setSummary]=useState(null)
  useEffect(()=>{fetch()},[])
  async function fetch(){
    try{const r = await api.get('/users/me/'); setSummary(r.data)}catch(e){console.error(e)}
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome back{summary ? `, ${summary.first_name || summary.username}` : ''}.</p>
    </div>
  )
}
