import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PanelLayout from './layouts/PanelLayout'
import Auth from './pages/auth/Auth'
import Button from './pages/auth/_components/Button'
import { createContext, useState } from 'react'

export const themeContext = createContext()
function App() {

  const [theme, setTheme] = useState("dark")
  const ROUTES = [
    { path: "/", element: <Auth /> },
    { path: "/p*", element: <PanelLayout /> },
  ]
  return (
    <>
      <themeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
          <Routes>
            {ROUTES.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
          </Routes>
        </BrowserRouter>
      </themeContext.Provider>
    </>
  )
}

export default App
