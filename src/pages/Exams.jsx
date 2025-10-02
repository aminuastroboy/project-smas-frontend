import React, { useEffect, useState } from 'react'

function loadExams(){ try{ return JSON.parse(localStorage.getItem('smas_exams')||'[]') }catch(e){ return [] } }
function saveExams(list){ localStorage.setItem('smas_exams', JSON.stringify(list)) }

export default function Exams(){
  const [exams, setExams] = useState(loadExams)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('30')

  useEffect(()=> saveExams(exams), [exams])

  function handleCreate(e){
    e.preventDefault()
    const newExam = { id: Date.now(), title, date, duration, createdAt: new Date().toISOString() }
    setExams(prev=>[newExam, ...prev])
    setTitle(''); setDate(''); setDuration('30')
  }

  function handleDelete(id){
    if(!confirm('Delete exam?')) return
    setExams(prev=>prev.filter(x=>x.id!==id))
  }

  return (
    <div>
      <div className="card mb">
        <h2>Create Exam</h2>
        <form onSubmit={handleCreate}>
          <div className="mb">
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Exam title" required />
          </div>
          <div className="mb">
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} required />
          </div>
          <div className="mb">
            <select value={duration} onChange={e=>setDuration(e.target.value)}>
              <option value="15">15 mins</option>
              <option value="30">30 mins</option>
              <option value="45">45 mins</option>
              <option value="60">60 mins</option>
            </select>
          </div>
          <button type="submit">Create Exam</button>
        </form>
      </div>

      <div className="card">
        <h3 className="mb">Existing Exams</h3>
        {exams.length===0 && <div className="muted">No exams yet.</div>}
        <ul style={{listStyle:'none', padding:0}}>
          {exams.map(ex=>(
            <li key={ex.id} className="card mb" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <div><strong>{ex.title}</strong></div>
                <div className="muted">{ex.date} • {ex.duration} mins</div>
              </div>
              <div style={{display:'flex', gap:8}}>
                <button onClick={()=>navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(ex))}>Copy</button>
                <button onClick={()=>handleDelete(ex.id)} style={{background:'#ef4444'}}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
