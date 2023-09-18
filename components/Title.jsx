import React from 'react'

function Title({ title, color = 'white' }) {
  return (
    <div className="flex items-center gap-4 pt-16">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <div className="h-[2px] w-[150px] border border-white md:w-[350px]" />
    </div>
  )
}

export default Title
