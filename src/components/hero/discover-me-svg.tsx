'use client'

import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type DiscoverMeSvgProps = {
  className?: string
}

const DiscoverMeSvg = (props: DiscoverMeSvgProps) => {
  const { className } = props
  const ref = useRef<SVGSVGElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return

    const paths = ref.current?.querySelectorAll('path')
    ref.current?.classList.remove('hidden')

    paths?.forEach((path, index) => {
      const length = path.getTotalLength()

      const newPath = path
      newPath.style.strokeDasharray = String(length)
      newPath.style.strokeDashoffset = String(length)
      newPath.style.animation = 'dash 0.1s linear forwards'
      newPath.style.animationDelay = `${index * 0.2 + 1}s`
    })
  }, [isAnimating])

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true)
    }, 2000)
  }, [])

  return (
    <svg
      width="388"
      height="302"
      viewBox="0 0 388 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={twMerge('hidden', className)}
    >
      <path
        d="M133.024 2C142.997 9.123 150.303 21.8754 155.683 32.5401C164.778 50.5687 170.551 74.2129 164.55 94.1363C162.381 101.338 155.242 114.75 146.441 106.803C142.032 102.82 132.757 91.5758 137.153 84.9414C140.185 80.3651 146.985 81.4384 151.273 83.0649C165.072 88.299 169.506 104.503 171.493 117.639C177.194 155.33 170.903 194.074 176.09 231.684"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M158.357 231.684C164.301 237.977 169.188 245.239 175.152 251.481C177.964 254.424 179.902 254.577 183.456 252.325C192.505 246.591 199.517 237.994 207.334 230.839"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2.63036 268.131C3.02613 276.442 4.77272 289.177 9.29195 296.279C14.1311 303.883 0.374456 279.03 2.16124 270.195C2.75796 267.245 5.33035 265.753 8.25987 266.161C15.9386 267.229 20.9333 275.864 23.3188 282.393C25.0496 287.13 25.9626 292.748 24.4916 297.686C23.3603 301.484 21.51 300.226 18.6745 299.375"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M37.252 290.086C42.2716 289.961 48.4861 289.62 52.1702 285.677C56.2471 281.313 51.8535 278.258 47.2912 279.203C30.4664 282.688 41.5089 301.052 54.1405 296.842"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M38.0967 265.598C40.7216 261.879 41.006 255.496 44.8521 252.932"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M69.3401 281.642C64.6613 282.422 64.489 287.06 65.9624 290.743C68.327 296.654 79.3189 295.153 84.5398 295.153"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M101.428 285.864C95.1604 286.163 92.4715 293.201 99.9264 294.543C108.422 296.072 110.674 289.129 108.183 282.487"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M121.694 283.331C122.632 295.518 137.738 298.83 137.738 285.02"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M149.561 285.02C150.022 286.194 153.81 294.235 155.19 293.745C159.727 292.135 162.625 286.25 167.293 284.175"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M181.648 281.642C181.187 283.441 178.174 297.386 177.051 290.649C175.737 282.766 184.35 276.037 191.781 280.516C199.632 285.248 192.284 289.957 189.107 293.839C188.129 295.035 201.116 297.504 202.759 297.686"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M212.893 289.242C216.61 288.932 220.365 287.803 223.542 285.817C229.141 282.318 225.131 281.532 220.868 283.05C210.431 286.764 215.001 291.681 223.026 293.464"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M232.314 281.642C235.555 281.813 238.977 282.331 241.744 284.175C245.464 286.656 237.87 291.105 236.302 292.573C228.127 300.226 241.414 297.572 245.825 300.219"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M287.203 294.308C286.204 288.817 285.272 285.02 291.472 285.02C294.305 285.02 297.532 286.753 297.336 290.086C297.234 291.813 296.961 288.868 297.148 288.257C298.088 285.183 300.74 282.815 304.091 283.425C309.743 284.452 309.007 292.682 308.313 296.842"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M323.513 283.331C321.095 283.414 317.451 282.968 316.1 285.583C315.064 287.59 314.339 291.9 316.71 293.277C322.648 296.724 331.046 286.889 321.824 285.864"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M341.245 283.331V292.62" stroke="black" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M341.245 273.198C340.604 273.198 340.946 273.445 341.245 274.043"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M369.111 263.065C369.111 270.895 368.414 279.003 369.956 286.709"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M372.298 292.037C371.618 291.677 371.072 291.129 370.458 291.934C369.318 293.43 370.888 293.565 370.888 292.656C370.888 291.123 366.72 292.203 367.449 292.931C368.181 293.664 369.434 293.075 370.131 292.656"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default DiscoverMeSvg
