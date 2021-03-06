import React, { useState } from "react";

function RegisterForm({ register, error, setPageStatus }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    register(details);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setPageStatus("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Enter Name"
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
            placeholder="Enter Email"
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
            placeholder="Enter Password"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            required
          />
        </div>
        <input type="submit" value="REGISTER" />
        <button className="register" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
