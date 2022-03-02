import React, { useContext } from 'react'
import { SideNavigationContext } from '../../../context/SideNavigationContext'

export default function SideNavigationToggler() {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {toggle} = sideNavigationContext
  return (
    <div className='side-navigation-toggler cursor-pointer' onClick={toggle}>
      <i className="fas fa-angle-double-left"></i>
    </div>
  )
}
