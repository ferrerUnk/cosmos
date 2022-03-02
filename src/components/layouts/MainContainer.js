import React from 'react'
import Header from '../headers/Header'
import FullScreenLoader from '../loaders/FullScreenLoader'
import Content from './components/Content'
import DevelopmentFooter from './components/DevelopmentFooter'
import SideNavigation from './components/SideNavigation'

export default function MainContainer({children, headerVisible = true, fluid, loading = false, activeHeader, style}) {
  const containerClass = fluid ? "container-fluid" : "container "
  return (
    <div className="main-container">
      <SideNavigation/>
      <Content containerClass={containerClass}>{children}</Content>
      {loading && <FullScreenLoader/>}
    </div>
  )
}
