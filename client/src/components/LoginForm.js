import React, { useState } from "react";
import Axios from "axios";
import "../css/index.css";
import { Link, useHistory } from "react-router-dom";

function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  let history = useHistory();

  const Login = (e) => {
    e.preventDefault();
    Axios.post("/login", {
      email: details.email,
      password: details.password,
      rememberMe: isChecked,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        //set all the values in the local storage
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", details.email);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("rememberMe", isChecked);
        setError("");
        history.push("/");
        window.location.reload(false);
      }
    });
  };

  return (
    <div className="App">
      <form onSubmit={Login}>
        <div className="form-inner">
          <h2 className="form-group">Login</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              required
            />
            <span>
              Forgot <Link to="/passwordreset">password?</Link>
            </span>
            <label style={{ display: "inline ", float: "right" }}>
              <input
                style={{
                  width: "20px",
                  display: "inline",
                }}
                type="checkbox"
                defaultChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              Remember Me
            </label>
          </div>
          <input type="submit" value="LOGIN" />
          <Link to="/">
            <button className="register">CANCEL</button>
          </Link>
          <span className="form-group">
            Don't have an account? <Link to="/signup">SIGN UP</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
