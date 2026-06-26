import React, { useEffect } from 'react'
import { useLayoutStore } from '../store/LayoutStore'

export default function Settings() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("تنظیمات")
  }, [])

  return (
    <div>تنظیمات</div>
  )
}
