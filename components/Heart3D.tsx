'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedHeart() {
  const heartRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (heartRef.current) {
      heartRef.current.rotation.y = time * 0.3
      const scale = 1 + Math.sin(time * 2) * 0.1
      heartRef.current.scale.set(scale, scale, scale)
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.2
    }
  })

  const heartShape = new THREE.Shape()
  const x = 0, y = 0
  heartShape.moveTo(x + 0.5, y + 0.5)
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y)
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7)
  heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9)
  heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7)
  heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y)
  heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5)

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 10,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1
  }

  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    const radius = 3 + Math.random() * 2

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b9d" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c06c84" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#ff6b9d"
      />

      <group ref={heartRef}>
        <mesh position={[-0.5, -0.95, 0]}>
          <extrudeGeometry args={[heartShape, extrudeSettings]} />
          <meshStandardMaterial
            color="#ff6b9d"
            emissive="#ff1744"
            emissiveIntensity={0.4}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[-0.5, -0.95, 0]}>
          <extrudeGeometry args={[heartShape, extrudeSettings]} />
          <meshBasicMaterial
            color="#ff6b9d"
            transparent
            opacity={0.3}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#ff6b9d"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function Heart3D() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#0a0e27']} />
      <fog attach="fog" args={['#0a0e27', 5, 15]} />
      <AnimatedHeart />
    </Canvas>
  )
}
