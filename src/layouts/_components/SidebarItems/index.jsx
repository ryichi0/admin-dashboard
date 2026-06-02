import React, { useState } from 'react'
import SvgChevronLeft from '../../../icons/SvgChevronLeft'
import './SidebarItems.css'
import { Link } from 'react-router-dom';

export default function SidebarItems({ title, icon, sidebarOpen, subMenu }) {
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  return (
    <li className="group relative">
      <button
        onClick={sidebarOpen ? () => setActiveSubmenu(prev => !prev) : null}
        className={`nav-btn relative w-full h-13 flex gap-3 items-center px-2 rounded-curve 
          ${!sidebarOpen ? "justify-center cursor-default" : "cursor-pointer"}
            transition-all 
           ${activeSubmenu ? "border border-accent text-light" : "text-purple-100 "}
           `}>


        {icon}
        {sidebarOpen &&
          <>
            <span>{title}</span>
            <SvgChevronLeft className={`absolute left-2 transition-all ${activeSubmenu && "-rotate-90 stroke-light!"}`} />
          </>}
      </button>

      {sidebarOpen ?
        <ul className={`${activeSubmenu ? "max-h-80 my-4" : "max-h-0"} transition-all ms-16 flex flex-col gap-1.5 overflow-hidden`}>
          {subMenu?.map((item, index) =>
            <Link
              key={index}
              to={item?.path}
              className="text-purple-100 hover:text-light cursor-pointer">
              {item?.title}
            </Link>
          )}
        </ul>
        :
        <ul className={`group-hover:absolute group-hover:right-[60px] group-hover:min-w-50 group-hover:bg-purple-800 group-hover:flex group-hover:flex-col group-hover:gap-3  group-hover:p-3 group-hover:top-0 group-hover:rounded-curve group-hover:pr-6 before:absolute before:bg-purple-900 before:rounded-r-curve before:top-0 before:bottom-0 before:right-0 before:w-3 before:z-100 hidden`}>
          {subMenu?.map((item, index) =>
            <Link
              key={index}
              to={item?.path}
              className="text-purple-100 hover:text-light cursor-pointer">
              {item?.title}
            </Link>
          )}
        </ul>

      }


    </li>

  )
}
