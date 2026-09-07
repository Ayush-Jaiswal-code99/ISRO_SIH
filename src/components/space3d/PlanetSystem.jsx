'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function PlanetSystem() {
  const primaryPlanetRef = useRef();
  const ringRef = useRef();
  const moonRef = useRef();
  const asteroidGroupRef = useRef();

  useFrame((state, delta) => {
    if (primaryPlanetRef.current) primaryPlanetRef.current.rotation.y += delta * 0.08;
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.03;
    if (moonRef.current) {
      const time = state.clock.getElapsedTime();
      moonRef.current.position.x = Math.sin(time * 0.3) * 14;
      moonRef.current.position.z = Math.cos(time * 0.3) * 14;
      moonRef.current.rotation.y += delta * 0.2;
    }
    if (asteroidGroupRef.current) asteroidGroupRef.current.rotation.y -= delta * 0.02;
  });

  return (
    <group position={[8, -2, -15]}>
      {/* Central Exo-Planet */}
      <mesh ref={primaryPlanetRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#0e3a5a"
          emissive="#021526"
          roughness={0.6}
          metalness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Planetary Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[5.2, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
          wireframe
        />
      </mesh>

      {/* Planetary Orbital Rings */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[6.8, 10, 64]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#083344"
          side={2}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>

      {/* Orbiting Moon */}
      <mesh ref={moonRef} position={[14, 0, 0]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.9} />
      </mesh>

      {/* Asteroid Ring Field */}
      <group ref={asteroidGroupRef} rotation={[Math.PI / 6, 0, 0]}>
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const radius = 12 + (i % 3) * 0.8;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const scale = 0.1 + (i % 4) * 0.08;
          return (
            <mesh key={i} position={[x, (i % 2 - 0.5) * 0.8, z]}>
              <dodecahedronGeometry args={[scale, 0]} />
              <meshStandardMaterial color="#64748b" roughness={0.8} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}