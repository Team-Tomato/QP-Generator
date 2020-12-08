import React, { useState } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
          <Router>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          QP-GENERATOR
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
        </Router>
      </nav>
    </>
  );
}

export default Navbar;