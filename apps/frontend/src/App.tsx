import { LayoutDashboard, Cloud, Server, Terminal, List, RefreshCcw } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold gradient-text">GCP Developer Playground</h1>
          <p className="text-secondary mt-2">Native Cloud Development & Orchestration Demo</p>
        </div>
        <div className="flex gap-4">
          <div className="status-badge status-online">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            AlloyDB: Connected
          </div>
          <div className="status-badge status-online">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            GKE: Active
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar / Quick Nav */}
        <aside className="md:col-span-3 space-y-4">
          <nav className="glass-card flex flex-col gap-2">
            <button className="btn btn-primary justify-start">
              <LayoutDashboard size={18} /> Dashboard
            </button>
            <button className="btn hover:bg-white/5 justify-start">
              <Cloud size={18} /> Cloud Run
            </button>
            <button className="btn hover:bg-white/5 justify-start">
              <Server size={18} /> GKE Clusters
            </button>
            <button className="btn hover:bg-white/5 justify-start">
              <List size={18} /> Database Explorer
            </button>
          </nav>

          <div className="glass-card bg-blue-500/10 border-blue-500/20">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Terminal size={16} /> Debug Insight
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Use Antigravity to analyze log errors from this playground.
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="md:col-span-9 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Total Services</p>
              <p className="text-3xl font-bold mt-1">12</p>
            </div>
            <div className="glass-card">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Active Clusters</p>
              <p className="text-3xl font-bold mt-1">2</p>
            </div>
            <div className="glass-card">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold">Log Events</p>
              <p className="text-3xl font-bold mt-1 text-red-500">4 Errors</p>
            </div>
          </div>

          <div className="glass-card min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent GCP Events</h2>
              <button className="btn hover:bg-white/5 gap-2">
                <RefreshCcw size={16} /> Refresh
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 border-b border-white/5 group hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded bg-red-500/20 flex items-center justify-center text-red-500">
                  <Terminal size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Kubernetes Pod CrashLoop</span>
                    <span className="text-xs text-secondary">2 mins ago</span>
                  </div>
                  <p className="text-sm text-secondary">GKE cluster `demo-cluster` - Pod `backend-v1-234` failing to connect to AlloyDB.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
