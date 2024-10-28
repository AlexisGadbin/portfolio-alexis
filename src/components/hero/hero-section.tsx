import dynamic from 'next/dynamic'
import BlurBalls from './blur-balls'
import DiscoverMeSvg from './discover-me-svg'

const AnimatedDot = dynamic(() => import('./animated-dot'), { ssr: false })

const HeroSection = () => {
  return (
    <section className="relative z-0 grid h-screen place-items-center overflow-clip bg-primary-50">
      <BlurBalls />
      <div className="flex flex-col items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <AnimatedDot />
        <h2 className="mt-2 font-bold">Développeur full stack</h2>
      </div>
      <a
        href="#me"
        className="absolute bottom-36 right-1/2 w-2/5 max-w-2xl translate-x-1/2 transform md:bottom-16 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
      >
        <DiscoverMeSvg className="h-auto w-full" />
      </a>
    </section>
  )
}

export default HeroSection
