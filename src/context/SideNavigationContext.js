import React, {Component} from 'react';
import home from '../assets/images/icons/home-gray.png'
import messages from '../assets/images/icons/messages-gray.png'
import groups from '../assets/images/icons/groups-gray.png'
import reports from '../assets/images/icons/reports-gray.png'
import schools from '../assets/images/icons/schools-gray.png'

export const NAVIGATION_TABS = {
  PARENTLINE: 'PARENTLINE',
  ONTRAQ: 'ONTRAQ',
}

export const PARENTLINE_LINK_NAMES = {
  HOME: 'HOME',
  MESSAGES: 'MESSAGES',
  SCHOOLS: 'SCHOOLS',
  GROUPS: 'GROUPS',
  REPORTS: 'REPORTS',
}

export const PARENTLINE_LINKS = [
  {
    name: PARENTLINE_LINK_NAMES.HOME,
    icon: home,
    path: '/parentline',
  },
  {
    name: PARENTLINE_LINK_NAMES.MESSAGES,
    icon: messages,
    path: '/parentline/messages',
  },
  {
    name: PARENTLINE_LINK_NAMES.SCHOOLS,
    icon: schools,
    path: '/parentline/schools',
  },
  {
    name: PARENTLINE_LINK_NAMES.GROUPS,
    icon: groups,
    path: '/parentline/groups',
  },
  {
    name: PARENTLINE_LINK_NAMES.REPORTS,
    icon: reports,
    path: '/parentline/reports',
  },
]


export const ONTRAQ_LINK_NAMES = {
  HOME: 'HOME',
  DEVICES: 'DEVICES',
  REPORTS: 'REPORTS',
}

export const ONTRAQ_LINKS = [
  {
    name: ONTRAQ_LINK_NAMES.HOME,
    icon: home,
    path: '/ontraq',
  },
  {
    name: ONTRAQ_LINK_NAMES.DEVICES,
    icon: home,
    path: '/ontraq/devices',
  },
  {
    name: ONTRAQ_LINK_NAMES.REPORTS,
    icon: reports,
    path: '/ontraq/reports',
  }
]

export const SideNavigationContext = React.createContext();
export class SideNavigationContextProvider extends Component {
  state = {
    visible: true,
    activeTab: NAVIGATION_TABS.PARENTLINE,
    activeLink: PARENTLINE_LINKS[0].name
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  setActiveTab = (activeTab) => {
    this.setState({
      activeTab
    })
  }

  setActiveLink = (activeLink) => {
    this.setState({
      activeLink
    })
  }

  setActiveLinkAndTab = (activeLink, activeTab) => {
    this.setState({
      activeLink,
      activeTab
    })
  }

  render() {
    const {children} = this.props;
    const {
      visible,
      activeTab,
      activeLink
    } = this.state;
    return (
      <SideNavigationContext.Provider
        value={{
          visible,
          activeTab,
          activeLink, 
          setActiveLink: this.setActiveLink,
          setActiveTab: this.setActiveTab,
          setActiveLinkAndTab: this.setActiveLinkAndTab,
          toggle: this.toggle,
        }}>
        {children}
      </SideNavigationContext.Provider>
    );
  }
}

export default SideNavigationContextProvider;
