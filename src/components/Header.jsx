import { Radio, Shield, Wifi, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header({ sidebarOpen, onToggleSidebar }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const utc = time.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

  return (
    <header className="h-12 md:h-14 border-b border-slate-800 bg-slate-950/90 backdrop-blur flex items-center justify-between px-3 md:px-6 shrink-0">
      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-1.5 rounded hover:bg-slate-800 text-slate-400 transition-colors"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Shield className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
        <h1 className="font-mono text-xs md:text-sm font-bold tracking-widest text-slate-100 uppercase">
          Hormuz Watch
        </h1>
        <span className="hidden sm:inline text-[10px] font-mono text-slate-500 border border-slate-700 px-2 py-0.5 rounded">
          OSINT DASHBOARD v1.0
        </span>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 pulse-live" />
          <span className="hidden sm:inline text-[11px] font-mono text-red-400 uppercase tracking-wider">Live Feed Active</span>
          <span className="sm:hidden text-[9px] font-mono text-red-400 uppercase">LIVE</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-slate-400">
          <Radio className="w-3.5 h-3.5" />
          <span className="text-[11px] font-mono">{utc}</span>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-slate-500">
          <Wifi className="w-3.5 h-3.5" />
          <span className="text-[11px] font-mono">SIGINT OK</span>
        </div>
      </div>
    </header>
  );
}
