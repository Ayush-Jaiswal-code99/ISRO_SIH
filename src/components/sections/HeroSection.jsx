import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../ui/CyberButton';
import GlassCard from '../ui/GlassCard';
import Dashboard from './Dashboard';

export default function HeroSection({ telemetry }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 w-full text-slate-100 font-mono">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative pt-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl bg-slate-950/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative z-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-950/60 border border-cyan-400/60 text-cyan-300 text-xs tracking-widest uppercase font-bold shadow-lg">
            SIH PROJECT CONCEPT • BAS-HAR ARCHITECTURE
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]">
            AI COPILOT FOR SPACE EXPERIMENTS
          </h1>

          <h2 className="text-lg md:text-2xl text-cyan-300 font-semibold mb-6 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Autonomous Human Activity Recognition & Experiment Validation for Onboard Space Missions
          </h2>

          <p className="text-sm md:text-base text-slate-200 font-medium max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-sans">
            An offline edge-AI system that watches astronaut activities in real time, understands human-object interactions, validates experiment procedures, detects skipped or out-of-sequence actions, and provides intelligent voice guidance — directly onboard the spacecraft.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CyberButton onClick={() => scrollToSection('mission-dashboard')} className="text-sm md:text-base px-8 py-4 bg-cyan-950/60 text-cyan-300 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_20px_rgba(6,182,212,0.6)]">
              LAUNCH MISSION CONTROL ↓
            </CyberButton>
            <CyberButton variant="secondary" onClick={() => scrollToSection('mission-statement')} className="text-sm md:text-base px-8 py-4 bg-slate-900/60 text-slate-300 border border-slate-600 hover:border-cyan-400">
              EXPLORE TECHNOLOGY
            </CyberButton>
          </div>
        </motion.div>

        {/* STATUS BAR */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold bg-slate-950/40 px-6 py-2.5 rounded-full border border-slate-700/60 backdrop-blur-md shadow-2xl relative z-20">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            EDGE AI ACTIVE
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            OFFLINE MODE READY
          </span>
        </div>
      </section>

      {/* 2. MISSION STATEMENT */}
      <section id="mission-statement" className="max-w-5xl mx-auto px-6 py-20 relative z-20">
        <GlassCard className="bg-slate-950/30 border-cyan-500/40 p-8 md:p-12">
          <div className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-2">// MISSION STATEMENT</div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Making Scientific Experiments Smarter, Safer & Autonomous
          </h2>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-6 font-sans">
            Future lunar and deep-space missions cannot always depend on continuous communication with Earth. Our system brings intelligent experiment monitoring directly onboard the spacecraft.
          </p>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-6 font-sans">
            Instead of continuously transmitting raw video, the AI locally understands what the astronaut is doing and converts visual activity into meaningful experiment events.
          </p>
          <div className="p-4 bg-cyan-950/40 border-l-4 border-cyan-400 rounded text-xs text-cyan-200 font-mono">
            NASA has similarly explored onboard AI for autonomous processing and decision-making, including systems designed to reduce dependence on downlink resources.
          </div>
        </GlassCard>
      </section>

      {/* 3. THE PROBLEM & APPROACH */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
        <div className="text-center mb-12">
          <div className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-2">// THE PARADIGM SHIFT</div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            When Earth Is Too Far Away, Intelligence Must Be Onboard
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl mx-auto font-sans">
            During space missions, astronauts perform complex scientific procedures involving multiple tools, objects and sequential actions. A single skipped or incorrectly ordered step can compromise an experiment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Way */}
          <GlassCard className="bg-slate-950/30 border-red-500/30 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <span>⚠️ CURRENT CHALLENGE</span>
            </h3>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-center">ASTRONAUT IN ACTION</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-center">RAW VIDEO CAPTURE</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-center text-amber-400">HIGH-LATENCY DOWNLINK LINK</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-center">EARTH MISSION CONTROL ANALYSIS</div>
            </div>
            <p className="text-xs text-red-300/80 mt-6 font-sans">
              Inefficient, bandwidth-heavy, and susceptible to severe communications delay during deep-space operations.
            </p>
          </GlassCard>

          {/* BAS-HAR Way */}
          <GlassCard className="bg-slate-950/30 border-emerald-500/40 p-6">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <span>🚀 OUR AUTONOMOUS APPROACH</span>
            </h3>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-center">ASTRONAUT IN ACTION</div>
              <div className="text-center text-cyan-400">↓</div>
              <div className="bg-cyan-950/40 p-2.5 rounded border border-cyan-500/40 text-center text-cyan-300 font-bold">ONBOARD EDGE AI</div>
              <div className="text-center text-cyan-400">↓</div>
              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-center">REAL-TIME ACTIVITY UNDERSTANDING</div>
              <div className="text-center text-cyan-400">↓</div>
              <div className="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/40 text-center text-emerald-300 font-bold">INSTANT DECISION & VOICE GUIDANCE</div>
            </div>
            <p className="text-xs text-emerald-300/80 mt-6 font-sans">
              Intelligence moves directly to the astronaut for immediate, zero-latency feedback.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 4. SOLUTION & CORE LOOP */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
        <div className="text-center mb-12">
          <div className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-2">// SOLUTION OVERVIEW</div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Meet Your Onboard AI Experiment Copilot
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl mx-auto font-sans">
            Transforms a conventional payload camera into an intelligent experiment-monitoring hub.
          </p>
        </div>

        {/* 5-Step Core Loop Horizontal Tracker */}
        <div className="mb-12 bg-slate-950/30 p-6 rounded-xl border border-cyan-500/30 backdrop-blur-md">
          <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-6 text-center">// CORE COGNITIVE LOOP</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-mono">
            {['SEE', 'UNDERSTAND', 'VALIDATE', 'GUIDE', 'LOG'].map((step, idx) => (
              <div key={idx} className="bg-slate-900/80 p-3 rounded border border-cyan-500/30">
                <span className="block text-[10px] text-cyan-400 font-bold">0{idx + 1}</span>
                <span className="text-xs md:text-sm font-black text-white">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What AI understands grid */}
        <GlassCard className="bg-slate-950/30 border-cyan-500/30 p-8">
          <h3 className="text-lg font-bold text-cyan-300 mb-6">// WHAT THE AI CONTINUOUSLY TRACKS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
              <strong className="text-cyan-400 block mb-1">WHO</strong>
              Identifies astronaut position & hands
            </div>
            <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
              <strong className="text-cyan-400 block mb-1">WHAT</strong>
              Detects current active gesture or tool motion
            </div>
            <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
              <strong className="text-cyan-400 block mb-1">WHICH OBJECT</strong>
              Classifies tools, vials & instruments
            </div>
            <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
              <strong className="text-cyan-400 block mb-1">SEQUENCE STATUS</strong>
              Validates step order & predicts next action
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 5. HOW IT WORKS (PIPELINE BREAKDOWN) */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-300 mb-12 text-center tracking-widest uppercase">
          // PIPELINE ARCHITECTURE (01 TO 06)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <span className="text-cyan-400 font-bold text-xs">01 — PERCEIVE</span>
            <h3 className="text-base font-bold text-white my-2">Camera Feed Input</h3>
            <p className="text-xs text-slate-300 font-sans mb-3">
              Detects Astronaut, Tools, Equipment, Payload Rack, Switches, and Sample Vials from camera feed.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <span className="text-cyan-400 font-bold text-xs">02 — TRACK</span>
            <h3 className="text-base font-bold text-white my-2">Pose Estimation</h3>
            <p className="text-xs text-slate-300 font-sans mb-3">
              Estimates 3D body pose landmarks: Shoulder, Elbow, Wrist, Hip, Knee, and Ankle joints in real time.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <span className="text-cyan-400 font-bold text-xs">03 — UNDERSTAND</span>
            <h3 className="text-base font-bold text-white my-2">Action Fusion</h3>
            <p className="text-xs text-slate-300 font-sans mb-3">
              Fuses Pose + Object Detection + Temporal Motion data to derive exact intent (e.g., PICK TOOL).
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <span className="text-cyan-400 font-bold text-xs">04 — VALIDATE</span>
            <h3 className="text-base font-bold text-white my-2">FSM Sequence Check</h3>
            <p className="text-xs text-slate-300 font-sans mb-3">
              Compares detected actions against predefined experiment protocol steps to spot out-of-sequence errors.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <span className="text-cyan-400 font-bold text-xs">05 — GUIDE</span>
            <h3 className="text-base font-bold text-white my-2">Piper Voice Feedback</h3>
            <p className="text-xs text-slate-300 font-sans mb-3">
              Provides immediate audio prompts guiding astronaut to the next correct sequence action.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <span className="text-cyan-400 font-bold text-xs">06 — RECORD</span>
            <h3 className="text-base font-bold text-white my-2">Lightweight Logging</h3>
            <p className="text-xs text-slate-300 font-sans mb-3">
              Generates lightweight, cryptographically hashed JSONL execution records for flight review.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 6. CORE FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-300 mb-12 text-center tracking-widest uppercase">
          // SYSTEM CAPABILITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="bg-slate-950/30 border-cyan-500/30 p-6">
            <h3 className="text-base font-bold text-cyan-300 mb-2">🧠 AI Activity Recognition</h3>
            <p className="text-xs text-slate-300 font-sans">
              Recognizes complex operational gestures: Pick Tool, Connect Tool, Activate Equipment, Insert Sample, Record Reading, and Place Tool.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/30 p-6">
            <h3 className="text-base font-bold text-cyan-300 mb-2">🎯 Human-Object Interaction (HOI)</h3>
            <p className="text-xs text-slate-300 font-sans">
              Understands precise micro-interactions: TOUCH, HOLD, PICK, PLACE, CONNECT, and USE.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/30 p-6">
            <h3 className="text-base font-bold text-cyan-300 mb-2">🔄 Sequence Validation</h3>
            <p className="text-xs text-slate-300 font-sans">
              Maintains strict state verification across experiment steps to ensure zero missed protocols.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-cyan-500/30 p-6">
            <h3 className="text-base font-bold text-cyan-300 mb-2">🔊 Intelligent Voice & Logging</h3>
            <p className="text-xs text-slate-300 font-sans">
              Outputs localized Piper TTS spoken warnings and records 10Hz hash-chained log ledgers.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 7. EMBEDDED MISSION CONTROL DASHBOARD */}
      <section id="mission-dashboard" className="max-w-[1600px] mx-auto px-4 py-16 relative z-20">
        <div className="border-t border-cyan-500/40 pt-10 mb-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 tracking-wider">
                [ LIVE MISSION CONTROL DASHBOARD ]
              </h2>
              <p className="text-xs text-slate-400 mt-1">Real-time edge telemetry feed, AI vision stream, and sequence tracking.</p>
            </div>
            <CyberButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs px-4 py-2">
              ↑ BACK TO TOP
            </CyberButton>
          </div>
        </div>

        <Dashboard telemetry={telemetry} onReturnHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </section>
    </div>
  );
}