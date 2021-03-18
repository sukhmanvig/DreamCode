import "../css/nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setPageStatus, pageStatus }) {
  return (
    <>
      <nav className="topnav">
        <div className="topnav">
          <div className="signin">
            <Link to="/signup"> Create Account </Link>
            <Link to="/login"> Sign in </Link>
          </div>

          <Link to="/contact.html"> Contact </Link>
          <Link to={"/about.html"}> About </Link>
          <Link to={"/dashboard"}> Dashboard </Link>
          <Link to="/"> Home </Link>
          <div className="logo">
            <Link to="/"> DreamCode </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
