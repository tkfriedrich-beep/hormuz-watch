import { Clock, MapPin, ShieldCheck } from 'lucide-react';
import { categoryColors } from '../data/mockEvents';

export default function Timeline({ events, onEventClick }) {
  return (
    <div className="relative">
      {/* Glowing red timeline line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-red-600/80 timeline-line" />

      <div className="space-y-3 md:space-y-4">
        {events.map((event, index) => {
          const cat = categoryColors[event.category] || categoryColors.Kinetic;
          const time = new Date(event.timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC',
          });
          const fogPercent = Math.round(event.fogDelta * 100);
          const isHighFog = fogPercent > 50;

          return (
            <div
              key={event.id}
              className="relative pl-10 md:pl-14 group cursor-pointer"
              onClick={() => onEventClick(event)}
            >
              {/* Dot on the timeline */}
              <div className={`
                absolute left-[10px] md:left-[18px] top-4 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 z-10
                ${cat.dot} border-slate-950
                group-hover:scale-125 transition-transform
                ${index === 0 ? 'pulse-live' : ''}
              `} />

              {/* Event card */}
              <div className={`
                border rounded-lg p-3 md:p-4 transition-all
                ${cat.bg} ${cat.border} border-opacity-40
                hover:border-opacity-80 hover:shadow-lg hover:shadow-red-950/20
              `}>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                    <span className={`text-[9px] md:text-[10px] font-mono px-1.5 md:px-2 py-0.5 rounded border ${cat.border} ${cat.text} ${cat.bg} font-bold`}>
                      {event.category.toUpperCase()}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {time} UTC
                    </span>
                    <span className="hidden sm:flex text-[10px] font-mono text-slate-500 items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                    {isHighFog && (
                      <span className="text-[8px] md:text-[9px] font-mono text-orange-400 bg-orange-900/30 px-1 md:px-1.5 py-0.5 rounded border border-orange-800/50">
                        FOG {fogPercent}%
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-[9px] md:text-[10px] font-mono text-slate-500">
                      <ShieldCheck className="w-3 h-3" />
                      {(event.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>

                {/* Location shown on its own line on mobile */}
                <span className="sm:hidden text-[9px] font-mono text-slate-500 flex items-center gap-1 mb-1.5">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </span>

                <h3 className="font-mono text-xs md:text-sm font-bold text-slate-100 mb-1">
                  {event.title}
                </h3>
                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  {event.summary}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[8px] md:text-[9px] font-mono text-slate-600 truncate">
                    SRC: {event.source}
                  </span>
                  <span className="hidden md:block text-[9px] font-mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    CLICK FOR NARRATIVE ANALYSIS →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
