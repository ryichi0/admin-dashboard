import React from 'react'
import SvgLogo from '../icons/SvgLogo'
import SvgDashboard from '../icons/SvgDashboard'
import SvgSettings from '../icons/SvgSettings'
import DropdownNavLink from './_components/dropdownButtons/DropdownNavLink'

export default function Sidebar({ sidebarOpen }) {

  const SIDEBAR_MENU = [
    {
      title: "داشبورد", icon: <SvgDashboard />,
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
    {
      title: "تنظیمات", icon: <SvgSettings />,
      subMenu: [
        { title: "صفحه اول", path: "/" },
        { title: "صفحه دوم", path: "/" },
      ]
    },
  ]
  return (
    <aside
      className={
        `${sidebarOpen ? "w-[250px] md:w-[290px]" : "w-0 md:w-[60px]"}
           transition-all ease-in-out min-h-screen fixed right-0 bg-purple-800 outline`}>

      <div className="w-full h-20 overflow-hidden flex gap-3 justify-center items-center">
        <SvgLogo className="w-12" />
        {sidebarOpen && <h1 className="text-2xl text-light">پنل مدیریتی</h1>}
      </div>

      <div className={`${sidebarOpen ? 'px-3' : ""} py-5 flex flex-col gap-3`}>
        <button className={`${sidebarOpen ? 'rounded-curve' : "rounded-none"} bg-accent  cursor-pointer py-3`}>
          {sidebarOpen && <span>افزودن پروژه</span>}
          <span>+</span>
        </button>
        <ul className="flex flex-col py-6">
          {SIDEBAR_MENU.map((item, index) =>
            <DropdownNavLink
              sidebarOpen={sidebarOpen}
              key={index}
              title={item?.title}
              icon={item?.icon}
              subMenu={item?.subMenu} />)}
        </ul>
      </div>
    </aside>
  )
}
