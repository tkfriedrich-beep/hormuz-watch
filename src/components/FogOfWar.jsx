import { Eye, EyeOff } from 'lucide-react';
import { timelineEvents } from '../data/mockEvents';

export default function FogOfWar() {
  const avgDelta = timelineEvents.reduce((sum, e) => sum + e.fogDelta, 0) / timelineEvents.length;
  const fogPercent = Math.round(avgDelta * 100);
  const isHigh = fogPercent > 50;

  return (
    <div className={`
      border rounded-lg px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-3 md:gap-4
      ${isHigh
        ? 'border-orange-600/60 bg-orange-950/30'
        : 'border-slate-700 bg-slate-900/50'
      }
    `}>
      <div className={`
        w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0
        ${isHigh ? 'bg-orange-900/60 fog-pulse' : 'bg-slate-800'}
      `}>
        {isHigh
          ? <EyeOff className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
          : <Eye className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
        }
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-slate-400 uppercase">
            Fog of War Index
          </span>
          <span className={`font-mono text-base md:text-lg font-bold ${isHigh ? 'text-orange-400' : 'text-slate-300'}`}>
            {fogPercent}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${isHigh ? 'bg-orange-500' : 'bg-slate-500'}`}
            style={{ width: `${fogPercent}%` }}
          />
        </div>
        <p className={`text-[8px] md:text-[9px] font-mono mt-1 truncate ${isHigh ? 'text-orange-400/80' : 'text-slate-500'}`}>
          {isHigh
            ? 'HIGH NARRATIVE DIVERGENCE — DATA UNRELIABLE THIS HOUR'
            : 'Narrative divergence within acceptable parameters'
          }
        </p>
      </div>
    </div>
  );
}
