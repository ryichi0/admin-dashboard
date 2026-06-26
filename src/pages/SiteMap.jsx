import React, { useEffect } from 'react'
import { useLayoutStore } from '../store/LayoutStore'

export default function SiteMap() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("نقشه سایت")
  }, [])

  return (
    <div>نقشه سایت</div>
  )
}
