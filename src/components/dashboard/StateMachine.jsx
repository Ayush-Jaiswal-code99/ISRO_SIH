'use client';

import React from 'react';
import GlassCard from '../ui/GlassCard';

export default function StateMachine({ steps, currentStep, hasError }) {
  return (
    <GlassCard className="flex flex-col h-full">
      <h3 className="text-xs font-bold text-cyan-300 tracking-wider uppercase mb-4 flex items-center justify-between">
        <span>FSM Experiment Sequence</span>
        <span className="text-[10px] text-slate-400">STATE: STEP 0{currentStep}/06</span>
      </h3>

      <div className="relative flex-1 flex flex-col justify-between pl-4">
        {/* Vertical Connecting Guide Line */}
        <div className="absolute left-[23px] top-3 bottom-3 w-0.5 bg-slate-800" />

        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isDone = step.id < currentStep;

          return (
            <div key={step.id} className="relative flex items-start gap-4 z-10 my-1">
              {/* Step Circle Status Indicator */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                  hasError && isActive
                    ? 'bg-red-500 text-white shadow-[0_0_12px_#ef4444]'
                    : isActive
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_12px_#06b6d4]'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                    : 'bg-slate-900 text-slate-600 border border-slate-800'
                }`}
              >
                {step.id}
              </div>

              {/* Step Details */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`text-xs font-bold tracking-wide ${
                      hasError && isActive
                        ? 'text-red-400'
                        : isActive
                        ? 'text-cyan-300'
                        : isDone
                        ? 'text-emerald-400/80'
                        : 'text-slate-500'
                    }`}
                  >
                    {step.title}
                  </h4>
                  {isActive && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 animate-pulse">
                      ACTIVE
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}