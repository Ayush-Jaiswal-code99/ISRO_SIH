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
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs tracking-widest uppercase">
            SIH PROJECT CONCEPT • BAS-HAR ARCHITECTURE
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-cyan-500 mb-6 drop-shadow-[0_0_35px_rgba(6,182,212,0.6)]">
            BAS - HAR
          </h1>

          <p className="text-lg md:text-xl text-cyan-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI Human Activity Recognition for On-board BAS Experiments. Real-time 3D vision pose estimation, spatial tracking & automated FSM sequence verification.
          </p>

          <CyberButton onClick={scrollToDashboard} className="text-base px-10 py-5">
            LAUNCH MISSION CONTROL PANEL ↓
          </CyberButton>
        </motion.div>

        <div className="absolute bottom-8 flex gap-8 text-slate-400 text-xs">
          <span>SYSTEM: <strong className="text-emerald-400">ONLINE</strong></span>
          <span>ORBIT: <strong className="text-cyan-400">408 KM (ISS)</strong></span>
          <span>LATENCY: <strong className="text-indigo-400">12ms</strong></span>
        </div>
      </section>

      {/* SECTION 2: SYSTEM ARCHITECTURE & FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-12 text-center tracking-widest uppercase">
          // SYSTEM CAPABILITIES & PIPELINE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">01. 3D Pose & AprilTag Calibration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Utilizes MediaPipe hand landmarks aligned against physical AprilTag spatial matrices for millimeter-accurate experiment positioning inside Microgravity payload racks.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-bold text-emerald-300 mb-2">02. FSM Sequence Verification</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deterministic Finite State Machines constantly validate astronaut operational steps against protocol specs to prevent procedural experiment anomalies.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-bold text-indigo-300 mb-2">03. Cryptographic Log Ledger</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Outputs continuous 10Hz SHA-256 hash-chained telemetry streams directly to Jetson Orin Nano edge storage to ensure zero data tampering.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 3: EMBEDDED MISSION CONTROL DASHBOARD */}
      <section id="mission-dashboard" className="max-w-[1600px] mx-auto px-4 py-12">
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