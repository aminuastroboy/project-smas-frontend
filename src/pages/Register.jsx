import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register(){
  const auth = useAuth()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const res = auth.register({name,email,password})
    if(res.error){ setError(res.error); return }
    nav('/dashboard')
  }

  return (
    <div className="card max" style={{maxWidth:480, margin:'0 auto'}}>
      <h2 className="mb">Create account</h2>
      {error && <div style={{color:'red'}}>{error}</div>}
      <form onSubmit={handleSubmit} className="mb">
        <div className="mb">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" required />
        </div>
        <div className="mb">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required />
        </div>
        <div className="mb">
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
