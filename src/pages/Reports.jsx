import React, {useState} from 'react'
import api from '../utils/api'
export default function Reports(){
  const [message,setMessage]=useState('')
  async function send(){
    try{ const r = await api.post('/reports/send/1/'); setMessage('Reports started. Task ID: '+r.data.task_id) }catch(e){setMessage('Failed to start reports')}
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Reports</h1>
      <p className="mt-4">Use this page to trigger class reports to guardians.</p>
      <button onClick={send} className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">Send Reports</button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  )
}
