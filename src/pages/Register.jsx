import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register(){
  const { register } = useAuth()
  const nav = useNavigate()
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [role,setRole]=useState('Student'); const [err,setErr]=useState('')
  function submit(e){
    e.preventDefault()
    const r = register({ name, email, password, role })
    if(r.error){ setErr(r.error); return }
    nav('/dashboard')
  }
  return (
    <div className="card" style={{maxWidth:480,margin:'0 auto'}}>
      <h2>Create account</h2>
      {err && <div style={{color:'red'}}>{err}</div>}
      <form onSubmit={submit}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" required />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
        <select value={role} onChange={e=>setRole(e.target.value)}>
          <option>Student</option>
          <option>Teacher</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
