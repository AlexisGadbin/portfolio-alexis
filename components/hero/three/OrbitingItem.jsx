'use client'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

function OrbitingItem({ item, position, isSelected, onClick }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const { camera } = useThree()
  const texture = useTexture(item.iconPath)

  useFrame(() => {
    if (groupRef.current) {
      // Scale animation
      const targetScale = hovered || isSelected ? 1.3 : 1
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
      // Always face camera
      groupRef.current.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <group position={position}>
      <group
        ref={groupRef}
        onClick={onClick}
        onPointerOver={() => {
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
      >
        {/* Icon image */}
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>

        {/* Colored background */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.05, 1.05]} />
          <meshBasicMaterial color={item.color} />
        </mesh>
      </group>

      {/* Glow effect when selected */}
      {isSelected && (
        <mesh quaternion={camera.quaternion}>
          <planeGeometry args={[1.4, 1.4]} />
          <meshBasicMaterial color={item.color} transparent opacity={0.3} />
        </mesh>
      )}
    </group>
  )
}

export default OrbitingItem
