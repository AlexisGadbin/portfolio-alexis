import React from 'react'

function Button({ text, submit }) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className="rounded-xl bg-primary py-3 font-bold uppercase"
    >
      {text}
    </button>
  )
}

export default Button
