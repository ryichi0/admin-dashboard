import React, { useState } from 'react'
import SvgMenu from '../../icons/SvgMenu'
import SvgLogo from '../../icons/SvgLogo'
import CascadeProfileSettings from './CascadeProfileSettings';
import { useLayoutStore } from '../../store/LayoutStore';

export default function HeaderNavbar({ setSidebarOpen }) {
  const { pageTitle } = useLayoutStore()
  const [cascadeMenu, setCascadeMenu] = useState(false);


  return (
    <div className="w-full h-20 border-b border-br text-light bg-purple-900 flex items-center justify-between">

      <div className="flex items-center justify-center gap-3 px-4">
        <button
          className="text-white"
          onClick={() => setSidebarOpen(prev => !prev)}>
          <SvgMenu className="stroke-accent! w-8!" />
        </button>
        <h2 className="text-lg">{pageTitle}</h2>
      </div>



      <div className="px-4">
        <label htmlFor="" className="lg:w-90 lg:h-10 lg:flex gap-1 items-start justify-center border border-br rounded-full hidden">
          <input
            placeholder="جستوجو کنید"
            type="sarch"
            className="w-full h-full px-3  placeholder:text-light/50 placeholder:text-sm" />
          <div className="w-12 p-3 self-center">
            <SvgMenu />
          </div>
        </label>
      </div>



      <div onClick={() => setCascadeMenu(true)} className="flex items-center gap-3 px-4 select-none cursor-pointer">
        <div className="flex-4 flex flex-col items-end overflow-hidden select-none">
          <p className="text-md lg:text-lg">غزل محمودی</p>
          <p className="text-light/50 text-xs lg:text-sm">ghazalmahmoodi23@gmail.com</p>
        </div>
        <div className="flex-1 cursor-pointer size-2.5 rounded-full bg-amber-300"></div>
      </div>

      <CascadeProfileSettings
        cascadeMenu={cascadeMenu}
        setCascadeMenu={setCascadeMenu}
      />


    </div>
  )
}
