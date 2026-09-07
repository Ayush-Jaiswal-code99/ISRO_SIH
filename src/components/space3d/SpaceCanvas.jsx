'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import PlanetSystem from './PlanetSystem';
import SpaceStation from './SpaceStation';

function CameraRig({ isDashboardView }) {
  useFrame((state) => {
    const targetZ = isDashboardView ? 12 : 18;
    const targetY = isDashboardView ? 2 : 0;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function SpaceCanvas({ isDashboardView }) {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} intensity={1.5} color="#38bdf8" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

        <CameraRig isDashboardView={isDashboardView} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <SpaceStation isDashboardView={isDashboardView} />
        </Float>

        <PlanetSystem />
      </Canvas>
    </div>
  );
}