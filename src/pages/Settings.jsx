import Sidebar from '../components/Sidebar'; import Navbar from '../components/Navbar';
export default function Settings(){ return (<div className="flex min-h-screen"><Sidebar /><div className="flex-1"><Navbar /><main className="p-6"><h2 className="text-xl font-bold mb-4">Settings</h2><p>Configure app settings here.</p></main></div></div>); }
