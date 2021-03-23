//import "../css/shell.css";
import "../css/codemirror.css";
import "../css/cobalt.css";
import React, { useState, useEffect } from "react";
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
//import pycompiler from "./pycompiler.js";
//import skulpt from "./skulpt.js";
//import skulpt_stdlib from "./skulpt-stdlib.js";

function Shell() {

    const template =
    `def main():
        print ("Hello World")

if __name__ == "__main__": 
    main()`;
    const [details, setDetails] = useState({ script: template, output:""});
    const [output, setOutput] = useState("");
    const [question, setQuestion] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setOutput(details.script);
        console.log(details);
      };
    
    // output functions are configurable.  This one just appends some text
    // to a pre element.
    // function outf(text) {  
    //     setDetails({ ...details, output: text })
    // } 

    // function builtinRead(x) {
    //     if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    //             throw "File not found: '" + x + "'";
    //     return Sk.builtinFiles["files"][x];
    // }

    // // Here's everything you need to run a python program in skulpt
    // // grab the code from your textarea
    // // get a reference to your pre element for output
    // // configure the output function
    // // call Sk.importMainWithBody()
    // function runit (details) { 
    //     //var code = myCodeMirror.getValue();
    //     var code = details.script;
    //     //var prog = document.getElementById("yourcode").value; 
    //     var mypre = details.output;
    //     //mypre.innerHTML = ''; 
    //     Sk.pre = "output";
    //     Sk.configure({output:outf,inputfun: input, inputfunTakesPrompt: true}); 
    //     (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'draw-output';
    //     var myPromise = Sk.misceval.asyncToPromise(function() {
    //         return Sk.importMainWithBody("<stdin>", false, code, true);
    //     });
    //     myPromise.then(function(mod) {
    //         console.log('success');
    //         //mypre.style.color = "black";
    //         //mypre.style.opacity = 1;
    //     },
    //         function(err) {
    //         console.err(err.toString());
    //         //mypre.style.color = "red";
    //         //mypre.innerText = err.toString(); 
    //     });
    // } 
    // function input(prompt){
    //     return new Promise((resolve, reject) => {
    //         resolve(window.prompt(prompt));
    //     });
    // }
    // function testCode() {
    //     var dataToSend;
    //     // spawn new child process to call the python script
    //     const python = spawn('python', ['script1.py']);
    //     // collect data from script
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend);
    //     });}

    const Submit = (e) => {
        e.preventDefault();
        Axios.post("/compile", {
        script: details.script + "\n" +
`def test_main():
    assert main() == 6, "Should be 6"
    
if __name__ == "__main__":
    test_main()
    print("Everything passed")`,
        stdin: "2",
      }).then((response) => {
        if (response.data) {
          //setLoginStatus(response.data.message);
          console.log(response.data);
          setOutput(response.data.output);
        } else {
          console.log(response.data);
          //set all the values in the local storage
          setOutput(response.data.output);
        }
    });
  };
    const Test = (e) => {
        e.preventDefault();
        Axios.post("/compile", {
        script: details.script + "\n",
    }).then((response) => {
        if (response.data) {
        console.log(response.data);
        setOutput(response.data.output);
        } else {
        console.log(response.data);
        setOutput(response.data.output);
        }
    });
    };

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