import React from "react";
import { Switch, Redirect, Route, useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import Dashboard from "./components/dashboard";
import Settings from "./components/boot";
import PasswordReset from "./components/PasswordReset";
import Profile from "./components/Profile";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import ifgame from "./components/ifgame";
import IfCodeSnippets from "./components/ifcode";
import DictCodeSnippets from "./components/dictcode";
import "./css/index.css";

function App() {
  let history = useHistory();
  const Logout = () => {
    window.location.reload(false);
    localStorage.clear();
    return history.push("/");
  };

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "50px", height: "100%" }}>
        <Switch>
          <PublicRoute restricted={false} exact path="/">
            <div className="welcome App">
              <h2>
                Welcome, <span> {localStorage.getItem("username")} </span>
                <button onClick={Logout}> Logout </button>
              </h2>
            </div>
          </PublicRoute>
          <PublicRoute
            restricted={true}
            exact
            path="/login"
            component={LoginForm}
          />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={RegisterForm}
          />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/passwordreset" component={PasswordReset} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/about.html" component={refreshPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/shell" />
          <PrivateRoute path="/ifgame" component={ifgame} />
          <PrivateRoute path="/ifcode" component={IfCodeSnippets} />
	        <PrivateRoute path="/dictcode" component={DictCodeSnippets} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
      <NavbarBottom />
    </div>
  );
}

export default App;
