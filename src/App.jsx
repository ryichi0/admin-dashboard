import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PanelLayout from './layouts/PanelLayout'
import Auth from './pages/auth/Auth'
import Button from './pages/auth/_components/Button'

function App() {

  const ROUTES = [
    {path: "/" , element: <Auth />},
    {path: "/p" , element: <PanelLayout />},
  ]
  return (
    <>
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
