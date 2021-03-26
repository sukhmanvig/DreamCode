import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function BioForm({ type, error, success, setPageStatus }) {
  const [details, setDetails] = useState({ name: "", bio: "" });

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
        <h2>Edit {localStorage.getItem("username")}'s Bio</h2>
        {success !== "" ? <div className="error success">{success}</div> : ""}
        {error !== "" ? <div className="error">{error}</div> : ""}
        {/*<div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            placeholder = "Enter Username"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            required
          />
        </div>*/}
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Edit Bio</Form.Label>
        <Form.Control as="textarea" rows={3}
            onChange={(e) => setDetails({ ...details, bio: e.target.value })}
            value={details.bio}
            maxLength = {250}
            required/>
        </Form.Group>
        <input type="submit" value="Update Bio" />
        <button className="register" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default BioForm;
