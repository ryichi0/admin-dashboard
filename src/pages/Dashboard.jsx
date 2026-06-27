import React, { useEffect } from 'react'
import { useLayoutStore } from '../store/LayoutStore'
import SvgTools from '../icons/SvgTools'

export default function Dashboard() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("داشبورد")
  }, [])

  return (
    <div className="w-full h-200 flex p-2 gap-7">
      <div className=" min-h-full w-8/12 flex flex-col gap-7">
        <div className="flex-4/12 grid grid-cols-4 gap-7 text-center">
          {[0, 0, 0, 0].map((item, index) => {
            return <div key={index} className="border border-br rounded-lg flex flex-col justify-between items-start p-4">
              <div className="bg-accent size-12 rounded-2xl flex justify-center items-center">
                <SvgTools  className="stroke-black!"/>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-light/50 text-sm">میزان فروش</span>
                <p className="text-light/80 text-xs">
                  <span className="text-2xl me-1">۱۲۰۰۰۰</span>تومان
                </p>
                <span className="text-accent text-xs">
                  +2.5%
                </span>
              </div>
            </div>
          })}
        </div>
        <div className="flex-8/12 grid grid-cols-2 gap-7">
          <div className="border border-br rounded-2xl p-4">hello</div>
          <div className="border border-br rounded-2xl p-4">hello</div>
        </div>
      </div>
      <div className="w-4/12 border border-br rounded-2xl"></div>
    </div>
  )
}
