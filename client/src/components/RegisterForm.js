import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../css/index.css";
function RegisterForm() {
  const [error, setError] = useState("");
  let history = useHistory();
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    password_2nd: "",
  });

  const register = (e) => {
    e.preventDefault();
    Axios.post("/users", {
      username: details.username,
      email: details.email,
      password: details.password,
      password_2nd: details.password_2nd,
    }).then((response) => {
      if (response.data.message) {
        //setLoginStatus(response.data.message);
        setError(response.data.message);
      } else {
        localStorage.setItem("username", details.username);
        localStorage.setItem("email", details.email);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setError("");
        history.push("/");
      }
    });
  };
  return (
    <div className="App">
      <form onSubmit={register}>
        <div className="form-inner">
          <h2 className="form-group">Register</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              placeholder=" Enter Name"
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              placeholder=" Enter Email"
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
              placeholder=" Enter Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              required
            />
            <label htmlFor="password">Re-enter Password:</label>
            <input
              placeholder=" Re-enter Enter Password"
              type="password"
              name="password_2nd"
              id="password_2nd"
              onChange={(e) =>
                setDetails({ ...details, password_2nd: e.target.value })
              }
              value={details.password_2nd}
              required
            />
          </div>
          <input type="submit" value="REGISTER" />
          <Link to="/">
            <button className="register">CANCEL</button>
          </Link>
          <span className="form-group">
            Already have an account? <Link to="/login">SIGN IN</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
