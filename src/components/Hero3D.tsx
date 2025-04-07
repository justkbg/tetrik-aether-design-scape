
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface BoxProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  pulse?: boolean;
  rotationSpeed?: number;
}

const Box: React.FC<BoxProps> = ({ position, size, color, pulse = false, rotationSpeed = 0.1 }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * rotationSpeed * 2) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.1;
      
      if (pulse) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
        mesh.current.scale.set(scale, scale, scale);
      }
    }
  });

  const colorObj = new THREE.Color(color);
  
  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={size} />
      <meshStandardMaterial 
        color={colorObj}
        metalness={0.6} 
        roughness={0.2} 
        emissive={colorObj} 
        emissiveIntensity={0.2} 
      />
    </mesh>
  );
};

interface CylinderProps {
  position: [number, number, number];
  args: [number, number, number, number];
  color: string;
  rotationAxis?: 'x' | 'y' | 'z';
}

const Cylinder: React.FC<CylinderProps> = ({ position, args, color, rotationAxis = 'y' }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      if (rotationAxis === 'x') {
        mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
      } else if (rotationAxis === 'y') {
        mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
      } else {
        mesh.current.rotation.z = state.clock.elapsedTime * 0.5;
      }
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial 
        color={new THREE.Color(color)} 
        metalness={0.7} 
        roughness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  );
};

interface HolographicGridProps {
  size: number;
  divisions: number;
  height: number;
  color: string;
}

const HolographicGrid: React.FC<HolographicGridProps> = ({ size, divisions, height, color }) => {
  const points = useMemo(() => {
    const pts = [];
    const step = size / divisions;
    
    // Create horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const x = -size / 2 + i * step;
      pts.push(new THREE.Vector3(x, height, -size / 2));
      pts.push(new THREE.Vector3(x, height, size / 2));
    }
    
    // Create vertical lines
    for (let i = 0; i <= divisions; i++) {
      const z = -size / 2 + i * step;
      pts.push(new THREE.Vector3(-size / 2, height, z));
      pts.push(new THREE.Vector3(size / 2, height, z));
    }
    
    return pts;
  }, [size, divisions, height]);
  
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);
  
  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.5 });
  }, [color]);
  
  const grid = useRef<THREE.LineSegments>(null!);
  
  useFrame((state) => {
    if (grid.current && grid.current.material) {
      // Type guard to ensure we're working with a single material that has opacity
      if (!Array.isArray(grid.current.material) && grid.current.material.transparent) {
        grid.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });
  
  return <lineSegments ref={grid} geometry={lineGeometry} material={lineMaterial} />;
};

// Represents the National Theatre of Ghana
const NationalTheatre: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Holographic grid base */}
      <HolographicGrid size={20} divisions={20} height={-2.5} color="#00E6CA" />
      
      {/* Base platform */}
      <Box position={[0, -2, 0]} size={[15, 0.5, 12]} color="#1E1E1E" />
      
      {/* Main curved roof structure - central dome */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Left wing */}
      <mesh position={[-5, 0, 0]} rotation={[0, 0, Math.PI / 2.5]}>
        <cylinderGeometry args={[3, 3, 8, 32, 1, true, -Math.PI / 2, Math.PI]} />
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.2} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Right wing */}
      <mesh position={[5, 0, 0]} rotation={[0, 0, -Math.PI / 2.5]}>
        <cylinderGeometry args={[3, 3, 8, 32, 1, true, -Math.PI / 2, Math.PI]} />
        <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.2} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Front façade */}
      <Box position={[0, -0.75, 4]} size={[15, 2, 0.5]} color="#333333" />
      
      {/* Entrance steps */}
      <Box position={[0, -1.5, 5.5]} size={[8, 0.5, 2.5]} color="#2A2A2A" />
      <Box position={[0, -1.75, 7]} size={[6, 0.5, 2.5]} color="#252525" />
      
      {/* Accent lighting */}
      <Cylinder position={[-7, 0, 3]} args={[0.1, 0.1, 4, 16]} color="#00E6CA" rotationAxis="x" />
      <Cylinder position={[7, 0, 3]} args={[0.1, 0.1, 4, 16]} color="#00E6CA" rotationAxis="x" />
      
      {/* Decorative elements */}
      <group position={[0, 5, 0]}>
        <mesh>
          <torusGeometry args={[6, 0.1, 16, 100]} />
          <meshStandardMaterial color="#00E6CA" metalness={0.9} roughness={0.1} emissive="#00E6CA" emissiveIntensity={0.5} />
        </mesh>
      </group>
      
      {/* Glowing accents on the dome */}
      <mesh position={[0, 3, 0]}>
        <ringGeometry args={[3.9, 4, 32]} />
        <meshStandardMaterial color="#00E6CA" emissive="#00E6CA" emissiveIntensity={0.5} transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

const ParticleField: React.FC = () => {
  const count = 500;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, [count]);
  
  const particles = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.05;
      particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.025) * 0.1;
    }
  });
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#00E6CA" 
        sizeAttenuation={true} 
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full">
        <fog attach="fog" args={['#0A0A0A', 20, 40]} />
        <PerspectiveCamera makeDefault position={[15, 15, 15]} />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <hemisphereLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
        />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={0.8} 
          angle={0.5}
          penumbra={1}
          color="#00E6CA"
        />
        <ParticleField />
        <NationalTheatre />
      </Canvas>
    </div>
  );
};

export default Hero3D;
