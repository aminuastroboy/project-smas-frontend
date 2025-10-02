import React from 'react'
import { useAuth } from '../context/AuthContext'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const sample = [
  { name: 'Week 1', students: 12 },
  { name: 'Week 2', students: 18 },
  { name: 'Week 3', students: 9 },
  { name: 'Week 4', students: 24 },
]

export default function Dashboard(){
  const auth = useAuth()
  return (
    <div>
      <div className="card mb">
        <h2>Dashboard</h2>
        <div className="muted">Welcome back, <strong>{auth.user?.name}</strong></div>
      </div>

      <div className="card mb">
        <h3 className="mb">Quick stats</h3>
        <div className="grid">
          <div className="card">
            <div className="muted">Exams created</div>
            <div style={{fontSize:28}}>{(JSON.parse(localStorage.getItem('smas_exams')||'[]')).length}</div>
          </div>
          <div className="card">
            <div className="muted">Registered users</div>
            <div style={{fontSize:28}}>{(JSON.parse(localStorage.getItem('smas_users')||'[]')).length}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="mb">Activity (sample)</h3>
        <div style={{width:'100%', height:240}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sample}>
              <Line type="monotone" dataKey="students" stroke="#4f46e5" />
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
