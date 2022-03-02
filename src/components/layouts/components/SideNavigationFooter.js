import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../../assets/images/icons/logout.png'
import { NAVIGATION_TABS } from '../../../context/SideNavigationContext'

import ontraqLogo from '../../../assets/images/ontraq-logo.png'
import parentlineLogo from '../../../assets/images/parentline-logo.png'

export default function SideNavigationFooter({activeTab}) {
  return (
    <div className='side-navigation-footer'>
      <Link className={`logout-link text-decoration-none ${activeTab === NAVIGATION_TABS.ONTRAQ ? "ontraq-link" : "parentline-link"}`} onClick={(e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        alert("Logout")
      }}>
        <img src={logout} alt={"LOGOUT"} />
        <span>{"LOG-OUT"}</span>
      </Link>
      <img src={activeTab === NAVIGATION_TABS.ONTRAQ ? ontraqLogo : parentlineLogo} alt={"ONTRAQ"} className="footer-logo" />
    </div>
  )
}
