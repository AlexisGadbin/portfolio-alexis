'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import OrbitingItem from './OrbitingItem'
import apps from '@/data/apps.json'
import technologies from '@/data/technologies.json'
import passions from '@/data/passions.json'

const dataByMode = {
  apps,
  tech: technologies,
  passions,
}

function OrbitingItems({ mode, onSelectItem, selectedItemId }) {
  const groupRef = useRef()
  const orbitRadius = 3
  const items = dataByMode[mode] || apps

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation of the entire orbit
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {items.map((item, index) => {
        // Position items evenly around the orbit
        const angle = (index / items.length) * Math.PI * 2
        const x = Math.cos(angle) * orbitRadius
        const z = Math.sin(angle) * orbitRadius

        return (
          <OrbitingItem
            key={item.id}
            item={item}
            position={[x, 0, z]}
            isSelected={selectedItemId === item.id}
            onClick={() => onSelectItem(item)}
          />
        )
      })}
    </group>
  )
}

export default OrbitingItems
