import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

function loadExams(){ try { return JSON.parse(localStorage.getItem('smas_exams')||'[]') } catch(e){ return [] } }
function saveExams(exams){ localStorage.setItem('smas_exams', JSON.stringify(exams)) }

export default function Exams(){
  const { user } = useAuth()
  const [exams, setExams] = useState(loadExams)
  const [title, setTitle] = useState('')
  const [taking, setTaking] = useState(null)
  const [answers, setAnswers] = useState({})

  useEffect(()=> saveExams(exams), [exams])

  if(user.role === 'Teacher'){
    function addExam(e){ e.preventDefault(); const newExam = { id: Date.now(), title, createdBy: user.id, questions: [], date: new Date().toISOString().slice(0,10), duration: 30 }; setExams(prev=>[newExam,...prev]); setTitle('') }
    function del(id){ if(!confirm('Delete exam?')) return; setExams(prev=>prev.filter(x=>x.id!==id)) }
    return (
      <div>
        <div className="card"><h2>Create Exam</h2><form onSubmit={addExam}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Exam title" required/><button>Create</button></form></div>
        <div className="card"><h3>My Exams</h3>{exams.length===0 ? <p className="muted">No exams yet.</p> : <ul>{exams.map(ex=>(<li key={ex.id} style={{marginBottom:8}}><strong>{ex.title}</strong> <button onClick={()=>del(ex.id)} className="red">Delete</button></li>))}</ul>}</div>
      </div>
    )
  } else {
    function startExam(ex){
      setTaking(ex)
      setAnswers({})
    }
    function setAns(qIndex,optIndex){
      setAnswers(a=>({ ...a, [qIndex]: optIndex }))
    }
    function submit(){
      const qs = taking.questions || []
      let score = 0
      qs.forEach((q,i)=>{ if(q.ans == answers[i]) score++ })
      const results = JSON.parse(localStorage.getItem('smas_results')||'{}')
      if(!results[user.id]) results[user.id] = []
      results[user.id].push({ examId: taking.id, examTitle: taking.title, score, total: qs.length, takenAt: new Date().toISOString() })
      localStorage.setItem('smas_results', JSON.stringify(results))
      alert('Submitted: ' + score + ' / ' + qs.length)
      setTaking(null)
    }
    return (
      <div>
        <div className="card"><h2>Available Exams</h2>{exams.length===0 ? <p className="muted">No exams available.</p> : <ul>{exams.map(ex=>(<li key={ex.id} style={{marginBottom:8}}><strong>{ex.title}</strong> <button onClick={()=>startExam(ex)}>Take</button></li>))}</ul>}</div>
        {taking && <div className="card"><h3>{taking.title}</h3>{taking.questions.map((q,i)=>(<div key={i} style={{marginBottom:8}}><div>{q.q}</div>{q.opts.map((o,j)=>(<label key={j} style={{display:'block'}}><input type="radio" name={'q'+i} onChange={()=>setAns(i,j)}/> {o}</label>))}</div>))}<button onClick={submit}>Submit exam</button></div>}
      </div>
    )
  }
}
