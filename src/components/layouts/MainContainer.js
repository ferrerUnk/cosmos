import React from 'react'
import FullScreenLoader from '../loaders/FullScreenLoader'
import Content from './components/Content'
import SideNavigation from './components/SideNavigation'

export default function MainContainer({children, sidebarVisible = true, fluid, loading = false, activeHeader, style}) {
  const containerClass = fluid ? "container-fluid" : "container "
  return (
    <div className="main-container">
      <Content containerClass={containerClass} sidebarVisible={sidebarVisible}>{children}</Content>
      {loading && <FullScreenLoader/>}
      {sidebarVisible && <SideNavigation />}
    </div>
  )
}
