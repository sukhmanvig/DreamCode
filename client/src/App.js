import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import "./css/nav.css";

function App() {
  const [pageStatus, setPageStatus] = useState("");

  const [error, setError] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });

  const register = (details) => {
    setUser({
      name: details.name,
      email: details.email,
    });

    Axios.post("/users", {
      username: details.name,
      email: details.email,
      password: details.password,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        setError("");
        setPageStatus("Logged_in");
      }
    });
  };

  const Login = (details) => {
    setUser({
      name: details.name,
      email: details.email,
    });

    Axios.post("/login", {
      username: details.name,
      email: details.email,
      password: details.password,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        setError("");
        setPageStatus("Logged_in");
      }
    });
  };

  const Logout = (details) => {
    setUser({ name: "", email: "" });
    setError("");
    setPageStatus("");
  };

  return (
    <Router>
      <Navbar setPageStatus={setPageStatus} pageStatus={pageStatus} />
      <div>
        {pageStatus === "Logged_in" ? (
          <div className="welcome App">
            <h2>
              Welcome, <span> {user.name} </span>
              <button onClick={Logout}> Logout </button>
            </h2>
          </div>
        ) : pageStatus === "signin" ? (
          <div className="App">
            <Route path="/login" />
            <LoginForm
              Login={Login}
              error={error}
              setPageStatus={setPageStatus}
            />
          </div>
        ) : pageStatus === "create" ? (
          <div className="App">
            <Route path="/users" />
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
      <NavbarBottom />
    </Router>
  );
}

export default App;
