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
              <NavLink
                to="/questionPaper"
                className="text-white text-decoration-none"
              >
                QP
              </NavLink>
            </NavItem>
            <NavItem className="m-2">
              <NavLink
                to="/bloomLogic"
                className="text-white text-decoration-none"
              >
                Bloom Logic
              </NavLink>
            </NavItem>
            <NavItem className="m-2">
              <NavLink to="/help" className="text-white text-decoration-none">
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
