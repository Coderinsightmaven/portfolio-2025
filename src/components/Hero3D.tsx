'use client';

import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function RivetMark({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const floatProps = reducedMotion 
    ? { speed: 0, rotationIntensity: 0, floatIntensity: 0 }
    : { speed: 1.5, rotationIntensity: 0.2, floatIntensity: 0.3, floatingRange: [-0.05, 0.05] as [number, number] };

  return (
    <Float {...floatProps}>
      <group ref={groupRef} position={[0, 0, 0]}>
        <RoundedBox
          args={[1.8, 1.8, 0.35]}
          radius={0.15}
          smoothness={4}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color="#1E222B"
            metalness={0.1}
            roughness={0.8}
          />
        </RoundedBox>
        
        <RoundedBox
          args={[0.25, 0.9, 0.15]}
          radius={0.06}
          smoothness={4}
          position={[-0.45, 0, 0.15]}
        >
          <meshStandardMaterial
            color="#3D9CFF"
            metalness={0.2}
            roughness={0.6}
          />
        </RoundedBox>
        
        <RoundedBox
          args={[0.65, 0.25, 0.15]}
          radius={0.06}
          smoothness={4}
          position={[-0.15, 0.32, 0.15]}
        >
          <meshStandardMaterial
            color="#3D9CFF"
            metalness={0.2}
            roughness={0.6}
          />
        </RoundedBox>
        
        <RoundedBox
          args={[0.55, 0.25, 0.15]}
          radius={0.06}
          smoothness={4}
          position={[-0.2, 0, 0.15]}
        >
          <meshStandardMaterial
            color="#F2F3F5"
            metalness={0.1}
            roughness={0.7}
          />
        </RoundedBox>
        
        <RoundedBox
          args={[0.65, 0.25, 0.15]}
          radius={0.06}
          smoothness={4}
          position={[-0.15, -0.32, 0.15]}
        >
          <meshStandardMaterial
            color="#3D9CFF"
            metalness={0.2}
            roughness={0.6}
          />
        </RoundedBox>
        
        <RoundedBox
          args={[0.12, 0.12, 0.2]}
          radius={0.03}
          smoothness={4}
          position={[0.5, 0.32, 0.18]}
        >
          <meshStandardMaterial
            color="#F2F3F5"
            metalness={0.3}
            roughness={0.5}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow={false}
      />
      <directionalLight
        position={[-3, 2, 4]}
        intensity={0.3}
        color="#3D9CFF"
      />
      <RivetMark reducedMotion={reducedMotion} />
    </>
  );
}

export default function Hero3D() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>
    </div>
  );
}
