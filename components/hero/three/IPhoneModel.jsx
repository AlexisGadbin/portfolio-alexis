'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function IPhoneModel({ selectedItem }) {
  const groupRef = useRef()
  const { scene } = useGLTF('/assets/models/iphone.glb')

  // Subtle floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef} scale={[35, 35, 35]} rotation={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}

// Preload the model
useGLTF.preload('/assets/models/iphone.glb')

export default IPhoneModel
