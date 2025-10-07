import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const { login } = useAuth()
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(()=>{
    const demoRole = localStorage.getItem('smas_demo_role')
    if(demoRole==='Teacher') setEmail('teacher@smas.demo')
    if(demoRole==='Student') setEmail('student@smas.demo')
    localStorage.removeItem('smas_demo_role')
  },[])

  function submit(e){
    e.preventDefault()
    const res = login({ email, password })
    if(res.error){ setError(res.error); return }
    nav('/dashboard')
  }

  return (
    <div className="card" style={{maxWidth:480,margin:'0 auto'}}>
      <h2>Login</h2>
      {error && <div style={{color:'red'}}>{error}</div>}
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="small muted">No account? <Link to="/register">Register</Link></div>
    </div>
  )
}
