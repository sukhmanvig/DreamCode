import React, { useState } from "react";
import Axios from "axios";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./css/nav.css";


function App() {
  const [status, setStatus] = useState("");

  const [pageStatus, setPageStatus] = useState("");

  const [error, setError] = useState("");
  const [loser, setLoser] = useState({ name: "", email: "" });

  const loginCode = (code) => {
    setStatus(code);
  };

  const register = (details) => {
    setLoser({
      name: details.name,
      email: details.email,
    });

    Axios.post("http://localhost:3001/users", {
      username: details.name,
      email: details.email,
      password: details.password,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        setError("");
        setPageStatus("welcome");
      }
    });
  };

  const Login = (details) => {
    setLoser({
      name: details.name,
      email: details.email,
    });

    Axios.post("http://localhost:3001/login", {
      username: details.name,
      email: details.email,
      password: details.password,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        setError("");
        setPageStatus("welcome");
      }
    });
  };

  const Logout = (details) => {
    setLoser({ name: "", email: "" });
    setError("");
    setPageStatus("");
  };

  return (
    <>
      <nav className="topnav">
        <div className="topnav">
          <div className="signin">
            <a onClick={() => setPageStatus("create")}>Create Account</a>
            <a onClick={() => setPageStatus("signin")}>Sign In</a>
          </div>
          <a href="contact.html">Contact</a>
          <a href="about.html">About</a>
          <a href="index.html">Home</a>
          <div className="logo">
            <a href="index.html">DreamCode</a>
          </div>
        </div>
      </nav>
      <div>
        {pageStatus === "welcome" ? (
          <div className="welcome App">
            <h2>
              Welcome, <span> {loser.name} </span>
              <button onClick={Logout}> Logout </button>
            </h2>
          </div>
        ) : pageStatus === "signin" ? (
          <div className="App">
            <LoginForm
              Login={Login}
              error={error}
              setPageStatus={setPageStatus}
            />
          </div>
        ) : pageStatus === "create" ? (
          <div className="App">
            <RegisterForm
              register={register}
              error={error}
              setPageStatus={setPageStatus}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <nav className="bottomnav">
        <div>
          <a href="contact.html">Contact</a>
          <a href="about.html">About</a>
          <a href="home.html">Home</a>
        </div>
      </nav>
    </>
  );
}

export default App;
