import React, { useContext } from 'react'
import { SideNavigationContext } from '../../../context/SideNavigationContext'

export default function SideNavigationToggler() {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {toggle, visible} = sideNavigationContext
  return (
    <div className={`side-navigation-toggler cursor-pointer ${!visible && 'rotate'}`} onClick={toggle}>
      <i className="fas fa-angle-double-left"></i>
    </div>
  )
}
