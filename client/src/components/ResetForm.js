import React, { useState } from "react";

function ResetForm({ type, error, success, setPageStatus }) {
  const [details, setDetails] = useState({ name: "", email: "", oldpassword: "",newpassword: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    type(details);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setPageStatus("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Change Password</h2>
        {success !== "" ? <div className="error success">{success}</div> : ""}
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
          <label htmlFor="password">Enter current Password:</label>
          <input
            placeholder="Enter current password"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, oldpassword: e.target.value })
            }
            value={details.oldpassword}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter New Password:</label>
          <input
            placeholder="Enter new password"
            type="password"
            name="newpassword"
            id="newpassword"
            onChange={(e) =>
              setDetails({ ...details, newpassword: e.target.value })
            }
            maxLength = {250}
            value={details.newpassword}
            required
          />
        </div>
        <input type="submit" value="UPDATE PASSWORD" />
        <button className="register" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ResetForm;
