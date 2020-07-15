
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
    import bn from 'utils/bemnames';
const bem = bn.create('sidebar');
class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };
  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };
  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
              </aside>
    );
  }
}

export default Sidebar;
