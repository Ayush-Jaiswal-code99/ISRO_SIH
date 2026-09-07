'use client';

import React from 'react';
import GlassCard from '../ui/GlassCard';

export default function HardwareStats({ fps, gpuLoad, inferenceTime }) {
  return (
    <GlassCard className="flex flex-col justify-between h-full">
      <h3 className="text-xs font-bold text-cyan-300 tracking-wider uppercase mb-3 flex items-center justify-between">
        <span>HARDWARE METRICS</span>
        <span className="text-[10px] text-slate-400">NVIDIA JETSON ORIN NANO</span>
      </h3>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-slate-950/80 border border-slate-800 p-2 rounded">
          <span className="block text-[10px] text-slate-400 uppercase">INFERENCE</span>
          <span className="text-lg font-bold text-cyan-400">{inferenceTime} ms</span>
        </div>
        <div className="bg-slate-950/80 border border-slate-800 p-2 rounded">
          <span className="block text-[10px] text-slate-400 uppercase">GPU LOAD</span>
          <span className="text-lg font-bold text-emerald-400">{gpuLoad}%</span>
        </div>
        <div className="bg-slate-950/80 border border-slate-800 p-2 rounded">
          <span className="block text-[10px] text-slate-400 uppercase">STREAM FPS</span>
          <span className="text-lg font-bold text-indigo-400">{fps}</span>
        </div>
      </div>

      <div className="mt-3 bg-slate-950/80 border border-slate-800/80 p-2 rounded text-[10px] text-slate-400 space-y-1">
        <div className="flex justify-between">
          <span>MODEL:</span>
          <span className="text-slate-200">YOLOv8n + MediaPipe Hands</span>
        </div>
        <div className="flex justify-between">
          <span>POWER MODE:</span>
          <span className="text-emerald-400">15W MAX-N</span>
        </div>
      </div>
    </GlassCard>
  );
}