import React, { createContext, useContext, useState } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'


export default function PanelLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen} />
      <Main
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen} >
        {children}
      </Main>

    </div>
  )
}
