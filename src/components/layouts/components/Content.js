import React, { useContext } from 'react'
import { SideNavigationContext } from '../../../context/SideNavigationContext'
import DevelopmentFooter from './DevelopmentFooter'

export default function Content({children}) {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {visible} = sideNavigationContext
  return (
    <div className={`content ${!visible && 'hidden-sidenav'}`}>
      {children}
      <DevelopmentFooter/>
    </div>
  )
}
