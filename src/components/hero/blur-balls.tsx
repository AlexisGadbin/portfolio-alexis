'use client'

import { useState } from 'react'
import BlurBall from './blur-ball'

const BlurBalls = () => {
  const [positions, setPositions] = useState([
    {
      top: '90%',
      right: '10%',
    },
    {
      top: '10%',
      right: '90%',
    },
    {
      top: '50%',
      right: '50%',
    },
    {
      top: '90%',
      right: '90%',
    },
    {
      top: '10%',
      right: '10%',
    },
  ])

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const threshold = 300
    const speed = 0.5

    setPositions((prevPositions) =>
      prevPositions.map((pos) => {
        const ballX = window.innerWidth - window.innerWidth * (parseFloat(pos.right) / 100)
        const ballY = window.innerHeight * (parseFloat(pos.top) / 100)

        const distanceX = ballX - mouseX
        const distanceY = ballY - mouseY
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

        if (distance < threshold) {
          const newTop = ballX > mouseX ? parseFloat(pos.top) + speed : parseFloat(pos.top) - speed
          const newRight =
            ballY > mouseY ? parseFloat(pos.right) - speed : parseFloat(pos.right) + speed
          return {
            top: `${newTop > 100 ? 0 : newTop < 0 ? 100 : newTop}%`,
            right: `${newRight > 100 ? 0 : newRight < 0 ? 100 : newRight}%`,
          }
        }

        return pos
      })
    )
  }

  return (
    <div className="absolute inset-0" onMouseMove={handleMouseMove}>
      {positions.map((pos, index) => (
        <BlurBall key={index} top={pos.top} right={pos.right} />
      ))}
    </div>
  )
}

export default BlurBalls

