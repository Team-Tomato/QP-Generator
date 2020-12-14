import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const CustomNavbar = (props) => {
  const navLinkClasses = "font-weight-normal text-white text-decoration-none";
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar expand="md" style={{ backgroundColor: "#6868CB" }} light>
        <NavbarBrand>
          <NavLink
            to="/"
            className="font-weight-bold text-white text-decoration-none"
          >
            QP-Generator
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="ml-auto" />
        <Collapse isOpen={collapsed} navbar>
          <Nav className="ml-auto text-white" navbar>
            <NavItem className="m-2">
              <NavLink to="/questionPaper" className={navLinkClasses}>
                QP
              </NavLink>
            </NavItem>
            <NavItem className="m-2">
              <NavLink to="/bloomLogic" className={navLinkClasses}>
                Bloom Logic
              </NavLink>
            </NavItem>
            <NavItem className="m-2">
              <NavLink to="/help" className={navLinkClasses}>
                Help
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
export default CustomNavbar;
