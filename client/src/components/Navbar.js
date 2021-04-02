import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            {localStorage.getItem("isLogin") ? (
              <NavDropdown
                title={localStorage.getItem("username")}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/settings">
                  Account Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav className="signin">
                <Nav.Link href="/login">SIGN IN</Nav.Link>
                <Nav.Link href="/signup">CREATE ACCOUNT</Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
