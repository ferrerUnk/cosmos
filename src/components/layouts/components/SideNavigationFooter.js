import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../../assets/images/icons/logout.png'
import { NAVIGATION_TABS } from '../../../context/SideNavigationContext'
export default function SideNavigationFooter({activeTab}) {
  return (
    <div>
      <Link className={`logout-link text-decoration-none ${activeTab === NAVIGATION_TABS.ONTRAQ ? "ontraq-link" : "parentline-link"}`} onClick={() => alert("Logout")}>
        <img src={logout} alt={"LOGOUT"} />
        <span>{"LOG-OUT"}</span>
      </Link>
    </div>
  )
}
