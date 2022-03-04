import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  NAVIGATION_TABS,
  ONTRAQ_LINKS,
  PARENTLINE_LINKS,
  SideNavigationContext,
} from "../../../context/SideNavigationContext";

export default function NavigationTab() {
  const sideNavigationContext = useContext(SideNavigationContext);
  const { activeTab, setActiveTab, activeLink, setActiveLinkAndTab } = sideNavigationContext;
  const history = useHistory()
  console.log({ activeTab, activeLink });
  return (
    <div className='navigation-links'>
      <div className='navigation-tab-container'>
        <div className='navigation-tab'>
          <div
            onClick={() => {
              setActiveTab(NAVIGATION_TABS.PARENTLINE)
              // history.push('/parentline')
            }}
            className={`navigation-tab-item text-parentline cursor-pointer ${
              activeTab !== NAVIGATION_TABS.PARENTLINE && "text-disabled"
            }`}
          >
            {NAVIGATION_TABS.PARENTLINE}
          </div>
          <div
            onClick={() => {
              setActiveTab(NAVIGATION_TABS.ONTRAQ)
              // history.push('/ontraq')
            }}
            className={`navigation-tab-item text-ontraq cursor-pointer ${
              activeTab !== NAVIGATION_TABS.ONTRAQ && "text-disabled"
            }`}
          >
            {NAVIGATION_TABS.ONTRAQ}
          </div>
        </div>
        <div
          className={`navigation-tab-indicator ${
            activeTab === NAVIGATION_TABS.ONTRAQ && "active-ontraq"
          }`}
        />
      </div>
      <div className='navigation-links-container'>
        {activeTab === NAVIGATION_TABS.PARENTLINE &&
          PARENTLINE_LINKS.map((item, index) => (
            <Link
              className={`navigation-link-item text-decoration-none parentline-link ${
                item.path === window.location.pathname && "active"
              }`}
              key={index}
              to={item.path}
              onClick={() => setActiveLinkAndTab(item.name, NAVIGATION_TABS.PARENTLINE)}
            >
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </Link>
          ))}
        {activeTab === NAVIGATION_TABS.ONTRAQ &&
          ONTRAQ_LINKS.map((item, index) => (
            <Link
              className={`navigation-link-item text-decoration-none ontraq-link ${
                item.path === window.location.pathname && "active"
              }`}
              key={index}
              to={item.path}
              onClick={() => setActiveLinkAndTab(item.name, NAVIGATION_TABS.ONTRAQ)}
            >
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}
