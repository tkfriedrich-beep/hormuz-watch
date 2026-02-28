import EscalationLadder from './EscalationLadder';
import MarketTicker from './MarketTicker';
import { Crosshair, Zap } from 'lucide-react';

export default function Sidebar({ onClose }) {
  return (
    <aside className="w-80 h-full border-r border-slate-800 bg-slate-950 flex flex-col shrink-0 overflow-y-auto">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <Crosshair className="w-4 h-4 text-red-500" />
          <span className="font-mono text-[10px] tracking-widest text-red-400 uppercase font-bold">
            Active Operations
          </span>
        </div>
        <div className="space-y-2">
          <div className="bg-red-950/40 border border-red-900/60 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-red-400" />
              <span className="font-mono text-xs font-bold text-red-300">EPIC FURY</span>
              <span className="text-[9px] font-mono text-slate-500 ml-auto">US-LED</span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">
              Decapitation strikes — Tehran C2 infrastructure
            </p>
          </div>
          <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono text-xs font-bold text-blue-300">ROARING LION</span>
              <span className="text-[9px] font-mono text-slate-500 ml-auto">ISR-LED</span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 mt-1">
              Nuclear facility strikes — Isfahan / Natanz
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-1">
        <EscalationLadder />
        <MarketTicker />
      </div>

      <div className="p-4 border-t border-slate-800">
        <p className="text-[9px] font-mono text-slate-600 text-center leading-relaxed">
          CLASSIFICATION: UNCLASSIFIED // OSINT ONLY<br />
          SOURCES: OPEN-SOURCE INTELLIGENCE<br />
          NOT FOR OPERATIONAL USE
        </p>
      </div>
    </aside>
  );
}
