import React, { useState } from "react";

function LoginForm({ Login, error, setPageStatus }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const createHandler = (e) => {
    e.preventDefault();
    setPageStatus("create");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    Login(details);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setPageStatus("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            required
          />
        </div>
        <div className="form-group">
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
          <span className="psw">Forgot <a href="forgotPassword.html">password?</a></span>
        </div>
        <input type="submit" value="LOGIN" />
        <button className="register" onClick={createHandler}>
          SIGN UP
        </button>
        {/*<button className="register" onClick={cancelHandler}>
          Cancel
        </button>*/}
      </div>
      
    </form>
  );
}

export default LoginForm;
