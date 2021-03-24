//import "../css/shell.css";
import "../css/codemirror.css";
import "../css/cobalt.css";
import React, {useState} from "react";
// require ("../js/codemirror-5.59.2/lib/codemirror.js");
// require ("../js/codemirror-5.59.2/mode/javascript/javascript.js");
import {UnControlled as CodeMirror} from "react-codemirror2"
// import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
// import {python} from "@codemirror/lang-python"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Axios from "axios";

function Shell() {

    const template =
    `def main():
        print ("Hello World")

if __name__ == "__main__": 
    main()`;

    const [details, setDetails] = useState({ script: template, output:""});
    const [output, setOutput] = useState("");
    const [question, setQuestion] = useState("");
    let check;

    Axios.get("/getQuestion", {
      }).then((response) => {
        setQuestion(response.data.question);
        check = response.data.check;
    });

//     check =
// `
// def test_main():
//     assert main() == 6, "Should be 6"
    
// if __name__ == "__main__":
//     test_main()
//     print("Everything passed")`;

    const Submit = (e) => {
        e.preventDefault();
        Axios.post("/compile", {
        script: details.script + check,
      }).then((response) => {
        DisplayOutput(response);
    });
  };

    const Test = (e) => {
        e.preventDefault();
        Axios.post("/compile", {
        script: details.script + "\n",
    }).then((response) => {
        DisplayOutput(response);
    });
    };

    function DisplayOutput(response) {
        if (response.data) {
            console.log(response.data);
            setOutput(response.data.output);
          } else {
            console.log(response.data);
            setOutput(response.data.output);
          }
    }
    return (
        <Container className=" mt-5">
            <Row>
                <Col className="mb-5">
                    <p className="display-3">Daily Challenge</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="display-5">{question}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={{ span: 12}}>
                    <form >
                        <CodeMirror className=" mt-5"
                            value={details.script}
                            options={{
                                mode: 'python',
                                theme: 'cobalt',
                                lineNumbers: true,
                                indentWithTabs: true,
                                smartIndent: true,
                            }}
                            onChange={(editor, data, value) => setDetails({ ...details, script: value })}/>

                        <Button onClick={Test} className="mt-3 mr-5" type="submit">Test</Button>
                        <Button onClick={Submit} className=" ml-5 mt-3" variant= "danger" type="submit">Submit</Button>
                    </form>
                </Col>
                <Col md={5} sm={{ span: 12}}>
                    <pre className=" mt-5" onChange={(e) => setDetails({...details, output: e.target.value })}>{output}</pre>
                </Col>
            </Row>
            </Container>
    )
}
export default Shell;