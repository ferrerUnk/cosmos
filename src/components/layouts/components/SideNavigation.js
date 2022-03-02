import React, { useContext } from 'react'
import { SideNavigationContext } from '../../../context/SideNavigationContext'

export default function SideNavigation({}) {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {visible} = sideNavigationContext
  return (
    <div className={`side-navigation ${!visible && "collapsed"}`}>SideNavigation</div>
  )
}
