//import "../css/shell.css";
import "../css/codemirror.css";
import "../css/cobalt.css";
import React, { useState, Component } from "react";
// require ("../js/codemirror-5.59.2/lib/codemirror.js");
// require ("../js/codemirror-5.59.2/mode/javascript/javascript.js");
import { Controlled as CodeMirror } from "react-codemirror2";
// import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
// import {python} from "@codemirror/lang-python"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";

class Shell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      question: "",
      check: "",
      output: "",
      value: "",
      attempt: 0,
      fail: false,
      success: false,
      script: `def main():#DON'T CHANGE THE FUNCTION NAME
    print ("Hello World")
  
if __name__==="__main__":#DON'T CHANGE BELOW 
    main()`,
    };

    //get reference for input
    this.nameRef = React.createRef();

    //Setup cursor position for input
    this.cursor = 0;
  }

  //updates cursor location on textarea
  componentDidUpdate() {
    this._setCursorPositions();
  }

  _setCursorPositions = () => {
    //reset the cursor position for input
    this.nameRef.current.selectionStart = this.cursor;
    this.nameRef.current.selectionEnd = this.cursor;
  };

  //updates value on whatever state is sent in
  handleInputChange = (key, val) => {
    this.setState({
      [key]: val,
    });
  };

  //runs before page loads to get the question prompt,starter code and tests
  componentWillMount() {
    Axios.get("/getQuestion", {}).then((response) => {
      this.handleInputChange("question", response.data.question);
      this.handleInputChange("check", response.data.check);
      //this.handleInputChange("attempt", response.data.attempt); NEED TO ADD ATTEMPT TRACKER TO DB
      let script = response.data.starter;
      this.handleInputChange("script", script);
      this.setState({ script });
      console.log(this.state.script);
      console.log(script);
    });
  }
  //hides and closes the modal
  handleFailClose = () => this.handleInputChange("fail", false);
  handleFailShow = () => this.handleInputChange("fail", true);
  handleSuccessClose = () => this.handleInputChange("success", false);
  handleSuccessShow = () => this.handleInputChange("success", true);

  //displays response in output box
  DisplayOutput = (response) => {
    if (response.data) {
      console.log(response.data);
      this.handleInputChange("output", response.data.output);
    } else {
      console.log(response.data);
      this.handleInputChange("output", response.data.output);
    }
  };

  //For when user wants to submit his question to be tested. ONLY GET 1 ATTEMPT
  Submit = (e) => {
    if (this.state.attempt === 0) {
      e.preventDefault();
      Axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"), //the token is a variable which holds the token
      };
      Axios.post("/compile", {
        script: this.state.script + this.state.check,
      }).then((response) => {
        this.DisplayOutput(response);
        this.state.attempt += 1;
        console.log(response);
        console.log(response.data.output === "Everything passed\n");
        if (response.data.output === "Everything passed\n") {
          this.handleSuccessShow();
        }
      });
    } else {
      e.preventDefault();
      this.handleInputChange(
        "output",
        "Sorry you only get one attempt per day.\nVisit our code repository for more practice questions"
      );
      this.handleFailShow();
    }
  };
  //when user just wants to test their code
  Test = (e) => {
    e.preventDefault();
    Axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"), //the token is a variable which holds the token
    };
    Axios.post("/compile", {
      script: this.state.script + "\n",
    }).then((response) => {
      this.DisplayOutput(response);
    });
  };

  render() {
    return (
      <Container className=" mt-5">
        <Modal show={this.state.fail} onHide={this.handleFailClose}>
          <Modal.Header>
            <Modal.Title>Attempt Limit reached</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sorry! You only get one attempt per day but you can visit our code
            repository for more practice questions.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleFailClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.success} onHide={this.handleSuccessClose}>
          <Modal.Header>
            <Modal.Title>Congrats</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Congratulations! You got the challenge done. If you want more
            questions visit our code repository.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleSuccessClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col className="mb-5">
            <p className="display-3">Daily Challenge</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead">{this.state.question}</p>
          </Col>
        </Row>
        <Row>
          <Col noGutters md={8} sm={{ span: 12 }}>
            <form>
              <CodeMirror
                className=" mt-5"
                ref={this.nameRef}
                type="text"
                autoComplete="off"
                id="name"
                value={this.state.script}
                options={{
                  mode: "python",
                  theme: "cobalt",
                  lineNumbers: true,
                  indentWithTabs: true,
                  smartIndent: true,
                }}
                onBeforeChange={(editor, data, script) => {
                  this.handleInputChange("script", script);
                  this.value = this.state.script;
                }}
                onChange={(editor, data, value) => {
                  this.cursor = editor.cursorCoords;
                  this.handleInputChange("script", editor.getValue());
                  this.setState({ value });
                  this.value = this.state.script;
                }}
              />
              <Row>
                <Col md={3}>
                  <Button onClick={this.Test} className="mt-3" type="submit">
                    Test
                  </Button>
                </Col>
                <Col md={{ span: 2, offset: 7 }}>
                  <Button
                    onClick={this.Submit}
                    className="mt-3 mb-3"
                    variant="danger"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col className="mt-5 mb-5" md={4} sm={{ span: 12 }}>
            <pre>{this.state.output}</pre>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Shell;
