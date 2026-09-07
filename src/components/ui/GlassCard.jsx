'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', isHazard = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-xl p-4 glass-panel shadow-2xl transition-all duration-300 ${
        isHazard ? 'animate-hazard-red border-red-500/80' : 'hover:border-cyan-500/50'
      } ${className}`}
    >
      {/* Decorative Cyber Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />

      {children}
    </motion.div>
  );
}