import React, { useContext } from 'react'
import { SideNavigationContext } from '../../../context/SideNavigationContext'

export default function SideNavigation({}) {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {visible, toggle} = sideNavigationContext
  return (
    <div className={`side-navigation ${!visible && "collapsed"}`}>
      <div className='side-toggler cursor-pointer d-none' onClick={toggle}>
        <i class="fas fa-times"></i>
      </div>
      asdfasdf
    </div>
  )
}
