import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

// Neural network visualization
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const connectionsRef = useRef<THREE.LineSegments>(null);

  const { nodes, connections } = useMemo(() => {
    const nodePositions: THREE.Vector3[] = [];
    const layers = [4, 6, 6, 4];
    const layerSpacing = 2;
    
    layers.forEach((count, layerIndex) => {
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * 1.2;
        const x = (layerIndex - (layers.length - 1) / 2) * layerSpacing;
        nodePositions.push(new THREE.Vector3(x, y, 0));
      }
    });

    // Create connections
    const connectionPoints: number[] = [];
    let offset = 0;
    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayerStart = offset;
      const nextLayerStart = offset + layers[l];
      
      for (let i = 0; i < layers[l]; i++) {
        for (let j = 0; j < layers[l + 1]; j++) {
          const from = nodePositions[currentLayerStart + i];
          const to = nodePositions[nextLayerStart + j];
          connectionPoints.push(from.x, from.y, from.z);
          connectionPoints.push(to.x, to.y, to.z);
        }
      }
      offset += layers[l];
    }

    return { nodes: nodePositions, connections: new Float32Array(connectionPoints) };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.8}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={0.3}>
          <mesh position={pos}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="#22c55e" />
          </mesh>
        </Float>
      ))}
      
      {/* Connections */}
      <lineSegments ref={connectionsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#22c55e" opacity={0.15} transparent />
      </lineSegments>
    </group>
  );
}

// Rotating wireframe cube
function WireframeCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      <meshBasicMaterial color="#22c55e" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

// Orbiting particles around the cube
function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      radius: 3 + Math.random() * 1.5,
      speed: 0.3 + Math.random() * 0.4,
      offset: Math.random() * Math.PI * 2,
      tilt: (Math.random() - 0.5) * Math.PI * 0.5,
    }));
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const p = particles[i];
        const t = clock.elapsedTime * p.speed + p.offset;
        child.position.x = Math.cos(t) * p.radius;
        child.position.y = Math.sin(t * 0.5) * p.radius * 0.3;
        child.position.z = Math.sin(t) * p.radius;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#22c55e" opacity={0.8} transparent />
        </mesh>
      ))}
    </group>
  );
}

// Data pulse rings
function DataPulse() {
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        const t = (clock.elapsedTime + i * 0.5) % 3;
        const scale = 1 + t * 0.8;
        const opacity = Math.max(0, 1 - t / 3) * 0.4;
        ring.scale.set(scale, scale, scale);
        (ring as THREE.Mesh).material.opacity = opacity;
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.8, 3, 64]} />
          <meshBasicMaterial color="#22c55e" transparent side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#22c55e" />
        
        <WireframeCube />
        <OrbitingParticles />
        <DataPulse />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
