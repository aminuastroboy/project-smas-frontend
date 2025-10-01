import Sidebar from '../components/Sidebar'; import Navbar from '../components/Navbar'; import Card from '../components/Card';
export default function Dashboard(){
  const stats = [{label:'Students', value:120},{label:'Teachers', value:12},{label:'Exams (month)', value:3}];
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map(s=> <Card key={s.label} title={s.label}><div className="text-2xl font-bold">{s.value}</div></Card>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Recent Exams"><p>Mathematics - 12 Sep 2025</p><p>English - 05 Sep 2025</p></Card>
            <Card title="Quick Actions"><p>Create Exam | Seed Data | Send Reports</p></Card>
          </div>
        </main>
      </div>
    </div>
  )
}
