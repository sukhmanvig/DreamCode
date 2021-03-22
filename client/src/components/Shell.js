//import "../css/shell.css";
import "../css/codemirror.css";
import "../css/cobalt.css";
import React, { useState, useEffect } from "react";
// require ("../js/python/skulpt.js");
// require ("../js/python/skulpt-stdlib.js");
// require ("../js/codemirror-5.59.2/lib/codemirror.js");
// require ("../js/codemirror-5.59.2/mode/javascript/javascript.js");
import {UnControlled as CodeMirror} from "react-codemirror2"
// import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
// import {python} from "@codemirror/lang-python"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Shell() {


    const [details, setDetails] = useState({ script: "print (2+2)", output:""});
    const [output, setOutput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setOutput(details.script);
        console.log(details);
      };
    
    // output functions are configurable.  This one just appends some text
    // to a pre element.
    function outf(text) {  
        setDetails({ ...details, output: text })
    } 

    // function builtinRead(x) {
    //     if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    //             throw "File not found: '" + x + "'";
    //     return Sk.builtinFiles["files"][x];
    // }

    // Here's everything you need to run a python program in skulpt
    // grab the code from your textarea
    // get a reference to your pre element for output
    // configure the output function
    // call Sk.importMainWithBody()
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
    function input(prompt){
        return new Promise((resolve, reject) => {
            resolve(window.prompt(prompt));
        });
    }
    const temp = ` 
    import turtle

    t = turtle.Turtle()
    t.forward(100)

    user = input("enter name")    
    print (user) `
    function testCode() {
        var dataToSend;
        // spawn new child process to call the python script
        const python = spawn('python', ['script1.py']);
        // collect data from script
        python.stdout.on('data', function (data) {
         console.log('Pipe data from python script ...');
         dataToSend = data.toString();
         console.log(dataToSend);
        });}

    return (
        <Container className=" mt-5">
            <Row>
                <Col className="mb-5">
                    <p className="display-3">Daily Challenge</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="display-5">Question goes here</p>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={{ span: 12}}>
                    <form onSubmit={submitHandler}>
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

                        <Button className="mt-3 mr-5" type="submit">Run</Button>
                        <Button className=" ml-5 mt-3" variant= "danger" type="submit">Submit</Button>
                    </form>
                </Col>
                <Col md={3} sm={{ span: 12}}>
                    <pre className=" mt-5" onChange={(e) => setDetails({...details, output: e.target.value })}>{output}</pre>
                </Col>
            </Row>
            </Container>
    )
}
export default Shell;