import React, {  } from 'react'
import { Link } from 'react-router-dom'
import SideNavigationToggler from '../layouts/components/SideNavigationToggler'

export default function Header({}) {
  return (
    <div className="header bg-white">
      <SideNavigationToggler/>
    </div> 
  )
}
