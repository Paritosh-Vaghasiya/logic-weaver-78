import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Animated grid plane with pulse effect
function AnimatedGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = -Math.PI / 2.5 + Math.sin(clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const lines = useMemo(() => {
    const arr: JSX.Element[] = [];
    const spacing = 2;
    const count = 20;
    
    for (let i = -count; i <= count; i++) {
      // Horizontal lines
      arr.push(
        <Line
          key={`h-${i}`}
          points={[
            [-count * spacing, 0, i * spacing],
            [count * spacing, 0, i * spacing],
          ]}
          color="#22c55e"
          lineWidth={0.5}
          opacity={0.15}
          transparent
        />
      );
      // Vertical lines
      arr.push(
        <Line
          key={`v-${i}`}
          points={[
            [i * spacing, 0, -count * spacing],
            [i * spacing, 0, count * spacing],
          ]}
          color="#22c55e"
          lineWidth={0.5}
          opacity={0.15}
          transparent
        />
      );
    }
    return arr;
  }, []);

  return (
    <group ref={gridRef} position={[0, -5, -15]}>
      {lines}
    </group>
  );
}

// Floating particles system
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22c55e"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Geometric floating shapes
function FloatingGeometry() {
  const group1Ref = useRef<THREE.Mesh>(null);
  const group2Ref = useRef<THREE.Mesh>(null);
  const group3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (group1Ref.current) {
      group1Ref.current.rotation.x = t * 0.3;
      group1Ref.current.rotation.y = t * 0.2;
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.x = t * 0.2;
      group2Ref.current.rotation.z = t * 0.3;
    }
    if (group3Ref.current) {
      group3Ref.current.rotation.y = t * 0.25;
      group3Ref.current.rotation.z = t * 0.15;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[8, 3, -5]}>
        <mesh ref={group1Ref}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial color="#22c55e" wireframe opacity={0.4} transparent />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8} position={[-10, -2, -8]}>
        <mesh ref={group2Ref}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshBasicMaterial color="#22c55e" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2} position={[5, -4, -12]}>
        <mesh ref={group3Ref}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#22c55e" wireframe opacity={0.25} transparent />
        </mesh>
      </Float>
    </>
  );
}

// Data stream lines
function DataStreams() {
  const streamRefs = useRef<THREE.Mesh[]>([]);

  const streams = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      startX: (Math.random() - 0.5) * 30,
      startY: 15,
      startZ: -10 - Math.random() * 20,
      speed: 0.5 + Math.random() * 0.5,
      delay: Math.random() * 10,
    }));
  }, []);

  useFrame(({ clock }) => {
    streamRefs.current.forEach((ref, i) => {
      if (ref) {
        const stream = streams[i];
        const t = (clock.elapsedTime * stream.speed + stream.delay) % 20;
        ref.position.y = stream.startY - t * 2;
        ref.material.opacity = Math.sin((t / 20) * Math.PI) * 0.5;
      }
    });
  });

  return (
    <>
      {streams.map((stream, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) streamRefs.current[i] = el; }}
          position={[stream.startX, stream.startY, stream.startZ]}
        >
          <boxGeometry args={[0.02, 3, 0.02]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.3} />
        </mesh>
      ))}
    </>
  );
}

// Pulsing rings
function PulsingRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        const scale = 1 + Math.sin(clock.elapsedTime * 0.5 + i * 0.5) * 0.1;
        ring.scale.set(scale, scale, scale);
      });
    }
  });

  return (
    <group ref={ringsRef} position={[0, 0, -20]}>
      {[3, 5, 7, 9].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.02, 8, 64]} />
          <meshBasicMaterial color="#22c55e" transparent opacity={0.15 - i * 0.02} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#0f1117"]} />
        <fog attach="fog" args={["#0f1117", 20, 60]} />
        
        <ambientLight intensity={0.5} />
        
        <ParticleField />
        <AnimatedGrid />
        <FloatingGeometry />
        <DataStreams />
        <PulsingRings />
      </Canvas>
    </div>
  );
}
