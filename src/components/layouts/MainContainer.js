import React from 'react'
import FullScreenLoader from '../loaders/FullScreenLoader'
import Content from './components/Content'
import SideNavigation from './components/SideNavigation'
import Header from '../headers/Header'
import DevelopmentFooter from './components/DevelopmentFooter'

export default function MainContainer({children, sidebarVisible = true, fluid, loading = false, headerTitle = ""}) {
  const containerClass = fluid ? "container-fluid" : "container "
  return (
    <div className="main-container">
      <Content containerClass={containerClass} sidebarVisible={sidebarVisible}>
        <Header title={headerTitle}/>
        <div className='content-container'>
          {children}
          <DevelopmentFooter/>
        </div>
      </Content>
      {loading && <FullScreenLoader/>}
      {sidebarVisible && <SideNavigation />}
    </div>
  )
}
