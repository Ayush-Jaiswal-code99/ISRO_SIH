import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SpaceshipWithAstronaut({ mousePos }) {
  const shipRef = useRef();
  const thrusterRef = useRef();

  useFrame((state) => {
    if (shipRef.current) {
      // Smooth tilt and cursor inertia
      shipRef.current.rotation.z = -mousePos.x * 0.25;
      shipRef.current.rotation.x = mousePos.y * 0.2;
      shipRef.current.position.x = mousePos.x * 1.8;
      shipRef.current.position.y = mousePos.y * 1.2;
    }

    if (thrusterRef.current) {
      const t = state.clock.getElapsedTime();
      thrusterRef.current.scale.z = 1 + Math.sin(t * 18) * 0.3;
    }
  });

  return (
    <group ref={shipRef} position={[-2, -1, 3]} scale={[0.85, 0.85, 0.85]}>
      {/* Main Spaceship Hull */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.8, 3, 6]} />
        <meshStandardMaterial color="#0284c7" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Cockpit Canopy Glass */}
      <mesh position={[0, 0.4, 0.3]} rotation={[Math.PI / 3, 0, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#06b6d4" emissive="#0284c7" roughness={0.1} transparent opacity={0.65} />
      </mesh>

      {/* --- ASTRONAUT INSIDE COCKPIT --- */}
      <group position={[0, 0.35, 0.2]}>
        {/* Helmet Visor */}
        <mesh position={[0, 0.05, 0.05]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#f59e0b" metalness={1} roughness={0.1} />
        </mesh>
        {/* Space Suit Body */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.25, 8]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.5} />
        </mesh>
      </group>

      {/* Swept Wing Panels */}
      <mesh position={[0, -0.3, -0.3]}>
        <boxGeometry args={[3.8, 0.06, 1]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} />
      </mesh>

      {/* Plasma Thruster Glow */}
      <group position={[0, -1.6, 0]}>
        <mesh ref={thrusterRef} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.3, 1.5, 16]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
        </mesh>
        <pointLight color="#38bdf8" intensity={4} distance={5} />
      </group>
    </group>
  );
}