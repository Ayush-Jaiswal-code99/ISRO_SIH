import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import PlanetSystem from './PlanetSystem';
import SpaceStation from './SpaceStation';
import Spaceship from './Spaceship';

function DynamicScene({ scrollY, mousePos }) {
  const groupRef = useRef();

  useFrame((state) => {
    // Scroll height shifts camera position depth-wise across the solar system
    const targetZ = 16 - scrollY * 0.012;
    const targetY = -scrollY * 0.008;
    const targetRotY = scrollY * 0.0005;

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;

    // Interactive Mouse Tilt
    state.camera.rotation.y = targetRotY + mousePos.x * 0.1;
    state.camera.rotation.x = -mousePos.y * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={120} depth={60} count={7000} factor={5} saturation={0} fade speed={1.5} />
      
      {/* Player Spaceship floating with player mouse movements */}
      <Spaceship mousePos={mousePos} />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <SpaceStation isDashboardView={false} />
      </Float>

      <PlanetSystem />
    </group>
  );
}

export default function SpaceCanvas() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 16], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 20, 20]} intensity={1.8} color="#38bdf8" />
        <directionalLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />

        <DynamicScene scrollY={scrollY} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}