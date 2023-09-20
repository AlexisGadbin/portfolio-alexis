'use client'

import Image from 'next/image'
import Lottie from 'lottie-react'
import { useRef } from 'react'
import swipeAnimation from '../../public/assets/animations/swipe-animation.json'

function LogoList() {
  const animationRef = useRef(null)
  const divAnimationRef = useRef(null)

  return (
    <>
      <div className="hidden flex-col gap-14 md:flex">
        <div className="flex gap-10">
          <Image src="/assets/logos/html.svg" height={100} width={100} alt="HTML" />
          <Image src="/assets/logos/css.svg" height={100} width={100} alt="CSS" />
          <Image src="/assets/logos/javascript.svg" height={100} width={100} alt="JavaScript" />
          <Image src="/assets/logos/react.svg" height={100} width={100} alt="React" />
        </div>
        <div className="flex gap-10">
          <Image src="/assets/logos/svelte.svg" height={100} width={100} alt="Svelte" />
          <Image src="/assets/logos/java.svg" height={100} width={100} alt="Java" />
          <Image src="/assets/logos/nextjs.svg" height={100} width={100} alt="NextJS" />
          <Image src="/assets/logos/spring.svg" height={100} width={100} alt="Spring" />
        </div>
      </div>
      <div className="relative flex gap-4 overflow-y-hidden overflow-x-scroll pb-4 md:hidden md:pb-0">
        <Image src="/assets/logos/html.svg" height={50} width={50} alt="HTML" />
        <Image src="/assets/logos/css.svg" height={50} width={50} alt="CSS" />
        <Image src="/assets/logos/javascript.svg" height={50} width={50} alt="JavaScript" />
        <Image src="/assets/logos/react.svg" height={50} width={50} alt="React" />
        <Image src="/assets/logos/svelte.svg" height={50} width={50} alt="Svelte" />
        <Image src="/assets/logos/java.svg" height={50} width={50} alt="Java" />
        <Image src="/assets/logos/nextjs.svg" height={50} width={50} alt="NextJS" />
        <Image src="/assets/logos/spring.svg" height={50} width={50} alt="Spring" />
        <div ref={divAnimationRef}>
          <Lottie
            animationData={swipeAnimation}
            onComplete={() => {
              divAnimationRef.current.style.display = 'none'
              setTimeout(() => {
                divAnimationRef.current.style.display = 'block'
                animationRef.current.goToAndPlay(0)
              }, 3000)
            }}
            loop={false}
            lottieRef={animationRef}
            className="absolute -bottom-3 left-[50%]
        z-50 w-16 -translate-x-[50%]"
          />
        </div>
      </div>
    </>
  )
}

export default LogoList
