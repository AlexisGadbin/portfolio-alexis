'use client'

import { motion } from 'framer-motion'
import { Smartphone, Code, Heart } from 'lucide-react'

const modes = [
  { id: 'apps', label: 'Apps', icon: Smartphone },
  { id: 'tech', label: 'Tech', icon: Code },
  { id: 'passions', label: 'Passions', icon: Heart },
]

function ModeSwitcher({ currentMode, onModeChange }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/70 p-1.5 backdrop-blur-lg">
      {modes.map((mode) => {
        const isActive = currentMode === mode.id
        return (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            className={`relative flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive ? 'text-white' : 'text-dark/60 hover:text-dark'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeMode"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <mode.icon size={16} className="relative z-10" />
            <span className="relative z-10">{mode.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ModeSwitcher
