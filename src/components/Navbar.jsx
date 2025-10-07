import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar(){
  const { user, logout } = useAuth()
  const nav = useNavigate()
  return (
    <div className="container nav">
      <div>
        <Link to="/home"><strong>SMAS</strong></Link>
        <Link to="/about" style={{marginLeft:12}}>About</Link>
        {user && <Link to="/dashboard" style={{marginLeft:12}}>Dashboard</Link>}
        {user && <Link to="/exams" style={{marginLeft:12}}>Exams</Link>}
      </div>
      <div>
        {user ? (
          <>
            <span className="small muted" style={{marginRight:8}}>Hi {user.name} ({user.role})</span>
            <button onClick={()=>{ logout(); nav('/home') }} className="ghost">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="small" style={{marginRight:8}}>Login</Link>
            <Link to="/register"><button>Register</button></Link>
          </>
        )}
      </div>
    </div>
  )
}
