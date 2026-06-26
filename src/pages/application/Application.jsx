import React, { useEffect } from 'react'
import { useLayoutStore } from '../../store/LayoutStore'

export default function Application() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("اپلیکیشن")
  }, [])

  return (
    <div>اپلیکیشن</div>
  )
}
