import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Axios from "axios";
import React, { useState } from "react";
import ResetForm from "./ResetForm";
import BioForm from "./EditBio";
import Toggle from "./Toggle";
import "../css/setting-styles.css";
import "../css/index.css";

function Settinglist() {
    return (
        <ul className="settings setting-list">            
                        <li>
                            <div class="form-check">
                                <label class="form-check-label" for="exampleCheck1">Receive newsletters</label>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            </div>
                        </li>
                        <li>
                        <div class="form-check">
                                <label class="form-check-label" for="exampleCheck2">Display name on profile</label>
                                <input type="checkbox" class="form-check-input" id="exampleCheck2"></input>
                            </div>
                        </li>
                    </ul>
    )
}

function General({ uname, email, date }) {
  const [pageStatus, setPageStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const EditBio = (details) => {
    Axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"), //the token is a variable which holds the token
    };
    Axios.post("/EditBio", {
      bio: details.bio,
      name: localStorage.getItem("username"),
    }).then(
      (response) => {
        setSuccess(response.data.message);
        setError("");
      },
      (error) => {
        console.error(error);
        setSuccess("");
        setError("Bio error");
      }
    );
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={5} xs={6}>
            <ul className=" settings setting-list">
              <li>USERNAME:</li>
              <p>{uname}</p>
              <br />
              <li>NAME:</li>
              <p>{uname}</p>
              <br />
              <li>EMAIL:</li>
              <p>{email}</p>
              <br />
              <li>Dark Mode</li>
              <p>
                <Toggle />
              </p>
              <br />
            </ul>
          </Col>
          <Col xs={6} md={{ span: 5, offset: 1 }} className="">
            <Button
              className="mb-1"
              onClick={() =>
                pageStatus === "EditBio"
                  ? setPageStatus("")
                  : setPageStatus("EditBio")
              }
              variant="info"
            >
              Edit Bio
            </Button>
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
      ) : (
        ""
      )}
    </>
  );
}
function Notifs() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6 }}>
          <Settinglist />
        </Col>
      </Row>
    </Container>
  );
}
function Privacy() {
  const [pageStatus, setPageStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPass = (details) => {
    Axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"), //the token is a variable which holds the token
    };
    Axios.post("/settingPassword", {
      username: details.name,
      token: localStorage.getItem("username"),
      oldpassword: details.oldpassword,
      newpassword: details.newpassword,
    }).then(
      (response) => {
        setSuccess(response.data.message);
        setError("");
      },
      (error) => {
        console.error(error);
        setSuccess("");
        setError("Username or password incorrect");
      }
    );
  };

  return (
    <>
      <Container className="pb-5">
        <Row className="pb-5">
          <Col md={{ span: 12 }}>
            <ul className="setting-list">
              <li>FORGOT PASSWORD:</li>
              <Button
                variant="danger"
                className="inline"
                onClick={() =>
                  pageStatus === "ResetPassword"
                    ? setPageStatus("")
                    : setPageStatus("ResetPassword")
                }
              >
                Reset Password
              </Button>
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
      ) : (
        ""
      )}
    </>
  );
}

function Settings() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const settingInfo = () => {
    Axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"), //the token is a variable which holds the token
    };
    Axios.post("/settingInfo", {
      token: localStorage.getItem("username"),
    }).then(
      (response) => {
        setUname(response.data.username);
        setEmail(response.data.email);
        setDate(response.data.date_created.substring(0, 10));
      },
      (error) => {
        console.error(error);
      }
    );
  };
  settingInfo();
  return (
    <Container className=" settings mt-5">
      <Row>
        <Col md={4} sm={{ span: 12 }}>
          <h1 id="setting-tile">Account Settings</h1>
        </Col>
        <Col md={3} sm={12}>
          <div className="acc-preview">
            <p>{uname}'s been a member since {date}</p>
          </div>
        </Col>
        <Col
          md={{ span: 3, offset: 2 }}
          sm={{ span: 4, offset: 6 }}
	        xs={{ span: 12, offset:0 }}
        >
          <div
            attribution="Peter Southwood, CC0, via Wikimedia Commons"
            id="circle"
          ></div>
        </Col>
      </Row>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="general">
        <Row>
          <Col sm={4} md={3}>
            <ListGroup variant="flush" className="rounded">
              <ListGroup.Item eventKey="general" className="s-category pt-3 pb-3">
                General Settings
              </ListGroup.Item>
              <ListGroup.Item eventKey="notif" className="s-category pt-3 pb-3">
                Notifications
              </ListGroup.Item>
              <ListGroup.Item
                eventKey="privacy"
                className="s-category pt-3 pb-3 mb-5 border-bottom"
              >
                Privacy
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={{ span: 7, offset: 1 }} className="mt-5 border ">
            <Tab.Content>
              <Tab.Pane eventKey="general" className="mt-5">
                <General uname={uname} email={email} date={date} />
              </Tab.Pane>
              <Tab.Pane eventKey="notif" className="mt-5">
                <Notifs id="notif" />
              </Tab.Pane>
              <Tab.Pane eventKey="privacy" className="mt-5">
                <Privacy id="privacy" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
export default Settings;
