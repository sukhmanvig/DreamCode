import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Axios from "axios";
import React, { useState } from "react";
import ResetForm from "./ResetForm";
import BioForm from "./EditBio";
import "../css/setting-styles.css";
import "../css/index.css"

function Settinglist() {

    return (
        <ul className="settings setting-list">            
                        <li>
                            <label className="mb-3"> Recieve newsletters
                                <input className="ml-2" type="checkbox" defaultChecked="True"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="mb-2"> Display name on profile
                                <input className="ml-2 mt-1" type="checkbox" defaultChecked="True"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
    )
}

function General({uname,email}) {
    const [pageStatus, setPageStatus] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const EditBio = (details) => {
        Axios.post('/EditBio', {
          bio: details.bio,
          name: details.name,
          token: localStorage.getItem("username")
          ,
        }).then((response) => {
            setSuccess(response.data.message);
            setError(""); 

            }, (error) => {
                console.log(error)
                setSuccess("");
                setError("Bio error"); 
            }
        );
      }
    return (
        <>
        <Container>
            <Row>
                <Col md={5}>
                    <ul className=" settings setting-list">            
                        <li>USERNAME:</li><p>{uname}</p><br/>
                        <li>NAME:</li><p>{uname}</p><br/>
                        <li>EMAIL:</li><p>{email}</p><br/>
                        <li>BIRTHDAY:</li><p>birthday</p><br/>
                        <li>PASSWORD:</li><p>*******</p>
                    </ul>
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="">
                    <Button className="mb-1" onClick={() => pageStatus === "EditBio" ? (setPageStatus("")): (setPageStatus("EditBio"))} variant="info">Edit Bio</Button>
                    <Settinglist/>
                </Col>
            </Row>
        </Container>
                    {pageStatus === "EditBio" ? (
                        <div className="App">
                            <BioForm
                                type={EditBio}
                                error={error}
                                success={success}
                                setPageStatus={setPageStatus}
                            />
                        </div>
                    ) : ("")} 
                    
        </>
  
    )
}
function Notifs() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 5}}>
                    <Settinglist/>
                </Col>
            </Row>
        </Container>
  
    )
}
function Privacy() {
    const [pageStatus, setPageStatus] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetPass = (details) => {
        Axios.post('/settingPassword', {
          username: details.name,
          token: localStorage.getItem("username"),
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

    return (
        <>
        <Container className="pb-5">
            <Row className="pb-5">
                <Col md={{ span: 12}}>
                    <ul className="setting-list">            
                    <li>FORGOT PASSWORD:</li>
                    <Button variant="danger" className="inline" onClick={() => pageStatus === "ResetPassword" ? (setPageStatus("")): (setPageStatus("ResetPassword"))}>Reset Password</Button>
                   </ul>
                </Col>
            </Row>
        </Container>
            {pageStatus === "ResetPassword" ? (
                <div className="App">
                    <ResetForm
                        type={resetPass}
                        error={error}
                        success={success}
                        setPageStatus={setPageStatus}
                    />
                </div>
            ) : ("")}
        </>
  
    )
}

function Settings () {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    const settingInfo = () => {
        Axios.post('/settingInfo', {
          token: localStorage.getItem("username")
          ,
        }).then((response) => {
            setUname(response.data.username)
            setEmail(response.data.email)
            setDate(response.data.date)

            }, (error) => {
                console.error(error)
            }
        );
      }
      settingInfo();
    return (
        <Container className=" settings mt-5">
            <Row>
                <Col md={4} sm={{ span: 12}}>
                    <h1 id="setting-tile">Account Settings</h1>
                </Col>
                <Col md={3} sm={12}>
                    <div className="acc-preview">
                        <p className="mr-1" id="usr">{uname} </p>
                        <p className=""> Member Since {date}</p>
                    </div>
                </Col>
                <Col md={{ span: 3, offset:2}} xs={{span: 4, offset:3}} sm={{span: 4, offset:6}}>
                    <div attribution= "Peter Southwood, CC0, via Wikimedia Commons" id="circle"></div>
                </Col>
            </Row>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="general">
                <Row >
                    <Col sm={4} md={3}>
                    <ListGroup variant="flush" className="rounded">
                        <ListGroup.Item eventKey="general" className="pb-3">
                        General Settings
                        </ListGroup.Item>
                        <ListGroup.Item eventKey="notif" className="pb-3">
                        Notifications
                        </ListGroup.Item>
                        <ListGroup.Item eventKey="privacy" className="pb-3 mb-5 border-bottom">
                        Privacy
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={{ span: 7, offset: 1}} className="mt-5 border ">
                        <Tab.Content>
                            <Tab.Pane eventKey="general" className="mt-5">
                                <General uname={uname} email={email}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="notif" className="mt-5">
                                <Notifs id="notif"/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="privacy" className="mt-5">
                                <Privacy id="privacy"/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
export default Settings;
