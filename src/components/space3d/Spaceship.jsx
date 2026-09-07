import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Spaceship({ mousePos }) {
  const shipRef = useRef();
  const thrusterRef = useRef();

  useFrame((state, delta) => {
    if (shipRef.current) {
      // Smooth tilt based on mouse cursor position
      shipRef.current.rotation.z = -mousePos.x * 0.3;
      shipRef.current.rotation.x = mousePos.y * 0.2;
      shipRef.current.position.x = mousePos.x * 1.5;
      shipRef.current.position.y = mousePos.y * 1.2;
    }

    if (thrusterRef.current) {
      // Pulsing engine flicker effect
      const t = state.clock.getElapsedTime();
      thrusterRef.current.scale.z = 1 + Math.sin(t * 15) * 0.3;
    }
  });

  return (
    <group ref={shipRef} position={[0, -0.5, 4]}>
      {/* Spaceship Main Body / Fuselage */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.6, 2.5, 5]} />
        <meshStandardMaterial color="#0284c7" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Cockpit Canopy */}
      <mesh position={[0, 0.3, 0.2]} rotation={[Math.PI / 3, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" roughness={0.1} transparent opacity={0.8} />
      </mesh>

      {/* Swept Wings */}
      <mesh position={[0, -0.2, -0.2]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.05, 0.8]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Plasma Engine Thruster Glow */}
      <group position={[0, -1.3, 0]}>
        <mesh ref={thrusterRef} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.25, 1.2, 16]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.85} />
        </mesh>
        <pointLight color="#06b6d4" intensity={3} distance={4} />
      </group>
    </group>
  );
}