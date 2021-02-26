import React, { useState } from "react";
import Axios from 'axios';
import './App.css';
import './css/nav.css';

function App() {

  const [unameReg, setUnameReg] = useState("");
  const [pswReg, setPswReg] = useState("");

  const [uname, setUname] = useState("");
  const [psw, setPsw] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/users", {
      username: unameReg,
      password: pswReg,
    }).then((response) => {
      console.log(response);
    });
  }

  const Login = () => {
    Axios.post("http://localhost:3001/login", {
      username: uname,
      password: psw,
    }).then((response) => {
      if (response.data.message){
        setLoginStatus(response.data.message);
        //console.log(response.data);
      }else {
        setLoginStatus(response.data[0].username);
      }
      
    });
  }

  return (
    <div className="App" >
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label ><b>Username</b></label>
        <input type="text" placeholder="Enter Username"
          onChange={(e) => {
            setUnameReg(e.target.value);
          }}
          required />

        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password"
          onChange={(e) => {
            setPswReg(e.target.value);
          }}
          required />

        <div className="container">
          <button type="submit" className="signupbtn" onClick={register}>Sign Up</button>
        </div>
      </div>
      <div className="container">
        <h1>Login Up</h1>
        <label ><b>Username</b></label>
        <input type="text" placeholder="Enter Username"
          onChange={(e) => {
            setUname(e.target.value);
          }}
          required />

        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password"
          onChange={(e) => {
            setPsw(e.target.value);
          }}
          required />

        <div className="container">
          <button type="submit" className="signupbtn" onClick={Login}>login</button>
        </div>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
