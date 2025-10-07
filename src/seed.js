(function seed(){
  try{
    const hasSeed = localStorage.getItem('smas_seed_v2')
    if(hasSeed) return
    const teacher = { id: 1, name: 'Demo Teacher', email: 'teacher@smas.demo', password: '123456', role: 'Teacher' }
    const student = { id: 2, name: 'Demo Student', email: 'student@smas.demo', password: '123456', role: 'Student' }
    localStorage.setItem('smas_users', JSON.stringify([teacher, student]))
    const exams = [
      { id: 101, title: 'Basic Math Quiz', createdBy: teacher.id, questions: [
        { q: '2 + 2 = ?', opts: ['3','4','5'], ans: 1 },
        { q: '5 - 2 = ?', opts: ['2','3','4'], ans: 1 },
        { q: '3 * 3 = ?', opts: ['6','9','12'], ans: 1 }
      ], date: '2025-10-10', duration: 30 },
      { id: 102, title: 'General Knowledge', createdBy: teacher.id, questions: [
        { q: 'Capital of France?', opts: ['Paris','Berlin','Madrid'], ans: 0 },
        { q: 'H2O is?', opts: ['Oxygen','Water','Hydrogen'], ans: 1 },
        { q: 'Sun rises from?', opts: ['East','West','North'], ans: 0 }
      ], date: '2025-10-12', duration: 20 }
    ]
    localStorage.setItem('smas_exams', JSON.stringify(exams))
    localStorage.setItem('smas_results', JSON.stringify({}))
    localStorage.setItem('smas_seed_v2', new Date().toISOString())
    console.log('SMAS demo seeded')
  }catch(e){ console.error(e) }
})()
