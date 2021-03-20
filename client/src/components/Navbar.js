import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="topnav">
        <div className="topnav">
          {localStorage.getItem("isLogin") ? (
            <div className="signin">
              <div className="navbar-dropdown">
                <a>{localStorage.getItem("username")}</a>
                <div className="navbar-dropdown-elements">
                  <Link to="/profile">Profile</Link>
                  <Link to="/settings">Account Settings</Link>
                  <Link to="/logout"> Logout</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="signin">
              <Link to="/signup"> Create Account </Link>
              <Link to="/login"> Sign in </Link>
            </div>
          )}

          <Link to={"/dashboard"}> Dashboard </Link>
          <Link to="/shell"> Python Shell </Link>
          <Link to="/contact"> Contact </Link>
          <Link to={"/about"}> About </Link>
          <Link to="/"> Home </Link>
          <div className="logo">
            <Link className="links" to="/">
              DreamCode
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
