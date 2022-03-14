import React, { useContext } from 'react'
import { SideNavigationContext } from '../../../context/SideNavigationContext'

export default function Content({children, sidebarVisible = false}) {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {visible} = sideNavigationContext
  return (
    <div className={`content ${(!visible || !sidebarVisible) && 'hidden-sidenav'}`}>
      {children}
    </div>
  )
}
