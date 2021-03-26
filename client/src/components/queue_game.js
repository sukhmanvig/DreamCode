import React, { Fragment, Component } from 'react';
import '../css/queue_game.css';
import '../css/nav.css';
import '../css/dashboard-style.css';
import Queue from "../queue_game_code/Queue.js";
import Marble from "../queue_game_code/Marble.js";
import ProblemGenerator from "../queue_game_code/ProblemGenerator.js";
import Model from "../queue_game_code/Model.js";
import line from "../images/line.png";

export default class QueueGame extends Component {

    componentDidMount() {

        let x = new Marble("red", "A");
        let xx = new Marble("red", "A");
        let y = new Marble("green", "B");
        let z = new Marble("blue", "C");
        let w = new Marble("orange", "D");
        let v = new Marble("yellow", "E");

        let marbs = [x,y,z,w,v];

        let pg = new ProblemGenerator(marbs)
        let prob = pg.generateProblem(4);

        let canvasWidth = 800;
        let canvasHeight = 600;

        let canvas = document.getElementById("queueCanvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        let ctx = canvas.getContext("2d");


        let codeBlock = document.getElementById("code");

        ///////////////////////////////
        let i =0; // iterator index

        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        pg = new ProblemGenerator([x,y,z,w,v]);
        let gameProb = pg.generateProblem(3);
        let gameGoal = pg.generateGoal(gameProb);
        let gameModel = new Model(gameProb, gameGoal, 2);

        // adding buttons
        let buttonContainer = document.getElementById("input_output_buttons");
        let canvasContext = ctx;

        // pop from input
        let popInputButton = document.createElement("button");
        popInputButton.innerHTML = "Pop From Input";
        popInputButton.className = "game_button";
        popInputButton.onclick = function() {
            writeCodePopInput(codeBlock, gameModel); 
            gameModel.popFromInput();
            gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
        };
        buttonContainer.appendChild(popInputButton);

        // push to output button
        let pushOutputButton = document.createElement("button");
        pushOutputButton.innerHTML = "Push to Output";
        pushOutputButton.className = "game_button";
        pushOutputButton.onclick = function() {
            writeCodePushOutput(codeBlock, gameModel); 
            gameModel.pushToOutput();
            gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
        };
        buttonContainer.appendChild(pushOutputButton);

        // pop from output button
        let popFromOutputButton = document.createElement("button");
        popFromOutputButton.innerHTML = "Pop from Output";
        popFromOutputButton.className = "game_button";
        popFromOutputButton.onclick = function() {
            writeCodePopOutput(codeBlock, gameModel); 
            gameModel.popFromOutput();
            gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
        };
        buttonContainer.appendChild(popFromOutputButton);

        // new game button
        let newGameButton = document.createElement("button");
        newGameButton.innerHTML = "New Game";
        newGameButton.className = "new_game_button";
        newGameButton.onclick = function() { 
            writeCodeNewGame(codeBlock);
            newGame();
            gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
        };
        buttonContainer.appendChild(newGameButton);

        // push buttons
        buttonContainer = document.getElementById("enqueue_buttons");
        gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight );
        for (i = 0; i<gameModel.numQueues; i++) {
            let b = document.createElement("button");
            b.innerHTML = "Enqueue " + i;
            b.className = "game_button";
            let queueIndex = i.valueOf();
            b.onclick = function() {
                writeCodeEnqueue(queueIndex, codeBlock, gameModel); 
                gameModel.enqueueTo(queueIndex.valueOf());
                gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
            };
            buttonContainer.appendChild(b);
        }

        // pop buttons
        buttonContainer = document.getElementById("dequeue_buttons");
        for (i = 0; i<gameModel.numQueues; i++) {
            let b = document.createElement("button");
            b.innerHTML = "Dequeue " + i;
            b.className = "game_button";
            let queueIndex = i.valueOf();
            b.onclick = function() {
                writeCodeDequeue(queueIndex, codeBlock, gameModel); 
                gameModel.dequeueFrom(queueIndex.valueOf());
                gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
            };
            buttonContainer.appendChild(b);
        }

        function newGame() {
            gameProb = pg.generateProblem(5);
            gameGoal = pg.generateGoal(gameProb);
            gameModel = new Model(gameProb, gameGoal, 2);
            gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
        }


        function writeCodeEnqueue(queueNum, htmlElement, gameModel) {
            if (!gameModel.currentSelectionIsNull()) {
                htmlElement.innerHTML += `queue_${queueNum}.enqueue(current_item)\n\n`;
            }
        }

        function writeCodeDequeue(queueNum, htmlElement, gameModel) {
            if (!gameModel.queueIsEmpty(queueNum) && gameModel.currentSelectionIsNull()) {
                htmlElement.innerHTML += `current_item = queue_${queueNum}.dequeue()\n\n`;
            }
        }

        function writeCodePopInput(htmlElement, gameModel) {
            if (gameModel.currentSelectionIsNull() && !gameModel.inputIsEmpty()) {
                htmlElement.innerHTML += `current_item = input.pop()\n\n`;
            }
        }

        function writeCodePushOutput(htmlElement, gameModel) {
            if (!gameModel.currentSelectionIsNull()) {
                htmlElement.innerHTML += `output.push(current_item)\n\n`;
            }
        }

        function writeCodePopOutput(htmlElement, gameModel) {
            if (gameModel.currentSelectionIsNull()) {
                htmlElement.innerHTML += `current_item = output.pop()\n\n`;
            }
        }

        function writeCodeNewGame(htmlElement) {
            htmlElement.innerHTML = "";
        }
    }

