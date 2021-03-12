import React, { useState } from "react";
import Axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
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
        console.log("should switch");
      }
    });
  };

  const Logout = (details) => {
    setUser({ name: "", email: "" });
    setError("");
    setPageStatus("");
  };
  return (
    <>
      <Navbar setPageStatus={setPageStatus} pageStatus={pageStatus} />
      {pageStatus === "Logged_in" ? <Redirect to="/" /> : ""}
      <Switch>
        <Route exact path="/">
          <div className="welcome App">
            <h2>
              Welcome, <span> {user.name} </span>
              <button onClick={Logout}> Logout </button>
            </h2>
          </div>
        </Route>
        <Route exact path="/login">
          <div className="App">
            <LoginForm
              Login={Login}
              error={error}
              setPageStatus={setPageStatus}
            />
          </div>
        </Route>
        <Route exact path="/signup">
          <div className="App">
            <RegisterForm
              register={register}
              error={error}
              setPageStatus={setPageStatus}
            />
          </div>
        </Route>
        <Route path="/about.html"></Route>
      </Switch>
      <NavbarBottom />
    </>
  );
}

export default App;
