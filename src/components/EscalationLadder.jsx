import { ESCALATION_LEVEL, ESCALATION_MAX, ESCALATION_LABEL } from '../data/mockEvents';
import { AlertTriangle } from 'lucide-react';

const levels = [
  { level: 5, label: "NUCLEAR EXCHANGE", color: "bg-white" },
  { level: 4, label: "MAJOR THEATER WAR", color: "bg-red-600" },
  { level: 3, label: "REGIONAL CONFLICT", color: "bg-orange-500" },
  { level: 2, label: "PROXY ESCALATION", color: "bg-amber-500" },
  { level: 1, label: "DIPLOMATIC CRISIS", color: "bg-yellow-500" },
];

export default function EscalationLadder() {
  return (
    <div className="border border-slate-800 rounded-lg p-4 bg-slate-900/50">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-red-500" />
        <h2 className="font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">
          Escalation Ladder
        </h2>
      </div>

      <div className="space-y-1.5">
        {levels.map((l) => {
          const isActive = l.level <= ESCALATION_LEVEL;
          const isCurrent = l.level === ESCALATION_LEVEL;

          return (
            <div
              key={l.level}
              className={`
                flex items-center gap-3 px-3 py-2 rounded text-[10px] font-mono tracking-wider transition-all
                ${isCurrent
                  ? 'bg-red-900/60 border border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                  : isActive
                    ? 'bg-slate-800/80 border border-slate-700'
                    : 'bg-slate-900/30 border border-slate-800/50 opacity-40'
                }
              `}
            >
              <span className={`
                w-6 h-6 rounded flex items-center justify-center font-bold text-xs
                ${isCurrent ? 'bg-red-600 text-white' : isActive ? l.color + ' text-slate-950' : 'bg-slate-800 text-slate-600'}
              `}>
                {l.level}
              </span>
              <span className={isCurrent ? 'text-red-300 font-bold' : isActive ? 'text-slate-300' : 'text-slate-600'}>
                {l.label}
              </span>
              {isCurrent && (
                <span className="ml-auto w-2 h-2 rounded-full bg-red-500 pulse-live" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-2 bg-red-950/40 border border-red-900/60 rounded">
        <p className="text-[10px] font-mono text-red-400 text-center">
          CURRENT STATUS: LEVEL {ESCALATION_LEVEL}/{ESCALATION_MAX}
        </p>
        <p className="text-[10px] font-mono text-red-300 text-center font-bold mt-0.5">
          {ESCALATION_LABEL}
        </p>
      </div>
    </div>
  );
}
