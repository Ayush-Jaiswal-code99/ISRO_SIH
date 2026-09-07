import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, AdditiveBlending, BackSide } from 'three';

export default function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();

  const [dayTexture, cloudTexture] = useLoader(TextureLoader, [
    '/assets/earth_day.jpg',
    '/assets/earth_clouds.jpg'
  ]);

  useFrame((state, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.02;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.035;
  });

  return (
    <group position={[7, -1, -6]} rotation={[0.3, 0, 0]}>
      {/* Rescaled Realistic Earth Mesh */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[3.2, 64, 64]} />
        <meshStandardMaterial
          map={dayTexture}
          roughness={0.65}
          metalness={0.1}
        />
      </mesh>

      {/* Realistic Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[3.25, 64, 64]} />
        <meshStandardMaterial
          alphaMap={cloudTexture}
          transparent
          opacity={0.35}
          blending={AdditiveBlending}
        />
      </mesh>

      {/* Atmospheric Glow Layer */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[3.2, 64, 64]} />
        <meshBasicMaterial
          color="#06b6d4"
          side={BackSide}
          transparent
          opacity={0.25}
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  );
}