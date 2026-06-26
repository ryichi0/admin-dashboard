import React, { useEffect } from 'react'
import { useLayoutStore } from '../store/LayoutStore'

export default function Tools() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("ابزارها")
  }, [])

  return (
    <div>ابزارها</div>
  )
}
