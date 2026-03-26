import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  { name: "React", color: "#61dafb" },
  { name: "Python", color: "#3776ab" },
  { name: "Go", color: "#00add8" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Docker", color: "#2496ed" },
  { name: "K8s", color: "#326ce5" },
  { name: "AWS", color: "#ff9900" },
  { name: "PyTorch", color: "#ee4c2c" },
];

function SkillOrb({ name, color, position }: { name: string; color: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.5;
    }
    if (glowRef.current) {
      const pulse = Math.sin(clock.elapsedTime * 2) * 0.1 + 1;
      glowRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Glow effect */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
        
        {/* Main orb */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.35, 1]} />
          <meshBasicMaterial color={color} wireframe />
        </mesh>
        
        {/* Label */}
        <Billboard position={[0, 0.7, 0]}>
          <Text
            font="/fonts/GeistMono-Regular.ttf"
            fontSize={0.18}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {name}
          </Text>
        </Billboard>
      </group>
    </Float>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const skillPositions = skills.map((_, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const radius = 2.5;
      return [Math.cos(angle) * radius, Math.sin(i * 0.5) * 0.5, Math.sin(angle) * radius];
    });

    const lines: number[] = [];
    for (let i = 0; i < skillPositions.length; i++) {
      for (let j = i + 1; j < skillPositions.length; j++) {
        if (Math.random() > 0.5) {
          lines.push(...skillPositions[i], ...skillPositions[j]);
        }
      }
    }
    return new Float32Array(lines);
  }, []);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = 
        0.1 + Math.sin(clock.elapsedTime) * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#22c55e" transparent opacity={0.1} />
    </lineSegments>
  );
}

function CenterCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = clock.elapsedTime * 0.2;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -clock.elapsedTime * 0.2;
      outerRef.current.rotation.z = clock.elapsedTime * 0.25;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#22c55e" wireframe />
      </mesh>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color="#22c55e" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function SkillsCanvas() {
  const skillPositions = useMemo(() => {
    return skills.map((_, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const radius = 2.5;
      return [
        Math.cos(angle) * radius,
        Math.sin(i * 0.5) * 0.5,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  return (
    <div className="h-[400px] w-full">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        
        <CenterCore />
        <ConnectionLines />
        
        {skills.map((skill, i) => (
          <SkillOrb
            key={skill.name}
            name={skill.name}
            color={skill.color}
            position={skillPositions[i]}
          />
        ))}
      </Canvas>
    </div>
  );
}
