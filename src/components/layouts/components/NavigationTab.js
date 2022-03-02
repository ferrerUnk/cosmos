import React, { useContext } from "react";
import {
  NAVIGATION_TABS,
  SideNavigationContext,
} from "../../../context/SideNavigationContext";

export default function NavigationTab() {
  const sideNavigationContext = useContext(SideNavigationContext);
  const { activeTab, setActiveTab } = sideNavigationContext;
  console.log({ activeTab });
  return (
    <div className='navigation-tab-container'>
      <div className='navigation-tab'>
        <div
          onClick={() => setActiveTab(NAVIGATION_TABS.PARENTLINE)}
          className={`navigation-tab-item text-parentline cursor-pointer ${activeTab !== NAVIGATION_TABS.PARENTLINE && "text-disabled"}`}
        >
          {NAVIGATION_TABS.PARENTLINE}
        </div>
        <div
          onClick={() => setActiveTab(NAVIGATION_TABS.ONTRAQ)}
          className={`navigation-tab-item text-ontraq cursor-pointer ${activeTab !== NAVIGATION_TABS.ONTRAQ && "text-disabled"}`}
        >
          {NAVIGATION_TABS.ONTRAQ}
        </div>
      </div>
      <div className={`navigation-tab-indicator ${activeTab === NAVIGATION_TABS.ONTRAQ && "active-ontraq"}`} />
    </div>
  );
}
