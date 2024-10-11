'use client'

import { useEffect, useRef } from 'react'

function CrossedOut({ className }) {
  const ref = useRef(null)

  useEffect(() => {
    const paths = ref.current.querySelectorAll('path')

    paths.forEach((path, index) => {
      const length = path.getTotalLength()

      const newPath = path
      newPath.style.strokeDasharray = length
      newPath.style.strokeDashoffset = length
      newPath.style.animation = 'dash 0.2s linear forwards'
      newPath.style.animationDelay = `${index * 0.2 + 1}s`
    })
  }, [])

  return (
    <svg
      width="145"
      height="81"
      viewBox="0 0 145 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
    >
      <path
        d="M3.15723 34.215C48.3601 25.2888 91.5039 13.6333 136.022 3.72894C138.236 3.23623 144.79 1.64473 142.534 2.07209"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M4.27605 64.4729C2.24518 65.4131 0.985717 69.441 3.07395 71.0193C4.82409 72.3421 8.19113 71.7724 10.2721 71.7724"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M5.05762 50.6558C7.27548 57.847 11.2365 64.3831 12.8785 71.7722"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20.4395 62.3872C20.6331 64.5169 22.1019 69.426 24.8713 69.426"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20.6994 51.9595C20.6613 51.9214 19.8612 51.2345 19.9607 51.5829C20.0322 51.8331 20.7654 51.9595 20.4387 51.9595"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30.8662 62.6478C31.3018 67.4687 31.1861 81.9963 31.3876 77.16C31.5138 74.1314 31.8423 71.1547 32.3869 68.1659C32.8815 65.4518 33.3244 59.7283 36.5726 58.5926C38.714 57.8438 46.2081 58.8041 44.5383 62.6478C43.49 65.0608 39.3907 65.5359 37.1953 65.979C36.0968 66.2007 35.058 66.4748 33.9946 66.2976"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M53.2871 61.605C58.2132 61.408 64.0802 60.8298 65.6268 55.1166C66.488 51.9352 64.7471 44.5952 60.4418 44.4569C54.6907 44.2723 54.747 54.9816 54.7644 58.5346C54.7814 62.0045 55.2207 65.4659 55.6334 68.9045"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M75.1859 60.8231C74.8787 59.5945 71.1994 62.5553 70.9423 62.8217C68.0207 65.8496 69.3711 68.988 73.361 69.8316C76.6449 70.5259 81.4446 68.5022 80.9792 64.3714C80.6518 61.4664 76.9075 61.1034 74.6645 60.8231"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M91.3486 62.9086C91.302 64.3516 90.9939 65.7212 90.4217 67.0508C89.8388 68.4051 89.8339 67.5367 90.2189 66.6018C90.9602 64.8015 91.5637 61.651 93.2893 60.5333C95.056 59.389 97.2416 60.3871 98.1701 62.0686C98.5154 62.6938 99.5516 65.6282 98.5322 66.2107C98.3392 66.321 98.4339 65.7557 98.5033 65.5445C98.9409 64.2125 100.07 63.3641 101.284 62.7638C103.51 61.6636 105.981 60.5415 107.106 63.2996C107.918 65.29 107.842 67.3942 108.294 69.426"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M123.414 64.7336C125.696 65.4309 129.516 66.4245 131.018 63.8501C131.805 62.4998 131.427 60.7299 130.091 59.9107C128.335 58.8344 125.867 59.6095 124.167 60.3742C122.142 61.2857 120.053 62.741 119.533 65.0812C118.701 68.824 121.971 71.0521 125.123 71.8303C130.818 73.2363 137.392 72.5511 142.966 70.9903"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M122.632 40.5354C125.61 37.4549 128.458 34.3334 130.974 30.8896"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CrossedOut
