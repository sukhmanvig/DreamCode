import React from "react";
import "../css/index.css";

function LandingPage() {
  return (
    <div className="welcome App">
      <h2>
        Welcome, <span> {localStorage.getItem("username")} </span>
      </h2>
    </div>
  );
}

export default LandingPage;
