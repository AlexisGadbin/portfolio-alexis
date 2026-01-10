'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import HeroTagline from './HeroTagline'
import LoadingFallback from './three/LoadingFallback'

const Scene = dynamic(() => import('./three/Scene'), {
  ssr: false,
  loading: () => <LoadingFallback />,
})

function HeroSection() {
  const [mode, setMode] = useState('apps')

  return (
    <section
      className="relative flex h-screen flex-col items-center justify-center px-6 pt-20 md:flex-row md:px-[75px] lg:px-[100px] xl:px-[200px]"
      id="home"
    >
      {/* Tagline */}
      <div className="z-10 flex-1 text-center md:text-left">
        <HeroTagline />
      </div>

      {/* 3D Scene */}
      <div className="relative h-[50vh] w-full flex-1 md:h-[70vh]">
        <Scene mode={mode} onModeChange={setMode} />
      </div>
    </section>
  )
}

export default HeroSection
