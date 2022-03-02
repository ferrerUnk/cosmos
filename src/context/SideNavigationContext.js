import React, {Component} from 'react';
export const SideNavigationContext = React.createContext();
export class SideNavigationContextProvider extends Component {
  state = {
    visible: true
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const {children} = this.props;
    const {
      visible,
    } = this.state;
    return (
      <SideNavigationContext.Provider
        value={{
          visible,
          toggle: this.toggle
        }}>
        {children}
      </SideNavigationContext.Provider>
    );
  }
}

export default SideNavigationContextProvider;
