import React, { useState, Fragment } from "react";
import Axios from "axios";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import PythonLearningResources from './components/python-learning-resources';

function App() {
  const [pageStatus, setPageStatus] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });

  const register = (details) => {
    Axios.post("/users", {
      username: details.name,
      email: details.email,
      password: details.password,
      password_2nd: details.password_2nd,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        setUser({
          name: details.name,
          email: details.email,
        });
        setError("");
        setPageStatus("Logged_in");
      }
    });
  }; 

  const Login = (details) => {
    Axios.post("/login", { 
      email: details.email,
      password: details.password,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        setError("");
        setPageStatus("Logged_in");
        setUser({
          name: details.name,
          email: details.email,
        });
      }
    });
  };

  const Logout = (details) => {
    setUser({ name: "", email: "" });
    setError("");
    setPageStatus("");
  };

  function refreshPage() {
    window.location.reload(false);
  }
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
          <div>
            <LoginForm Login={Login} error={error} setError={setError} />
          </div>
        </Route>
        <Route exact path="/signup">
          <div>
            <RegisterForm
              register={register}
              error={error}
              setError={setError}
            />
          </div>
        </Route>
        <Route path="/about.html" component={refreshPage}></Route>
        <Route path="/python-learning-resources" component = {PythonLearningResources}></Route>
      </Switch>
      <NavbarBottom />
      
    </>
  );
}

export default App;
