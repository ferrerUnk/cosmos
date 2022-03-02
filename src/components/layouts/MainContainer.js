import React from 'react'
import FullScreenLoader from '../loaders/FullScreenLoader'
import Content from './components/Content'
import SideNavigation from './components/SideNavigation'

export default function MainContainer({children, headerVisible = true, fluid, loading = false, activeHeader, style}) {
  const containerClass = fluid ? "container-fluid" : "container "
  return (
    <div className="main-container">
      <Content containerClass={containerClass}>{children}</Content>
      {loading && <FullScreenLoader/>}
      <SideNavigation/>
    </div>
  )
}
