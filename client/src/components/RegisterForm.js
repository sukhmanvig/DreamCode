import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
function RegisterForm({ register, error, setError }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    password_2nd: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    register(details);
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
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
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
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
