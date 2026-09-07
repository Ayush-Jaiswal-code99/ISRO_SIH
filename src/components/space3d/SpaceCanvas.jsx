import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import Earth from './Earth';
import SpaceshipWithAstronaut from './SpaceshipWithAstronaut';
import SpaceStation from './SpaceStation';
import NebulaBackground from './NebulaBackground';

function DynamicScene({ scrollY, mousePos }) {
  const groupRef = useRef();

  useFrame((state) => {
    const targetZ = 16 - scrollY * 0.008;
    const targetY = -scrollY * 0.005;

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;

    state.camera.rotation.y = (scrollY * 0.0003) + mousePos.x * 0.08;
    state.camera.rotation.x = -mousePos.y * 0.06;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={150} depth={60} count={9000} factor={6} saturation={0} fade speed={1.2} />

      <NebulaBackground />

      <SpaceshipWithAstronaut mousePos={mousePos} />

      <React.Suspense fallback={null}>
        <Earth />
      </React.Suspense>

      <group position={[-7, 1.5, -8]} scale={[0.6, 0.6, 0.6]}>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <SpaceStation isDashboardView={false} />
        </Float>
      </group>
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
        <ambientLight intensity={0.9} />
        <directionalLight position={[12, 8, 10]} intensity={2.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#38bdf8" />

        <DynamicScene scrollY={scrollY} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}