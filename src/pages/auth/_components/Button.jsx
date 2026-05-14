import React from 'react'
import "../Auth.css"

export default function Button({ className, children, onClick }) {
  return (
    <button
      className={`${className} w-1/2 h-10 rounded-xl cursor-pointer`}
      onClick={onClick}>
      {children}
    </button>
  )
}
