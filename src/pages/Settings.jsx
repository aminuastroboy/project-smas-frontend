import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <h2 className="text-2xl font-bold">Settings</h2>
          <p className="mt-4">Manage your account and preferences here.</p>
        </main>
      </div>
    </div>
  );
}
