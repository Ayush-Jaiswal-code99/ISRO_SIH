'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SpaceStation({ isDashboardView }) {
  const stationGroupRef = useRef();

  useFrame((state, delta) => {
    if (stationGroupRef.current) {
      stationGroupRef.current.rotation.y += delta * 0.05;
      stationGroupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <group
      ref={stationGroupRef}
      position={isDashboardView ? [-6, 1, -6] : [0, 0, 0]}
      scale={isDashboardView ? [0.75, 0.75, 0.75] : [1, 1, 1]}
    >
      {/* Central Core Tube */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 8, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Central Module Hub */}
      <mesh>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Solar Panel Wing Truss Structures */}
      {[-3, 3].map((offsetY, idx) => (
        <group key={idx} position={[0, offsetY, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.15, 0.15, 10, 8]} />
            <meshStandardMaterial color="#64748b" metalness={0.5} />
          </mesh>

          {/* Left Solar Array */}
          <mesh position={[-3.5, 0, 0]}>
            <boxGeometry args={[3, 0.05, 1.2]} />
            <meshStandardMaterial color="#0284c7" emissive="#0369a1" roughness={0.3} wireframe />
          </mesh>

          {/* Right Solar Array */}
          <mesh position={[3.5, 0, 0]}>
            <boxGeometry args={[3, 0.05, 1.2]} />
            <meshStandardMaterial color="#0284c7" emissive="#0369a1" roughness={0.3} wireframe />
          </mesh>
        </group>
      ))}

      {/* Rotating Habitat Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.3, 16, 32]} />
        <meshStandardMaterial color="#0f172a" emissive="#0ea5e9" wireframe />
      </mesh>

      {/* Beacon Lights */}
      <pointLight position={[0, 4.2, 0]} color="#ef4444" intensity={2} distance={5} />
      <pointLight position={[0, -4.2, 0]} color="#06b6d4" intensity={2} distance={5} />
    </group>
  );
}