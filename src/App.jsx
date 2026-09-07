import React, { useState } from 'react';
import SpaceCanvas from '@/components/space3d/SpaceCanvas';
import HeroSection from '@/components/sections/HeroSection';
import Dashboard from '@/components/sections/Dashboard';
import { useTelemetry } from '@/hooks/useTelemetry';
import './App.css';

export default function App() {
  const [isDashboardView, setIsDashboardView] = useState(false);
  const telemetry = useTelemetry();

  return (
    <main className="relative min-h-screen text-slate-100 bg-slate-950 overflow-hidden">
      {/* Interactive 3D Space Background Layer */}
      <SpaceCanvas isDashboardView={isDashboardView} />

      {/* View Transition State Handler */}
      {!isDashboardView ? (
        <HeroSection onLaunch={() => setIsDashboardView(true)} />
      ) : (
        <Dashboard telemetry={telemetry} onReturnHome={() => setIsDashboardView(false)} />
      )}
    </main>
  );
}