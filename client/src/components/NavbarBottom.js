import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function NavbarBottom() {
  return (
    <div className=" bottomnav">
      <nav>
        <div>
          <Link to="./pages/contact.html"> Contact </Link>
          <Link to="./pages/about.html"> About </Link>
          <Link to="index.html"> Home </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarBottom;
