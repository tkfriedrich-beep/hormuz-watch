import { X, Globe, Radio, ExternalLink, Rss } from 'lucide-react';
import { categoryColors } from '../data/mockEvents';

export default function NarrativeModal({ event, onClose }) {
  if (!event) return null;

  const catStyle = categoryColors[event.category] || categoryColors.Kinetic;
  const fogPercent = Math.round((event.fogDelta || 0) * 100);
  const isHighFog = fogPercent > 50;
  const hasNarrative = event.western && event.eastern;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-h-[90vh] md:max-h-[85vh] md:max-w-5xl bg-slate-900 border border-slate-700 rounded-t-xl md:rounded-xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 px-4 md:px-6 py-3 md:py-4 sticky top-0 bg-slate-900 z-10">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 md:gap-3 mb-1 flex-wrap">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${catStyle.bg} ${catStyle.text} border ${catStyle.border}`}>
                {event.category.toUpperCase()}
              </span>
              {event.isLive && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-400 border border-emerald-700 flex items-center gap-1">
                  <Rss className="w-3 h-3" /> LIVE
                </span>
              )}
              <span className="text-[10px] font-mono text-slate-500">
                {new Date(event.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })} UTC
              </span>
              {hasNarrative && (
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isHighFog ? 'bg-orange-900/40 text-orange-400 border border-orange-700' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                  FOG: {fogPercent}%
                </span>
              )}
            </div>
            <h2 className="font-mono text-sm md:text-base font-bold text-slate-100">{event.title}</h2>
            <p className="text-[11px] md:text-xs text-slate-400 mt-1">{event.summary}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-slate-200 shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {hasNarrative ? (
          <>
            {/* Narrative header */}
            <div className="px-4 md:px-6 py-2 md:py-3 bg-slate-950/50 border-b border-slate-800">
              <p className="text-[9px] md:text-[10px] font-mono text-slate-500 tracking-widest uppercase text-center">
                Divergent Narrative Analysis — {event.location}
              </p>
            </div>

            {/* Side-by-side on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-slate-800">
              {/* Western Feed */}
              <div className="p-4 md:p-6 border-b md:border-b-0 border-slate-800">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-[11px] font-bold text-blue-400 tracking-wider uppercase">
                    Western Feed
                  </span>
                </div>
                <div className="bg-blue-950/20 border border-blue-900/40 rounded-lg p-3 md:p-4">
                  <h3 className="font-mono text-xs md:text-sm font-semibold text-blue-300 mb-2 md:mb-3 leading-snug">
                    {event.western.headline}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                    {event.western.detail}
                  </p>
                </div>
                <div className="mt-2 md:mt-3 flex items-center gap-2">
                  <span className="text-[9px] font-mono text-slate-600">FOCUS:</span>
                  <span className="text-[9px] font-mono text-blue-400/70">Precision strikes • Regime disruption • Military targets</span>
                </div>
              </div>

              {/* Regional Feed */}
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <Radio className="w-4 h-4 text-green-400" />
                  <span className="font-mono text-[11px] font-bold text-green-400 tracking-wider uppercase">
                    Regional Feed
                  </span>
                </div>
                <div className="bg-green-950/20 border border-green-900/40 rounded-lg p-3 md:p-4">
                  <h3 className="font-mono text-xs md:text-sm font-semibold text-green-300 mb-2 md:mb-3 leading-snug">
                    {event.eastern.headline}
                  </h3>
                  <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                    {event.eastern.detail}
                  </p>
                </div>
                <div className="mt-2 md:mt-3 flex items-center gap-2">
                  <span className="text-[9px] font-mono text-slate-600">FOCUS:</span>
                  <span className="text-[9px] font-mono text-green-400/70">Civilian impact • Infrastructure damage • Resistance narrative</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Live article — no narrative split */
          <div className="p-4 md:p-6">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-slate-950/50 border border-slate-800 rounded-lg mb-4">
              <p className="text-[9px] md:text-[10px] font-mono text-slate-500 tracking-widest uppercase text-center">
                Live Intelligence Feed — Single Source
              </p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 md:p-6">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {event.summary}
              </p>
              {event.url && (
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  VIEW ORIGINAL SOURCE
                </a>
              )}
            </div>
            <p className="text-[9px] font-mono text-slate-600 mt-3">
              Narrative analysis unavailable for single-source live intelligence. Cross-reference recommended.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-slate-800 px-4 md:px-6 py-2 md:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 bg-slate-950/50">
          <span className="text-[9px] font-mono text-slate-600">
            SRC: {event.source} // CONF: {(event.confidence * 100).toFixed(0)}%
          </span>
          <span className={`text-[9px] font-mono ${isHighFog ? 'text-orange-400' : 'text-slate-500'}`}>
            {hasNarrative
              ? (isHighFog ? '⚠ HIGH NARRATIVE DIVERGENCE — EXERCISE CAUTION' : 'NARRATIVE DIVERGENCE WITHIN TOLERANCE')
              : 'SINGLE SOURCE — CROSS-REFERENCE ADVISED'
            }
          </span>
        </div>
      </div>
    </div>
  );
}
