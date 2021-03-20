import React, { useState } from "react";
import Axios from "axios";
import "../css/confirmPasswordReset.css";
import "../css/landing-style.css";///THIS IMPORT AFFECTS THE SETTINGS PAGE LAYOUT BUT IS NEEDED FOR THE PASSWORD RESET PAGE

function PasswordReset() {
    const [details, setDetails] = useState({ name: "", oldpassword: "",newpassword: "" });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetPass = (details) => {
        Axios.post('/settingPassword', {
          username: details.name,
          oldpassword: details.oldpassword,
          newpassword: details.newpassword
          ,
        }).then((response) => {
            setSuccess(response.data.message);
            setError(""); 

            }, (error) => {
                console.log(error)
                setSuccess("");
                setError("Username or password incorrect"); 
            }
        );
      }
      const submitHandler = () => {
        resetPass(details);
      };
    return (
        <>
            <div className=" mt-5 container pure-form">
                <fieldset>
                        <h1>Set a New Password</h1>
                        {success !== "" ? <div className="error success">{success}</div> : ""}
                        {error !== "" ? <div className="error">{error}</div> : ""}
                        
                        <input type="text" 
                                placeholder="Enter username" 
                                id="password"
                                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                value={details.name}
                                required/>
                        <input type="password" 
                                placeholder="Enter current Password" 
                                id="password" 
                                onChange={(e) => setDetails({ ...details, oldpassword: e.target.value })}
                                value={details.oldpassword}
                                required/>
                        <input type="password" 
                                placeholder="Enter New Password" 
                                id="new_password" 
                                onChange={(e) => setDetails({ ...details, newpassword: e.target.value })}
                                value={details.newpassword}
                                required
                        />
                        <button type="submit"  onClick={() => submitHandler()}  className="pure-button pure-button-primary">Confirm</button>

                </fieldset>
            </div>
        </>
    )
    
}
export default PasswordReset;