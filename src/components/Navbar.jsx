import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar(){
  const auth = useAuth()
  const nav = useNavigate()
  function handleLogout(){
    auth.logout()
    nav('/login')
  }

  return (
    <div className="container nav" style={{justifyContent:'space-between'}}>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <Link to="/"><strong>SMAS</strong></Link>
        <Link to="/about">About</Link>
        {auth.user && <Link to="/dashboard">Dashboard</Link>}
        {auth.user && <Link to="/exams">Exams</Link>}
      </div>
      <div style={{display:'flex', gap:8, alignItems:'center'}}>
        {auth.user ? (
          <>
            <div className="muted">Hi, {auth.user.name}</div>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register"><button>Register</button></Link>
          </>
        )}
      </div>
    </div>
  )
}
