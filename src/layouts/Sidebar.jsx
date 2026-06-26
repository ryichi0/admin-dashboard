import SvgLogo from '../icons/SvgLogo'
import SvgPlus from '../icons/SvgPlus'
import { NAV_LINKS } from '../constant/NavigationLinks'
import SidebarProfile from './_components/SidebarProfile'
import SwitchThemeButton from './_components/SwitchThemeButton'
import SidebarItems from './_components/SidebarItems'
import { Activity, useState } from 'react'

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const [itemIndex, setItemIndex] = useState(-1)

  return (
    <aside
      className={
        `${sidebarOpen ? "w-[250px] md:w-[290px]" : "w-0 md:w-[60px]"}
           transition-all ease-in-out min-h-screen fixed right-0 z-30 text-light bg-purple-900`}>

      <div className="w-full h-20 overflow-hidden flex gap-3 justify-center items-center">
        <SvgLogo className="w-12" />
        {sidebarOpen && <>
          <h1 className="text-2xl text-light">پنل مدیریتی</h1>
        </>}
      </div>


      <div
        className={`${sidebarOpen && 'px-3'}
        py-5 flex flex-col gap-10 border-l border-br min-h-screen`}>

        <button
          className={`
          ${sidebarOpen && 'rounded-curve'} 
          bg-accent flex gap-1 justify-center items-center cursor-pointer py-3 text-purple-900`}>
          <Activity mode={sidebarOpen ? "visible" : "hidden"}>
            <span>افزودن پروژه</span>
          </Activity>
          <SvgPlus />
        </button>


        <ul className="flex flex-col">
          {NAV_LINKS.map((item, index) =>
            <SidebarItems
              itemIndex={itemIndex}
              setItemIndex={setItemIndex}
              i={index}
              sidebarOpen={sidebarOpen}
              key={index}
              sidebarItem={item} />)}
        </ul>

        <Activity mode={sidebarOpen ? "visible" : "hidden"}>
          <>
            <SidebarProfile />
            <SwitchThemeButton />
            <p
              className="text-light/30 text-center text-sm">
              توسعه داده شده توسط
              <span className="text-light/70">غزل محمودی</span>
            </p>
          </>
        </Activity>
      </div>
    </aside>
  )
}
