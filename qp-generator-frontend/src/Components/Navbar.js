import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import "./Navbar.css"

const links = [
  { href: '/home', text: 'Home' },
  { href: '/signup', text: 'Sign Up' },
  { href: '/signin', text: 'Sign In' },
];

const createNavItem = ({ href, text, className }) => (
<Router>
  <Link to={href} className="nav-links">{text}
  </Link>
  </Router>
);

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="navbar">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
