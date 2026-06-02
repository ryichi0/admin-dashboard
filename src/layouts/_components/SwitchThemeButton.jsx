import React, { useContext, useState } from 'react'
import { themeContext } from '../../App';

export default function SwitchThemeButton() {

  const {theme, setTheme} = useContext(themeContext)
  console.log(theme);

  return (
    <div className="w-full p-1 border border-br flex gap-2 rounded-curve bg-purple-800">
      <button
        className={`${theme === "dark" && "bg-accent text-purple-900! "} w-1/2 py-1.5 rounded-curve cursor-pointer`}
        onClick={() => setTheme("dark")}>
        تاریک
      </button>
      <button
        className={` ${theme === "light" && "bg-accent text-purple-900!"} w-1/2 py-1.5 rounded-curve cursor-pointer`}
        onClick={() => setTheme("light")}>
        روشن
      </button>
    </div>
  )
}
