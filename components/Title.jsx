import React from 'react'

function Title({ title, color = 'white' }) {
  const colorMap = {
    white: 'text-white',
    dark: 'text-dark',
  }

  const borderColorMap = {
    white: 'border-white',
    dark: 'border-dark',
  }

  return (
    <div className="flex items-center gap-4 pt-16">
      <h1 className={`text-5xl font-bold ${colorMap[color]}`}>{title}</h1>
      <div className={`h-[2px] w-[150px] border ${borderColorMap[color]} md:w-[350px]`} />
    </div>
  )
}

export default Title
