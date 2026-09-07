'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CyberButton({ children, onClick, variant = 'primary', className = '' }) {
  const isPrimary = variant === 'primary';
  const isHazard = variant === 'hazard';

  const baseStyles = "relative inline-flex items-center justify-center font-mono font-bold tracking-widest uppercase transition-all duration-200 overflow-hidden px-6 py-3 rounded text-sm";
  
  const variantStyles = isHazard
    ? "bg-red-950/60 text-red-400 border border-red-500/60 hover:bg-red-600 hover:text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
    : isPrimary
    ? "bg-cyan-950/60 text-cyan-300 border border-cyan-400 hover:bg-cyan-500 hover:text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
    : "bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-slate-400 hover:text-white";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Glow pulse layer */}
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}