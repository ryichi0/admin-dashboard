import React from 'react'
import SvgMenu from '../icons/SvgMenu'
import SvgLogo from '../icons/SvgLogo'
import HeaderNavbar from './_components/HeaderNavbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import Tools from '../pages/Tools'
import SiteMap from '../pages/SiteMap'
import Application from '../pages/Application'


export default function Main({ sidebarOpen, setSidebarOpen, children }) {

  const ROUTES = [
    {path: "dashboard", element: <Dashboard />},
    {path: "settings", element: <Settings />},
    {path: "tools", element: <Tools />},
    {path: "sitemap", element: <SiteMap />},
    {path: "application", element: <Application />},
  ]
  return (
    <main className={`text-light ${sidebarOpen
      ? "w-full md:w-[calc(100%-290px)]"
      : "w-full md:w-[calc(100%-60px)]!"}
        overflow-hidden min-h-screen absolute left-0 bg-purple-900 transition-all ease-in-out`}>

      <HeaderNavbar setSidebarOpen={setSidebarOpen} />
      {children}
      <Routes>
        {ROUTES.map((route, index) => <Route key={index} path={route.path} element={route.element} />
        )}
      </Routes>

    </main>
  )
}
