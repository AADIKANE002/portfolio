import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCore = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#00f0ff"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>

      {/* Orbiting Particles / Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8a63f6" emissive="#8a63f6" emissiveIntensity={2} />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.015, 16, 100]} />
        <meshStandardMaterial color="#ff4154" emissive="#ff4154" emissiveIntensity={1.5} />
      </mesh>
    </Float>
  );
};

const DataCore = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#8a63f6" />
        <pointLight position={[0, 0, 0]} intensity={5} color="#ffffff" distance={10} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
        
        <AnimatedCore />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
    </div>
  );
};

export default DataCore;
