import React from 'react'
import FullScreenLoader from '../loaders/FullScreenLoader'
import DevelopmentFooter from './components/DevelopmentFooter'

export default function MainContainer({children, headerVisible = true, fluid, loading = false, activeHeader, style}) {
  const containerClass = fluid ? "container-fluid" : "container "
  const header = headerVisible ? '' : 'no-header'
  return (
    <div className="main-container">
      <div className={`content ${header} ${style}`}>
        <div className={containerClass}>
          {children}
        </div>
        <DevelopmentFooter/>
      </div>
      {loading && <FullScreenLoader/>}
    </div>
  )
}
