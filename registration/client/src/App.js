import React, { useState } from "react";
import Axios from "axios";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./css/nav.css";

function App() {
  const [status, setStatus] = useState("");

  const [error, setError] = useState("");
  const [loser, setLoser] = useState({ name: "", email: "" });

  const [loginStatus, setLoginStatus] = useState("");

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
        setLoginStatus(response.data[0]);
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
        setLoginStatus(response.data[0].username);
      }
    });
  };

  const Logout = (details) => {
    setLoser({ name: "", email: "" });
    setError("");
    setLoginStatus("");
  };

  return (
    <div className="App">
      {loginStatus !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span> {loser.name} </span>
          </h2>
          <button onClick={Logout}> Logout </button>
        </div>
      ) : status === "" ? (
        <LoginForm Login={Login} error={error} loginCode={loginCode} />
      ) : (
        <RegisterForm register={register} error={error} loginCode={loginCode} />
      )}
    </div>
  );
}

export default App;
