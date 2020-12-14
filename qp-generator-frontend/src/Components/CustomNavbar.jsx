import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="text-white text-decoration-none">
            QP-Generator
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="ml-auto" />
        <Collapse isOpen={collapsed} navbar>
          <Nav className="ml-auto text-white" navbar>
            <NavItem className="m-2">
              <Link
                to="/questionPaper"
                className="text-white text-decoration-none"
              >
                QP
              </Link>
            </NavItem>
            <NavItem className="m-2">
              <Link
                to="/bloomLogic"
                className="text-white text-decoration-none"
              >
                Bloom Logic
              </Link>
            </NavItem>
            <NavItem className="m-2">
              <Link to="/help" className="text-white text-decoration-none">
                Help
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
export default CustomNavbar;
