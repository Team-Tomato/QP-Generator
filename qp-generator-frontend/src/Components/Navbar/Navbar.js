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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy } from '@fortawesome/free-solid-svg-icons'

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
        <Navbar light expand="md" className="navbar">
          <NavbarBrand href="/" className="nav-heading">QP-Generator <FontAwesomeIcon icon={faCopy} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
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
