"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, RoundedBox } from "@react-three/drei";
import { useMemo } from "react";

function PhoneModel({ accent = "#ff2d55" }: { accent?: string }) {
  const glass = useMemo(
    () => ({
      roughness: 0.12,
      metalness: 0.2,
      transparent: true,
      opacity: 0.92,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.2,
      color: "#ffffff",
    }),
    []
  );

  return (
    <group>
      {/* body */}
      <RoundedBox args={[1.55, 3.2, 0.14]} radius={0.22} smoothness={6}>
        <meshPhysicalMaterial
          roughness={0.35}
          metalness={0.9}
          color="#0b0b0c"
          clearcoat={1}
          clearcoatRoughness={0.2}
          envMapIntensity={1.1}
        />
      </RoundedBox>

      {/* glass */}
      <RoundedBox args={[1.48, 3.13, 0.03]} radius={0.2} smoothness={6} position={[0, 0, 0.09]}>
        <meshPhysicalMaterial {...glass} />
      </RoundedBox>

      {/* screen tint */}
      <RoundedBox args={[1.42, 3.05, 0.01]} radius={0.18} smoothness={6} position={[0, 0, 0.105]}>
        <meshStandardMaterial color="#0a0a0a" emissive={accent} emissiveIntensity={0.12} />
      </RoundedBox>

      {/* camera bump */}
      <RoundedBox args={[0.62, 0.62, 0.12]} radius={0.16} smoothness={6} position={[-0.42, 1.15, 0.14]}>
        <meshPhysicalMaterial roughness={0.25} metalness={0.85} color="#111113" envMapIntensity={1.2} />
      </RoundedBox>
      <mesh position={[-0.55, 1.23, 0.22]}>
        <circleGeometry args={[0.12, 36]} />
        <meshStandardMaterial color="#0a0a0a" emissive="#ffffff" emissiveIntensity={0.06} />
      </mesh>
      <mesh position={[-0.35, 1.05, 0.22]}>
        <circleGeometry args={[0.12, 36]} />
        <meshStandardMaterial color="#0a0a0a" emissive="#ffffff" emissiveIntensity={0.06} />
      </mesh>
    </group>
  );
}

export function Device3D({
  accent,
  className,
}: {
  accent?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 6, 5]} intensity={1.0} />
        <directionalLight position={[-4, -2, 4]} intensity={0.4} />

        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.35}>
          <group rotation={[0.08, -0.55, 0]}>
            <PhoneModel accent={accent} />
          </group>
        </Float>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

