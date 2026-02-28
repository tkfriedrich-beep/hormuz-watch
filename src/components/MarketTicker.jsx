import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { marketData } from '../data/mockEvents';

export default function MarketTicker() {
  return (
    <div className="border border-slate-800 rounded-lg p-4 bg-slate-900/50">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-4 h-4 text-amber-500" />
        <h2 className="font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">
          Market Ticker
        </h2>
      </div>

      <div className="space-y-2">
        {marketData.map((item) => {
          const isUp = item.change > 0;
          return (
            <div
              key={item.symbol}
              className="flex items-center justify-between bg-slate-800/50 border border-slate-700/50 rounded px-3 py-2"
            >
              <div>
                <span className="font-mono text-[10px] text-slate-500 block">{item.symbol}</span>
                <span className="font-mono text-xs text-slate-300">{item.label}</span>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-bold text-slate-100">
                  {item.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  {item.unit && <span className="text-[10px] text-slate-500 ml-1">{item.unit}</span>}
                </span>
                <div className={`flex items-center justify-end gap-1 ${isUp ? 'text-red-400' : 'text-green-400'}`}>
                  {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span className="font-mono text-[10px]">
                    {isUp ? '+' : ''}{item.change.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[9px] font-mono text-slate-600 mt-3 text-center">
        DELAYED 15 MIN // WAR RISK PREMIUM ACTIVE
      </p>
    </div>
  );
}
