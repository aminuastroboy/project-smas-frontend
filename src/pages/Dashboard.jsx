import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard(){
  const { user } = useAuth()
  if(!user) return null
  if(user.role === 'Teacher'){
    const exams = JSON.parse(localStorage.getItem('smas_exams')||'[]')
    const users = JSON.parse(localStorage.getItem('smas_users')||'[]')
    const results = JSON.parse(localStorage.getItem('smas_results')||'{}')
    const totalSubmissions = Object.values(results).reduce((acc,arr)=>acc+(arr?.length||0),0)
    return (
      <div>
        <div className="card"><h2>Teacher Dashboard</h2><p className="muted">Welcome {user.name}</p></div>
        <div className="grid">
          <div className="card"><div className="small muted">Exams</div><h3>{exams.length}</h3></div>
          <div className="card"><div className="small muted">Registered users</div><h3>{users.length}</h3></div>
          <div className="card"><div className="small muted">Submissions</div><h3>{totalSubmissions}</h3></div>
          <div className="card"><div className="small muted">Your role</div><h3>{user.role}</h3></div>
        </div>
      </div>
    )
  } else {
    const results = JSON.parse(localStorage.getItem('smas_results')||'{}')[user.id]||[]
    return (
      <div>
        <div className="card"><h2>Student Dashboard</h2><p className="muted">Welcome {user.name}</p></div>
        <div className="card"><h3>Your Results</h3>{results.length===0 ? <p className="muted">No results yet.</p> : <ul>{results.map((r,i)=>(<li key={i}>{r.examTitle}: {r.score}/{r.total}</li>))}</ul>}</div>
      </div>
    )
  }
}
