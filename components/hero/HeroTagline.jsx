'use client'

import { motion } from 'framer-motion'

function HeroTagline() {
  return (
    <div className="space-y-2">
      <motion.p
        className="text-2xl font-semibold text-dark md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Je fais des apps iOS.
      </motion.p>
      <motion.p
        className="text-2xl font-semibold text-dark md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Et je ne compte pas arrêter.
      </motion.p>
    </div>
  )
}

export default HeroTagline
