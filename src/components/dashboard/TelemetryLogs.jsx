'use client';

import React from 'react';
import GlassCard from '../ui/GlassCard';

export default function TelemetryLogs({ logs }) {
  return (
    <GlassCard className="flex flex-col h-full font-mono">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xs font-bold text-cyan-300 tracking-wider uppercase">
          HASH-CHAINED JSONL LOG STREAM (10Hz)
        </h3>
        <span className="text-[10px] text-cyan-500/70">CRYPTO_VERIFIED: SHA-256</span>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[180px] bg-slate-950/90 p-2.5 rounded border border-slate-800/80 text-[11px] space-y-1.5">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center justify-between border-b border-slate-900/80 pb-1">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">[{log.timestamp}]</span>
              <span className={log.status === 'HAZARD' ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                {log.action}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-[10px]">
              <span>PREV:{log.prevHash}</span>
              <span className="text-cyan-400/80">HASH:{log.hash}</span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}