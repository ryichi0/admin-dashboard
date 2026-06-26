import React, { Activity, useContext, useState } from 'react'
import SvgChevronLeft from '../../../icons/SvgChevronLeft'
import './SidebarItems.css'
import { Link, useNavigate } from 'react-router-dom';

export default function SidebarItems({ sidebarItem, sidebarOpen, i, itemIndex, setItemIndex }) {


  const navigate = useNavigate()
  const handleOnClick = () => {
    if (sidebarItem?.subMenu) {
      setItemIndex(i)
    }
    setItemIndex(i)
    navigate(sidebarItem?.path)
  }

  return (
    <li className="group relative">
      <button
        onClick={sidebarOpen ? handleOnClick : null}
        className={`
          ${!sidebarOpen && "justify-center"}
          ${itemIndex === i ? "border border-accent text-light" : "text-purple-100 "}
          nav-btn relative w-full h-13 flex gap-3 items-center px-2 rounded-curve transition-all cursor-pointer `}>


        {sidebarItem?.icon}
        <Activity mode={sidebarOpen ? "visible" : "hidden"}>
          <>
            <span>{sidebarItem?.title}</span>
            {sidebarItem?.subMenu && <SvgChevronLeft className={`absolute left-2 transition-all ${itemIndex === i && "-rotate-90 stroke-light!"}`} />}
          </>
        </Activity>
      </button>

      {sidebarOpen ?
        <ul className={`${itemIndex === i ? "max-h-80" : "max-h-0"} mt-4 transition-all ms-16 flex flex-col gap-1.5 overflow-hidden`}>
          {sidebarItem?.subMenu?.map((item, index) =>
            <Link
              key={index}
              to={item?.path}
              className="text-purple-100/50 hover:text-light cursor-pointer">
              {item?.title}
            </Link>
          )}
        </ul>
        :

        <ul className={`group-hover:absolute group-hover:right-[60px] group-hover:min-w-50 group-hover:bg-purple-800 group-hover:flex group-hover:flex-col group-hover:gap-3 group-hover:p-3 group-hover:top-0 group-hover:rounded-curve group-hover:pr-6 before:absolute before:bg-purple-900 before:rounded-r-curve before:top-0 before:bottom-0 before:right-0 before:w-3 before:z-100 hidden`}>
          {sidebarItem?.subMenu?.map((item, index) =>
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
