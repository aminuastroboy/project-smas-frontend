import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash(){
  const nav = useNavigate()
  return (
    <div style={{display:'flex',gap:20,alignItems:'center'}}>
      <div className="card" style={{flex:1}}>
        <h1>Welcome to SMAS Demo</h1>
        <p className="muted">Choose a demo role to jump straight in, or register a new account.</p>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button onClick={()=>{ localStorage.setItem('smas_demo_role','Teacher'); nav('/login') }}>Teacher Demo</button>
          <button onClick={()=>{ localStorage.setItem('smas_demo_role','Student'); nav('/login') }} className="ghost">Student Demo</button>
        </div>
      </div>
      <div className="card" style={{width:320}}>
        <h3>Quick Guide</h3>
        <ol className="small">
          <li>Use the demo buttons to preselect a role for login.</li>
          <li>Teacher can create exams; Student can take them.</li>
          <li>All data stored locally for demo purposes.</li>
        </ol>
      </div>
    </div>
  )
}
