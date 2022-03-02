import React, { useContext } from 'react'
import { NAVIGATION_TABS, SideNavigationContext } from '../../../context/SideNavigationContext'
import NavigationTab from './NavigationTab'
import SideNavigationAvatar from './SideNavigationAvatar'

export default function SideNavigation({}) {
  const sideNavigationContext = useContext(SideNavigationContext)
  const {visible, toggle, activeTab} = sideNavigationContext
  return (
    <div className={`side-navigation ${!visible && "collapsed"} ${activeTab === NAVIGATION_TABS.ONTRAQ && "bg-ontraq"}`}>
      <div className='side-toggler cursor-pointer d-none' onClick={toggle}>
        <i class="fas fa-times"></i>
      </div>
      <div className='side-navigation-content'>
        <SideNavigationAvatar/>
        <NavigationTab/>
      </div>
      
    </div>
  )
}
