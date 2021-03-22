import "../css/index.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function LoginForm({ Login, error, setError }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
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
              Forgot <a href="forgotPassword.html">password?</a>
            </span>
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
