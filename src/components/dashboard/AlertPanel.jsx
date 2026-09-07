'use client';

import React from 'react';
import GlassCard from '../ui/GlassCard';
import CyberButton from '../ui/CyberButton';

export default function AlertPanel({ hasError, errorMessage, onClearError, onSimulateError }) {
  return (
    <GlassCard isHazard={hasError} className="flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold tracking-wider uppercase text-cyan-300 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${hasError ? 'bg-red-500 animate-ping' : 'bg-cyan-400'}`} />
          AURAL ALARM & PIPER TTS BROADCAST
        </h3>
        <span className="text-[10px] text-slate-400">SPEAKER: ACTIVE</span>
      </div>

      {hasError && errorMessage ? (
        <div className="bg-red-950/50 border border-red-500/50 rounded p-3 mb-3 text-red-300 text-xs space-y-1 font-mono">
          <p className="font-bold text-red-400">STATUS: OUT_OF_SEQUENCE_DEVIATION</p>
          <p>EXPECTED: {errorMessage.expected}</p>
          <p>DETECTED: {errorMessage.detected}</p>
          <p className="text-[10px] text-red-400/70">TIMESTAMP: {errorMessage.timestamp} UTC</p>
        </div>
      ) : (
        <div className="bg-slate-900/60 border border-slate-800 rounded p-3 mb-3 text-slate-400 text-xs font-mono">
          <p className="text-emerald-400 font-bold">STATUS: NOMINAL PIPELINE OPERATION</p>
          <p className="text-[11px] mt-1">AI Assistant monitor continuously listening for sequence errors.</p>
        </div>
      )}

      {/* Simulated Piper TTS Audio Wave Visualizer */}
      <div className="flex items-center justify-center gap-1 h-8 bg-slate-950/80 rounded border border-slate-800/80 px-4 mb-3">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-150 ${
              hasError ? 'bg-red-500' : 'bg-cyan-400'
            }`}
            style={{
              height: hasError ? `${Math.floor(20 + Math.random() * 80)}%` : `${Math.floor(10 + Math.random() * 30)}%`
            }}
          />
        ))}
      </div>

      {/* Control Action Buttons */}
      <div className="flex items-center gap-3">
        {hasError ? (
          <CyberButton variant="hazard" onClick={onClearError} className="w-full">
            ACKNOWLEDGE & RESET ALARM
          </CyberButton>
        ) : (
          <CyberButton variant="hazard" onClick={onSimulateError} className="w-full">
            SIMULATE ERROR DEVIATION
          </CyberButton>
        )}
      </div>
    </GlassCard>
  );
}