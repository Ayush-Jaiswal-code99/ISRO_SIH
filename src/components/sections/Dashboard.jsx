'use client';

import React from 'react';
import LiveStream from '../dashboard/LiveStream';
import StateMachine from '../dashboard/StateMachine';
import TelemetryLogs from '../dashboard/TelemetryLogs';
import AlertPanel from '../dashboard/AlertPanel';
import HardwareStats from '../dashboard/HardwareStats';
import CyberButton from '../ui/CyberButton';

export default function Dashboard({ telemetry, onReturnHome }) {
  const {
    steps,
    currentStep,
    hasError,
    errorMessage,
    logs,
    fps,
    gpuLoad,
    inferenceTime,
    triggerError,
    clearError,
    nextStep
  } = telemetry;

  return (
    <div className="relative z-10 min-h-screen p-4 md:p-6 flex flex-col justify-between max-w-[1600px] mx-auto">
      {/* Top Header Bar */}
      <header className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 mb-4 gap-4">
        <div className="flex items-center gap-4">
          <CyberButton variant="secondary" onClick={onReturnHome} className="text-xs px-3 py-1.5">
            ← EXIT
          </CyberButton>
          <div>
            <h1 className="text-lg font-bold text-white tracking-widest font-mono">
              BAS-HAR :: MISSION CONTROL HUB
            </h1>
            <p className="text-[10px] text-slate-400 font-mono">
              AI Human Activity Recognition • Jetson Edge Node 01
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CyberButton onClick={nextStep} className="text-xs px-4 py-2">
            ADVANCE STEP
          </CyberButton>
          <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-right">
            <span className="block text-[9px] text-slate-500 font-mono">ORBIT TIME</span>
            <span className="text-xs text-cyan-400 font-mono font-bold">MET 104:12:44</span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
        {/* Left Column: Vision Stream & Telemetry Logs */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="h-[340px]">
            <LiveStream hasError={hasError} />
          </div>
          <div className="flex-1">
            <TelemetryLogs logs={logs} />
          </div>
        </div>

        {/* Right Column: FSM State Machine & Hardware / Alert Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="h-[280px]">
            <StateMachine steps={steps} currentStep={currentStep} hasError={hasError} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
            <AlertPanel
              hasError={hasError}
              errorMessage={errorMessage}
              onClearError={clearError}
              onSimulateError={triggerError}
            />
            <HardwareStats fps={fps} gpuLoad={gpuLoad} inferenceTime={inferenceTime} />
          </div>
        </div>
      </div>
    </div>
  );
}