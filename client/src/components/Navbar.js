import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/nav.css";

function Navbar2() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="topnav mr-auto "
        fixed="top"
      >
        <Navbar.Brand className="logo" href="/">
          DreamCode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="topnav-item">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            {localStorage.getItem("isLogin") ? (
              <NavDropdown
                title={localStorage.getItem("username")}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">
                  Account Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav className="signin">
                <Nav.Link as={Link} to="/login">
                  SIGN IN
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  CREATE ACCOUNT
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
