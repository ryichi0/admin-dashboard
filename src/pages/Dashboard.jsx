import React, { useEffect } from 'react'
import { useLayoutStore } from '../store/LayoutStore'

export default function Dashboard() {
  const { setPageTitle } = useLayoutStore()

  useEffect(() => {
    setPageTitle("داشبورد")
  }, [])

  return (
    <div>Dashboard</div>
  )
}
