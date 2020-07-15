import React from 'react';
import { MdAccountCircle, MdChromeReaderMode, MdDashboard,MdInsertChart,MdRadioButtonChecked, MdStar,
  MdViewList,  MdWidgets,} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Nav,
  Navbar, NavLink as BSNavLink,DropdownItem,DropdownMenu,DropdownToggle,NavItem, UncontrolledDropdown} from 'reactstrap';
  //  import { Link,} from 'react-router-dom';

import bn from 'utils/bemnames';

const bem = bn.create('header');
const dashboardcontent = [
  { to: '/', name: 'Home', exact: true, Icon: MdDashboard },
];
const navComponents = [
  { to: '/1Bhkservices', name: '1 BHK', exact: false, Icon: MdRadioButtonChecked },
    { to: '/2Bhkservices', name: '2 BHK', exact: false, Icon: MdChromeReaderMode },
  { to: '/3Bhkservices', name: '3 BHK', exact: false, Icon: MdViewList },
    { to: '/Commercial', name: 'Commercial', exact: false, Icon: MdStar },
    { to: '/PestType', name: 'PestType', exact: false, Icon: MdRadioButtonChecked },

 
];

const navItems = [
  
  // { to: '/Dropdowns', name: 'drop', exact: false, Icon: MdWeb },
  { to: '/About', name: 'About', exact: false, Icon: MdInsertChart },
  { to: '/TESTMONIALS', name: 'Testmonials', exact: false, Icon: MdWidgets },
  { to: '/Gallery', name: 'Gallery', exact: false, Icon: MdWidgets },
  { to: '/Contact', name: 'Contact', exact: false, Icon: MdWidgets },
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
];
class Header extends React.Component {
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
      <aside  >
        <div>
      <Navbar expand  style={{backgroundColor: 'black'}}  >
      <Nav navbar    isOpen={this.state.isOpenComponents} className={bem.e('nav-right')}>

{dashboardcontent.map(({ to, name, exact, Icon }, index) => (
    <NavItem key={index} className={bem.e('nav-item')}>
      <BSNavLink
        id={`navItem-${name}-${index}`}
        className="text-uppercase"
        tag={NavLink}
        to={to}
        activeClassName="active"
        exact={exact}
      >
        <Icon className={bem.e('nav-item-icon')} />
        <span className="">{name}</span>
      </BSNavLink>
    </NavItem>
  ))}
  </Nav> 

      <Nav navbar    isOpen={this.state.isOpenComponents}   >

<UncontrolledDropdown      className={bem.e('nav-right')} >
                            <DropdownToggle nav caret>
                            <span className=" align-self-start">Services</span>

                            </DropdownToggle>
                            <DropdownMenu className="menucolor">
                            {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className="d-inline-flex">
                  <DropdownItem
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="nav-">{name}</span>
                  </DropdownItem>
                </NavItem>
              ))}
                                                       </DropdownMenu>
                          </UncontrolledDropdown>
                          </Nav>
                         
      <Nav navbar    isOpen={this.state.isOpenComponents}   >

{navItems.map(({ to, name, exact, Icon }, index) => (
    <NavItem key={index} className={bem.e('nav-item')}>
      <BSNavLink
        id={`navItem-${name}-${index}`}
        className="text-uppercase"
        tag={NavLink}
        to={to}
        activeClassName="active"
        exact={exact}
      >
        <Icon className={bem.e('nav-item-icon')} />
        <span className="">{name}</span>
      </BSNavLink>
    </NavItem>
  ))}
  </Nav>
        
      </Navbar>
      </div>
      </aside>
    );
  }
}

export default Header;
