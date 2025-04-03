
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface BoxProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}

const Box: React.FC<BoxProps> = ({ position, size, color }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Architecture3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <Box position={[0, -2, 0]} size={[10, 0.5, 10]} color="#1E1E1E" />
      
      {/* Main structure */}
      <Box position={[0, 0, 0]} size={[5, 3, 5]} color="#333333" />
      
      {/* Upper level */}
      <Box position={[0, 2, 0]} size={[7, 0.5, 7]} color="#1E1E1E" />
      
      {/* Second level structure */}
      <Box position={[0, 3.5, 0]} size={[3, 2, 3]} color="#333333" />
      
      {/* Top level */}
      <Box position={[0, 5, 0]} size={[4, 0.5, 4]} color="#1E1E1E" />
      
      {/* Accent elements */}
      <Box position={[-2.5, 0, 2.5]} size={[0.5, 5, 0.5]} color="#00E6CA" />
      <Box position={[2.5, 0, 2.5]} size={[0.5, 6, 0.5]} color="#00E6CA" />
      <Box position={[2.5, 0, -2.5]} size={[0.5, 4, 0.5]} color="#00E6CA" />
      <Box position={[-2.5, 0, -2.5]} size={[0.5, 7, 0.5]} color="#00E6CA" />
    </group>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[15, 15, 15]} />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.5}
        />
        <hemisphereLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
        />
        <Architecture3D />
      </Canvas>
    </div>
  );
};

export default Hero3D;
