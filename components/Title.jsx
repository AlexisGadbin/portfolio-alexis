'use client'

import React from 'react'
import { motion } from 'framer-motion'

function Title({ title, color = 'white' }) {
  const colorMap = {
    white: 'text-white',
    dark: 'text-dark',
  }

  const borderColorMap = {
    white: 'border-white',
    dark: 'border-dark',
  }

  const backgroundColorMap = {
    white: 'bg-white',
    dark: 'bg-dark',
  }

  return (
    <motion.div
      className="flex items-center gap-4 pt-16"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className={`text-[26px] font-bold md:text-5xl ${colorMap[color]}`}>{title}</h1>
      <div
        className={`h-[2px] w-[150px] border ${borderColorMap[color]} ${backgroundColorMap[color]} md:w-[350px]`}
      />
    </motion.div>
  )
}

export default Title
