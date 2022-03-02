import React, {Component} from 'react';
export const SideNavigationContext = React.createContext();
export class SideNavigationContextProvider extends Component {
  state = {
    visible: true,
    activeTab: NAVIGATION_TABS.PARENTLINE,
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

  render() {
    const {children} = this.props;
    const {
      visible,
      activeTab
    } = this.state;
    return (
      <SideNavigationContext.Provider
        value={{
          visible,
          activeTab,
          setActiveTab: this.setActiveTab,
          toggle: this.toggle
        }}>
        {children}
      </SideNavigationContext.Provider>
    );
  }
}

export default SideNavigationContextProvider;

export const NAVIGATION_TABS = {
  PARENTLINE: 'PARENTLINE',
  ONTRAQ: 'ONTRAQ',
}