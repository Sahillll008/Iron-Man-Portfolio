import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Text3D, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function ArcReactor() {
  const arcRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (arcRef.current) {
      arcRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -clock.getElapsedTime() * 1;
    }
  });

  return (
    <group ref={arcRef} position={[0, 0, -5]} scale={0.8}>
      {/* Core */}
      <mesh position={[0, 0, 0.1]}>
        <circleGeometry args={[0.8, 32]} />
        <meshStandardMaterial
          color="#00bfff"
          emissive="#00bfff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Inner Ring */}
      <group ref={innerRingRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i * Math.PI * 2) / 8) * 0.5,
              Math.sin((i * Math.PI * 2) / 8) * 0.5,
              0
            ]}
            rotation={[0, 0, (i * Math.PI * 2) / 8]}
          >
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color="#0088cc"
              emissive="#0088cc"
              emissiveIntensity={1}
            />
          </mesh>
        ))}
      </group>

      {/* Outer Rings */}
      {[1.2, 1.5, 1.8].map((radius, i) => (
        <mesh key={i} rotation={[0, 0, i * Math.PI / 6]}>
          <ringGeometry args={[radius - 0.05, radius, 64]} />
          <meshStandardMaterial
            color="#00bfff"
            emissive="#00bfff"
            emissiveIntensity={1.5}
            transparent
            opacity={0.7 - i * 0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function JarvisInterface() {
  const interfaceRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (interfaceRef.current) {
      interfaceRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  const circuitPatterns = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      ],
      scale: 0.1 + Math.random() * 0.3
    }));
  }, []);

  return (
    <group ref={interfaceRef} position={[0, 0, -10]}>
      {/* JARVIS Text */}
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        position={[0, 2, 0]}
      >
        <Text3D
          font="/fonts/Roboto_Regular.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          JARVIS INTERFACE
          <meshStandardMaterial
            color="#00bfff"
            emissive="#00bfff"
            emissiveIntensity={1}
          />
        </Text3D>
      </Float>

      {/* Circuit Patterns */}
      {circuitPatterns.map((pattern, i) => (
        <group key={i} position={pattern.position as [number, number, number]}>
          <mesh scale={pattern.scale}>
            <boxGeometry args={[1, 0.05, 0.05]} />
            <meshStandardMaterial
              color="#0088cc"
              emissive="#0088cc"
              emissiveIntensity={1}
              transparent
              opacity={0.6}
            />
          </mesh>
          <mesh scale={pattern.scale} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[1, 0.05, 0.05]} />
            <meshStandardMaterial
              color="#0088cc"
              emissive="#0088cc"
              emissiveIntensity={1}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function HologramParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 15;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    const color = new THREE.Color();
    color.setHSL(0.6 + Math.random() * 0.1, 1, 0.5 + Math.random() * 0.5);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function MovingCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ clock }) => {
    if (cameraRef.current) {
      const time = clock.getElapsedTime();
      cameraRef.current.position.x = Math.sin(time * 0.2) * 2;
      cameraRef.current.position.y = Math.cos(time * 0.2) * 2;
      cameraRef.current.lookAt(0, 0, -5);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={45} />;
}

const IronManBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 5, 30]} />
        <ambientLight intensity={0.2} />
        
        <MovingCamera />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
          speed={1}
        />
        
        <ArcReactor />
        <JarvisInterface />
        <HologramParticles />

        {/* Accent Lights */}
        <pointLight position={[5, 5, -5]} intensity={0.5} color="#0088cc" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00bfff" />
      </Canvas>
    </div>
  );
};

export default IronManBackground;