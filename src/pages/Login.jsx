import React, {useState} from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(null)
  const nav=useNavigate()
  const submit=async(e)=>{
    e.preventDefault();setError(null)
    try{
      const res = await api.post('/auth/token/', {username, password})
      localStorage.setItem('access', res.data.access)
      nav('/dashboard')
    }catch(err){setError(err?.response?.data||'Login failed')}
  }
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3 bg-white p-6 rounded shadow">
        <input className="w-full p-2 border" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" className="w-full p-2 border" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        {error && <p className="text-red-600">{JSON.stringify(error)}</p>}
      </form>
    </div>
  )
}
