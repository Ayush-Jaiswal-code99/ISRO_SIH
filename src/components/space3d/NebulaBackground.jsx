import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending } from 'three';

export default function NebulaBackground() {
  const nebulaRef = useRef();

  useFrame((state, delta) => {
    if (nebulaRef.current) {
      nebulaRef.current.rotation.y += delta * 0.005;
    }
  });

  // Generate 1500 spatial dust particles
  const particleCount = 1500;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

    // Cyan & Purple Cosmic Color Palette
    colors[i * 3] = Math.random() * 0.2 + 0.1;
    colors[i * 3 + 1] = Math.random() * 0.5 + 0.4;
    colors[i * 3 + 2] = Math.random() * 0.8 + 0.2;
  }

  return (
    <points ref={nebulaRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.8}
        vertexColors
        transparent
        opacity={0.4}
        blending={AdditiveBlending}
      />
    </points>
  );
}