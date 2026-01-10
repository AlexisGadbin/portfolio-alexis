'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useState } from 'react'
import IPhoneModel from './IPhoneModel'
import OrbitingItems from './OrbitingApps'
import ItemInfoPanel from './ItemInfoPanel'
import ModeSwitcher from '../ModeSwitcher'

function Scene({ mode, onModeChange }) {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelectItem = (item) => {
    setSelectedItem(item)
  }

  const handleClosePanel = () => {
    setSelectedItem(null)
  }

  const handleModeChange = (newMode) => {
    setSelectedItem(null)
    onModeChange(newMode)
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Environment for realistic reflections */}
          <Environment preset="city" />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
          />
          <pointLight position={[-10, -10, 5]} intensity={0.5} color="#22a089" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#ffffff"
          />

          <IPhoneModel selectedItem={selectedItem} />
          <OrbitingItems
            mode={mode}
            onSelectItem={handleSelectItem}
            selectedItemId={selectedItem?.id}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {selectedItem && (
        <ItemInfoPanel item={selectedItem} mode={mode} onClose={handleClosePanel} />
      )}

      {/* Mode Switcher */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <ModeSwitcher currentMode={mode} onModeChange={handleModeChange} />
      </div>
    </div>
  )
}

export default Scene
