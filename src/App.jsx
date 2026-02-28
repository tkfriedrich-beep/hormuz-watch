import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import FogOfWar from './components/FogOfWar';
import NarrativeModal from './components/NarrativeModal';
import { timelineEvents } from './data/mockEvents';
import { Activity } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = ['All', 'Kinetic', 'Diplomatic', 'Economic'];
  const filtered = filter === 'All'
    ? timelineEvents
    : timelineEvents.filter((e) => e.category === filter);

  return (
    <div className="h-screen flex flex-col bg-slate-950 overflow-hidden">
      {/* CRT scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="scan-line w-full h-px bg-white/10" />
      </div>

      <Header sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — fixed drawer on mobile, static on desktop */}
        <div className={`
          fixed inset-y-0 left-0 z-40 w-80 transform transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 lg:z-auto
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        <main className="flex-1 overflow-y-auto">
          {/* Fog of War banner */}
          <div className="px-3 md:px-6 pt-4 md:pt-5 pb-2 md:pb-3">
            <FogOfWar />
          </div>

          {/* Timeline header + filters */}
          <div className="px-3 md:px-6 pb-3 md:pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <Activity className="w-4 h-4 text-red-500 shrink-0" />
              <h2 className="font-mono text-[10px] md:text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                Operations Timeline — 28 FEB 2026
              </h2>
              <span className="font-mono text-[10px] text-slate-600">
                {filtered.length} events
              </span>
            </div>

            <div className="flex items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`
                    text-[10px] font-mono px-2 md:px-3 py-1 rounded transition-colors border
                    ${filter === cat
                      ? 'bg-red-900/50 border-red-700 text-red-300'
                      : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700'
                    }
                  `}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="px-3 md:px-6 pb-8">
            <Timeline events={filtered} onEventClick={(e) => { setSelectedEvent(e); setSidebarOpen(false); }} />
          </div>
        </main>
      </div>

      {/* Narrative analysis modal */}
      <NarrativeModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
