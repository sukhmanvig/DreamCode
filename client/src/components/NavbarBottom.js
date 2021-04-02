import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function NavbarBottom() {
  return (
    <div className=" bottomnav">
      <nav>
        <div>
          <Link to="/contact"> Contact </Link>
          <Link to="/about"> About </Link>
          <Link to="/pythonlearn"> Resources </Link>
          <Link to="/"> Home </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarBottom;
