import React, { useState } from 'react'
import SwitchThemeButton from './SwitchThemeButton'
import SvgUser from '../../icons/SvgUser'
import SvgLogout from '../../icons/SvgLogout'



export default function CascadeProfileSettings({ cascadeMenu, setCascadeMenu }) {
  const [lang, setLang] = useState("fa")

  const LANGS = [
    { title: "فارسی", symbol: "fa" },
    { title: "عربی", symbol: "ar" },
    { title: "French", symbol: "fr" },
    { title: "English", symbol: "en" },
  ]
  return (
    <>
      <div onClick={() => setCascadeMenu(false)} className={`opacity-0 fixed bg-purple-900/30 backdrop-blur-xs cursor-pointer transition-all ease-linear ${cascadeMenu && "z-40 inset-0 opacity-100"}`}>
      </div>
      <div className={`bg-purple-800 text-purple-100 w-60 rounded-curve opacity-0 absolute -z-10 -top-8 -left-8 transition-all duration-250 ease-linear flex flex-col gap-3 p-3 text-sm ${cascadeMenu && "top-8 left-8 opacity-100 z-50"}`}>


        <div className="border-b border-b-br flex flex-col pb-3">
          {LANGS?.map((langItem, index) => {
            return <button
              key={index}
              onClick={() => setLang(langItem?.symbol)}
              className={`p-2 rounded-curve text-start cursor-pointer ${langItem?.symbol === lang && "bg-purple-900"}`}>
              {langItem?.title}
            </button>
          })}
        </div>


        <div className="border-b border-b-br pb-3">
          <SwitchThemeButton />
        </div>

        <div>
          <div className="w-full hover:bg-purple-900 p-2 flex gap-2 rounded-curve">
            <SvgUser className="w-4.5 stroke-purple-100!" />
            <span>پروفایل</span>
          </div>
          <div className="w-full hover:bg-purple-900 p-2 flex gap-2 rounded-curve">
            <SvgLogout className="w-4.5 stroke-purple-100!" />
            <span>خروچ</span>
          </div>
        </div>

      </div>
    </>
  )
}
