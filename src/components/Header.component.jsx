import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';
class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand tag={Link} to='/'>
            React chat app
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-2' navbar>
              <NavItem>
                <NavLink tag={Link} to='/chatroom'>
                  Chat room
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/livevisitors'>
                  Live visitors
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
