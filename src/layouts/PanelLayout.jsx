import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

export default function PanelLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative w-full min-h-screen flex">

      <Sidebar
        sidebarOpen={sidebarOpen} />
      <Main
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen} >
        {children}
      </Main>

    </div>
  )
}
