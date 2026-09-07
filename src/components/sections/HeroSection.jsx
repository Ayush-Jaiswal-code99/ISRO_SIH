'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../ui/CyberButton';

export default function HeroSection({ onLaunch }) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Title Fade & Scale Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase">
          SIH Project Concept • BAS-HAR Architecture
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-cyan-500 mb-6 drop-shadow-[0_0_35px_rgba(6,182,212,0.6)]">
          BAS - HAR
        </h1>

        <p className="text-lg md:text-xl font-mono text-cyan-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Human Activity Recognition for On-board BAS Experiments. Real-time 3D vision pose estimation, spatial tracking & automated FSM sequence verification.
        </p>

        {/* Launch Mission Dashboard CTA */}
        <CyberButton onClick={onLaunch} className="text-base px-10 py-5">
          INITIALIZE MISSION PIPELINE
        </CyberButton>
      </motion.div>

      {/* Decorative Bottom Aerospace Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-slate-500 font-mono text-xs"
      >
        <div>SYSTEM: <span className="text-emerald-400">ONLINE</span></div>
        <div>ORBIT: <span className="text-cyan-400">408 KM (ISS)</span></div>
        <div>LATENCY: <span className="text-indigo-400">12ms</span></div>
      </motion.div>
    </div>
  );
}