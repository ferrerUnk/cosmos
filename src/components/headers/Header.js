import React, {  } from 'react'
import SideNavigationToggler from '../layouts/components/SideNavigationToggler'

export default function Header({title}) {
  return (
    <div className="header bg-white shadow">
      <div className='header-title'>
        <SideNavigationToggler/>
        <p>{title}</p>
      </div>
    </div> 
  )
}
