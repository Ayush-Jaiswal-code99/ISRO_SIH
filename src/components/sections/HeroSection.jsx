import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../ui/CyberButton';
import GlassCard from '../ui/GlassCard';
import Dashboard from './Dashboard';

export default function HeroSection({ telemetry }) {
  const scrollToDashboard = () => {
    document.getElementById('mission-dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 w-full text-slate-100 font-mono">
      {/* SECTION 1: HERO LANDING */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl bg-slate-950/20 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative z-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-950/40 border border-cyan-400/60 text-cyan-300 text-xs tracking-widest uppercase font-bold shadow-lg">
            SIH PROJECT CONCEPT • BAS-HAR ARCHITECTURE
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-[0_0_25px_rgba(6,182,212,0.9)]">
            BAS - HAR
          </h1>

          <p className="text-base md:text-lg text-slate-100 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            AI Human Activity Recognition for On-board BAS Experiments. Real-time 3D vision pose estimation, spatial tracking & automated FSM sequence verification.
          </p>

          <CyberButton onClick={scrollToDashboard} className="text-sm md:text-base px-8 py-4 bg-cyan-950/60 text-cyan-300 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_20px_rgba(6,182,212,0.6)]">
            LAUNCH MISSION CONTROL PANEL ↓
          </CyberButton>
        </motion.div>

        {/* BOTTOM METRICS BAR */}
        <div className="mt-8 flex gap-6 md:gap-10 text-xs font-bold bg-slate-950/30 px-6 py-2.5 rounded-full border border-slate-700/60 backdrop-blur-md shadow-2xl relative z-20">
          <span>SYSTEM: <strong className="text-emerald-400">ONLINE</strong></span>
          <span>ORBIT: <strong className="text-cyan-400">408 KM (ISS)</strong></span>
          <span>LATENCY: <strong className="text-indigo-400">12ms</strong></span>
        </div>
      </section>

      {/* SECTION 2: SYSTEM ARCHITECTURE & FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative z-20">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-12 text-center tracking-widest uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          // SYSTEM CAPABILITIES & PIPELINE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="bg-slate-950/30 border-cyan-500/40">
            <h3 className="text-base font-bold text-cyan-300 mb-2">01. 3D Pose & AprilTag Calibration</h3>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              Utilizes MediaPipe hand landmarks aligned against physical AprilTag spatial matrices for millimeter-accurate experiment positioning inside Microgravity payload racks.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-emerald-500/40">
            <h3 className="text-base font-bold text-emerald-300 mb-2">02. FSM Sequence Verification</h3>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              Deterministic Finite State Machines constantly validate astronaut operational steps against protocol specs to prevent procedural experiment anomalies.
            </p>
          </GlassCard>

          <GlassCard className="bg-slate-950/30 border-indigo-500/40">
            <h3 className="text-base font-bold text-indigo-300 mb-2">03. Cryptographic Log Ledger</h3>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              Outputs continuous 10Hz SHA-256 hash-chained telemetry streams directly to Jetson Orin Nano edge storage to ensure zero data tampering.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 3: EMBEDDED MISSION CONTROL DASHBOARD */}
      <section id="mission-dashboard" className="max-w-[1600px] mx-auto px-4 py-12 relative z-20">
        <div className="border-t border-cyan-500/30 pt-8 mb-6">
          <h2 className="text-xl font-bold text-cyan-300 tracking-wider">
            [ LIVE TELEMETRY & CONTROL PANEL ]
          </h2>
          <p className="text-xs text-slate-400">Interactive simulation feed synced with spatial telemetry.</p>
        </div>

        <Dashboard telemetry={telemetry} onReturnHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </section>
    </div>
  );
}