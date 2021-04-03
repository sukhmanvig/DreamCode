import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import Dashboard from "./components/dashboard";
import Settings from "./components/Settings";
import PasswordReset from "./components/PasswordReset";
import Profile from "./components/Profile";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import IfCodeSnippets from "./components/ifcode";
import TreeTravTutorial from "./components/TreeTraversalsTutorial";
import TreeTravGame from "./components/TreeTraversalsGame";
import Shell from "./components/Shell";
import DictCodeSnippets from "./components/dictcode";
import DictGame from "./components/DictGame";
import StackGame from "./components/stack_game";
import QueueGame from "./components/queue_game";
import Contact from "./components/Contact";
import ListsGame from "./components/ListsGame";
import ListsGameTutorial from "./components/ListsGameTutorial";
import ifgame from "./components/ifgame";
import SortCodeSnippets from "./components/sort-code";
import SortGamepage from "./components/sort-page";
import PythonLearningResources from "./components/python-learning-resources";
import PythonProblemRepository from "./components/python-problem-repository";
import "./css/index.css";
//import Axios from "axios";

function App() {
  let history = useHistory();
  const Logout = () => {
    {
      /*let token = localStorage.getItem("accessToken");
    Axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token, //the token is a variable which holds the token
    };
    Axios.get("/user", {
      email: "details.email",
    }).then((response) => {
      console.log(response);
    });*/
    }
    localStorage.clear();
    window.location.reload(false);
    return history.push("/");
  };

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "50px", height: "100%" }}>
        <Switch>
          <PublicRoute restricted={false} exact path="/">
            <div className="welcome App">
              <h2>
                Welcome <span> {localStorage.getItem("username")} </span>
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
          <PrivateRoute exact path="/settings" component={Settings} />{" "}
          <PrivateRoute exact path="/contact" component={Contact} />{" "}
          <PublicRoute exact path="/passwordreset" component={PasswordReset} />{" "}
          <PrivateRoute exact path="/profile" component={Profile} />{" "}
          <PrivateRoute exact path="/about" />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />{" "}
          <PrivateRoute exact path="/shell" component={Shell} />{" "}
          <PrivateRoute exact path="/ifgame" component={ifgame} />{" "}
          <PrivateRoute exact path="/ifcode" component={IfCodeSnippets} />{" "}
          <PrivateRoute
            exact
            path="/treetravtut"
            component={TreeTravTutorial}
          />
          <PrivateRoute exact path="/treetravgame" component={TreeTravGame} />
          <PrivateRoute
            exact
            path="/dictcode"
            component={DictCodeSnippets}
          />{" "}
          <PrivateRoute exact path="/dictgame" component={DictGame} />{" "}
          <PrivateRoute exact path="/stack_game" component={StackGame} />{" "}
          <PrivateRoute exact path="/queue_game" component={QueueGame} />{" "}
          <PrivateRoute exact path="/listsgame" component={ListsGame} />{" "}
          <PrivateRoute
            exact
            path="/ListsGameTutorial"
            component={ListsGameTutorial}
          />
          <PrivateRoute
            exact
            path="/pythonlearn"
            component={PythonLearningResources}
          />
          <PrivateRoute
            exact
            path="/PythonProblemRepository"
            component={PythonProblemRepository}
          />
          <PrivateRoute exact path="/sort-page" component={SortGamepage} />
          <PrivateRoute exact path="/sort-code" component={SortCodeSnippets} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
      <NavbarBottom />
    </div>
  );
}

export default App;