    useEffect() {

    }

    render() {
        return (
        <div>

        <h1>Learn about Queues</h1>
        <br /><br /><br />
        <div id="explanationDiv">
            <p>
                A Queue is a common data structure in computer science, it can be
                described as a <i>First in, First out</i> data structure.
            </p>
            <p>
                Queues can be used to store data, and <i>FIFO</i> refers to that the data in the queue can only be accessed in the order it was added in. A helpful way to think about queues is to compare them to a lineup for a coffee shop. In this example, people make a single file ordering to reach the counter. The first person in line is the first one to receive service, the second person is called only after the first is done ordering, and so on. Thus, the first in line is the <strong>"first one in"</strong> and must be the <strong>"first one out"</strong> of the line. The diagram below illustrates this.
            </p>
            <img src={line}/> 
            <p>
                It can also be helpful to think of the items of a queue organized horizontally, with the right most item of the queue representing the first item added. There are 2 main methods to interact with queue.
            </p>
            <ul>
                <li> <strong>Enqueue</strong> - Adds something to the end of the queue. (Analogous to someone joining the end of a line).</li>
                <li> <strong>Dequeue</strong> - Removes the next item in the queue. (Analogous to the next person in line being called).</li>
            </ul>
            <br />



            <h4>How to play the Queue game:</h4>
            <ul>
                <li>
                    The goal of the game below is to make the Output box match the Goal box.
                    Both are listed on the right side of the Game window.
                </li>
                <li>
                    The <strong>Current item</strong> will show the item that was most recently removed from the <strong>Inputs</strong>, or was <strong>Dequeued</strong> from a queue. 
                </li>
                <li>
                    The buttons labeled with <strong>Enqueue</strong> will put the current
                    selection into the button's labeled destination. 
                </li>
                <li>
                    The <strong>New Game</strong> button will reload the game with a fresh set
                    of input circles.
                </li>
                <li>
                    The <strong>Enqueue</strong> and <strong>Dequeue</strong> buttons to manipulated the queues can be found below the game window.
                </li>
                <li>
                    Queue numbering starts from 0.
                </li>
            </ul>
        </div>

        {/*<!-- game -->*/}
        <div id="game_plus_code">

            <div id="game_container">

                <div id="gameDiv">
                    <canvas id="queueCanvas"></canvas>
                </div>
                <div id="game_buttons">
                    <div id="input_output_buttons" className="button_div"></div>
                    <div id="enqueue_buttons" className="button_div"></div>
                    <div id="dequeue_buttons" className="button_div"></div>
                </div>

            </div>
            <div id="code_container">
                <h3>Sample Method Calls</h3>
                <code><pre id="code"></pre></code>
            </div>

        </div>
        </div>
    
        );
    }

}
