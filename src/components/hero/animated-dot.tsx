'use client'

import { motion } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const AnimatedDot = () => {
  const firstLetterRef = useRef<HTMLSpanElement>(null)
  const secondLetterRef = useRef<HTMLSpanElement>(null)
  const [path1, setPath1] = useState('')
  const [path2, setPath2] = useState('')
  const [path3, setPath3] = useState('')
  const path1ref = useRef<SVGPathElement>(null)
  const path2ref = useRef<SVGPathElement>(null)
  const path3ref = useRef<SVGPathElement>(null)
  const [pathLengths, setPathLengths] = useState([0, 0, 0])
  const [totalLength, setTotalLength] = useState(0)
  const [showDot, setShowDot] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!firstLetterRef.current || !secondLetterRef.current) return
    const i1 = firstLetterRef.current.getBoundingClientRect()
    const i2 = secondLetterRef.current.getBoundingClientRect()

    const newCoordinates = {
      x1: i1.left + i1.width / 2,
      y1: i1.top + i1.width,
      x2: i2.left + i2.width / 2,
      y2: i2.top + i2.width,
    }

    setPath1(`M 0,0 C 0,0 ${newCoordinates.x1 / 1.2},0 ${newCoordinates.x1},${newCoordinates.y1}`)
    setPath2(
      `M ${newCoordinates.x1},${newCoordinates.y1} C ${newCoordinates.x1},${newCoordinates.y1} ${(newCoordinates.x1 + newCoordinates.x2) / 2},${newCoordinates.y1 / 1.5} ${newCoordinates.x2},${newCoordinates.y2}`
    )
    setPath3(
      `M ${newCoordinates.x2},${newCoordinates.y2} C ${newCoordinates.x2},${newCoordinates.y2} ${(newCoordinates.x2 + window.innerWidth * 0.8) / 2},${newCoordinates.y1 / 2} ${window.innerWidth * 0.8},${window.innerHeight}`
    )

    setTimeout(() => {
      setIsAnimating(true)
    }, 2000)
  }, [])

  useLayoutEffect(() => {
    if (path1ref.current && path2ref.current && path3ref.current) {
      const length1 = path1ref.current.getTotalLength()
      const length2 = path2ref.current.getTotalLength()
      const length3 = path3ref.current.getTotalLength()

      setPathLengths([length1, length2, length3])
      setTotalLength(length1 + length2 + length3)
    }
  }, [path1, path2, path3])
  return (
    <>
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <motion.path
          d={path1}
          stroke="gray"
          fill="transparent"
          strokeWidth="2"
          className="hidden opacity-10 sm:block"
          initial={{ pathLength: 0.001 }}
          animate={isAnimating && { pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeIn',
          }}
          ref={path1ref}
        />
        <motion.path
          d={path2}
          stroke="gray"
          fill="transparent"
          strokeWidth="2"
          className="hidden opacity-10 sm:block"
          initial={{ pathLength: 0.001 }}
          animate={isAnimating && { pathLength: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: 'easeOut',
          }}
          ref={path2ref}
        />
        <motion.path
          d={path3}
          stroke="gray"
          fill="transparent"
          strokeWidth="2"
          className="hidden opacity-10 sm:block"
          initial={{ pathLength: 0.001 }}
          animate={isAnimating && { pathLength: 1 }}
          transition={{
            duration: 3,
            delay: 2.5,
            ease: 'easeOut',
          }}
          ref={path3ref}
        />
      </svg>
      <motion.div
        className={`absolute left-0 top-0 size-2 rounded-full bg-primary-700 ${showDot ? 'block' : 'hidden'} `}
        style={{
          offsetPath: `path("${path1 + path2 + path3}")`,
        }}
        initial={{ offsetDistance: '0%', opacity: 0 }}
        animate={
          isAnimating
            ? {
                offsetDistance: [
                  '0%',
                  `${(pathLengths[0] / totalLength) * 100}%`,
                  `${((pathLengths[0] + pathLengths[1]) / totalLength) * 100}%`,
                  '100%',
                ],
                opacity: [1, 1, 1, 0],
              }
            : {}
        }
        onAnimationComplete={() => setShowDot(false)}
        transition={{
          duration: 5.5,
          ease: ['easeIn', 'easeOut', 'easeOut'],
          times: [0, 1.5 / 5.5, (1.5 + 1) / 5.5, 1],
        }}
      />
      <h1 className="gradient from-primary-900 to-primary-400 py-8 font-serif">
        Alex
        <motion.span
          initial={{ y: -10 }}
          animate={isAnimating ? { y: [-10, 10, 0] } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
          ref={firstLetterRef}
          className="inline-block"
        >
          i
        </motion.span>
        s Gadb
        <motion.span
          initial={{ y: -10 }}
          animate={isAnimating ? { y: [-10, 10, 0] } : {}}
          transition={{ duration: 0.5, delay: 2.5 }}
          ref={secondLetterRef}
          className="inline-block"
        >
          i
        </motion.span>
        n
      </h1>
    </>
  )
}

export default AnimatedDot

