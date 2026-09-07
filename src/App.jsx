import React from 'react';
import SpaceCanvas from '@/components/space3d/SpaceCanvas';
import HeroSection from '@/components/sections/HeroSection';
import { useTelemetry } from '@/hooks/useTelemetry';
import './App.css';

export default function App() {
  const telemetry = useTelemetry();

  return (
    <main className="relative min-h-screen text-slate-100 bg-slate-950 overflow-x-hidden">
      {/* Fixed 3D Background Canvas responding to Scroll & Mouse */}
      <SpaceCanvas />

      {/* Smooth Scrollable Landing Page and Integrated Dashboard */}
      <HeroSection telemetry={telemetry} />
    </main>
  );
}