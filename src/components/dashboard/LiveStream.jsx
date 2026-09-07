'use client';

import React, { useRef, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

export default function LiveStream({ hasError }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let handX = 160;
    let handY = 120;
    let dx = 1.5;
    let dy = 1.2;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Simulated Grid background inside Feed
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw AprilTag Fiducial Marker Reference Box
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.strokeRect(30, 30, 60, 60);
      ctx.fillStyle = '#06b6d4';
      ctx.font = '10px monospace';
      ctx.fillText('APRIL_TAG_04', 30, 24);

      // Bounce Hand Landmarks
      handX += dx;
      handY += dy;
      if (handX < 120 || handX > canvas.width - 120) dx *= -1;
      if (handY < 80 || handY > canvas.height - 80) dy *= -1;

      // Draw Hand Landmark Points & Wireframe
      const color = hasError ? '#ef4444' : '#22c55e';
      ctx.strokeStyle = color;
      ctx.fillStyle = color;

      // Outer Bounding Box (YOLO Detection)
      ctx.lineWidth = 2;
      ctx.strokeRect(handX - 50, handY - 40, 100, 110);
      ctx.fillText(
        hasError ? 'ANOMALY_DETECTION [98%]' : 'ASTRONAUT_HAND [99%]',
        handX - 50,
        handY - 46
      );

      // Draw Simulated Hand Landmarks (MediaPipe)
      const points = [
        [handX, handY + 50],
        [handX - 20, handY + 20],
        [handX - 30, handY - 10],
        [handX - 10, handY - 25],
        [handX + 10, handY - 20],
        [handX + 30, handY - 5]
      ];

      points.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect Landmarks
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      points.forEach(([px, py]) => ctx.lineTo(px, py));
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasError]);

  return (
    <GlassCard className="scanline-overlay scanline-beam flex flex-col h-full min-h-[300px]" isHazard={hasError}>
      <div className="flex justify-between items-center mb-2 z-10">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${hasError ? 'bg-red-500 animate-ping' : 'bg-green-400'}`} />
          <h3 className="text-xs font-bold text-cyan-300 tracking-wider uppercase">
            CAM_01: AI Vision Feed (MediaPipe + AprilTag)
          </h3>
        </div>
        <span className="text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
          RAW 1080P @ 60FPS
        </span>
      </div>

      <div className="relative flex-1 w-full bg-slate-950/80 rounded border border-slate-800/80 overflow-hidden">
        <canvas ref={canvasRef} width={480} height={260} className="w-full h-full object-cover" />
        
        {/* HUD Overlay Crosshairs */}
        <div className="absolute top-2 right-2 text-[9px] text-cyan-400/80 font-mono">
          X: {(120.42).toFixed(2)} Y: {(84.11).toFixed(2)} Z: {(12.05).toFixed(2)}
        </div>
      </div>
    </GlassCard>
  );
}