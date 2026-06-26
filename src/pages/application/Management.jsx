import React, { useEffect } from 'react'
import { useLayoutStore } from '../../store/LayoutStore'

export default function Management() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("مدیریت اپلیکیشن")
  }, [])

  return (
    <div>Management</div>
  )
}
