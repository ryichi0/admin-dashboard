import React from 'react'
import SvgLogo from '../../icons/SvgLogo'

export default function SidebarProfile() {
  return (
    <div className="w-full border border-br rounded-curve flex flex-col gap-6 p-4 bg-purple-800">
      <div className="flex gap-3">
        <SvgLogo className="flex-1"/>
        <div className="flex-4 overflow-hidden">
          <p className="text-lg">غزل محمودی</p>
          <p className="text-light/50 text-sm">ghazalmahmoodi23@gmail.com</p>
        </div>
      </div>
      <button className="border border-accent rounded-curve w-full h-12 hover:text-accent">
        ویرایش پروفایل
      </button>
    </div>
  )
}
