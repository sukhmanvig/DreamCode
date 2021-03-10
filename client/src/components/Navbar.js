import "../css/nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setPageStatus, pageStatus }) {
  return (
    <>
      <nav className="topnav">
        <div className="topnav">
          <div className="signin">
            {pageStatus !== "Logged_in" ? (
              <>
                <a onClick={() => setPageStatus("create")}> Create Account </a>
                <a onClick={() => setPageStatus("signin")}> Sign In </a>
              </>
            ) : (
              <>
                <h2>Logout</h2>
              </>
            )}
          </div>
          <Link to="./pages/contact.html"> Contact </Link>
          <Link to="./pages/about.html"> About </Link>
          <Link to="index.html"> Home </Link>
          <div className="logo">
            <Link to="index.html"> DreamCode </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
