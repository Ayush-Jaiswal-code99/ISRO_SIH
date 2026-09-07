import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function PlanetSystem() {
  const sunGlowRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (sunGlowRef.current) {
      sunGlowRef.current.rotation.y += delta * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group position={[0, -2, -15]}>
      {/* Sun Central Light Core */}
      <mesh ref={sunGlowRef}>
        <sphereGeometry args={[6.5, 32, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.35} wireframe />
      </mesh>

      {/* Orbital Ring Field */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.3, 0, 0]}>
        <ringGeometry args={[14, 22, 64]} />
        <meshStandardMaterial color="#f59e0b" emissive="#b45309" side={2} transparent opacity={0.3} wireframe />
      </mesh>
    </group>
  );
}