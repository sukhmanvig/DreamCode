import React, { Component } from 'react';
import '../css/stack_game.css';
import '../css/nav.css';
import '../css/dashboard-style.css';
import Marble from "../stack_game_code/Marble.js";
import ProblemGenerator from "../stack_game_code/ProblemGenerator.js";
import Model from "../stack_game_code/Model.js";
import tennis_balls from "../images/tennis_balls.png";

export default class StackGame extends Component {


    componentDidMount() {
	document.title = "Stack Game";

        let x = new Marble("red", "A");
        let y = new Marble("green", "B");
        let z = new Marble("blue", "C");
        let w = new Marble("orange", "D");
        let v = new Marble("yellow", "E");

        let marbs = [x,y,z,w,v];

        let pg = new ProblemGenerator(marbs)

        let canvasWidth = 800;
        let canvasHeight = 600;

        let canvas = document.getElementById("stackCanvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        let ctx = canvas.getContext("2d");


        let codeBlock = document.getElementById("stackCode");

        let moves = 0;

        ///////////////////////////////
        let i =0; // iterator index

        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        pg = new ProblemGenerator([x,y,z,w,v]);
        let gameProb = pg.generateProblem(3);
        let gameGoal = pg.generateGoal(gameProb);
        let gameModel = new Model(gameProb, gameGoal, 3);

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
            makemove()
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
            makemove()
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
            makemove()
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
        buttonContainer = document.getElementById("push_buttons");
        gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight );
        for (i = 0; i<gameModel.numStacks; i++) {
            let b = document.createElement("button");
            b.innerHTML = "Push to Stack " + i;
            b.className = "game_button";
            let stackIndex = i.valueOf();
            b.onclick = function() {
                writeCodePushStack(stackIndex, codeBlock, gameModel); 
                gameModel.pushTo(stackIndex.valueOf());
                gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
                makemove()
            };
            buttonContainer.appendChild(b);
        }

        // pop buttons
        buttonContainer = document.getElementById("pop_buttons");
        for (i = 0; i<gameModel.numStacks; i++) {
            let b = document.createElement("button");
            b.innerHTML = "Pop from Stack " + i;
            b.className = "game_button";
            let stackIndex = i.valueOf();
            b.onclick = function() {
                writeCodePopStack(stackIndex, codeBlock, gameModel); 
                gameModel.popFrom(stackIndex.valueOf());
                gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
                makemove()
            };
            buttonContainer.appendChild(b);
        }

        function newGame() {
            gameProb = pg.generateProblem(5);
            gameGoal = pg.generateGoal(gameProb);
            gameModel = new Model(gameProb, gameGoal, 3);
            gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
            resetmove()
        }

        function makemove() {
            moves++;
            document.querySelector("#movecount").innerHTML = moves;
        }

        function resetmove() {
            moves = 0;
            document.querySelector("#movecount").innerHTML = moves;
        }


        function writeCodePushStack(stackNum, htmlElement, gameModel) {
            if (!gameModel.currentSelectionIsNull()) {
                htmlElement.innerHTML += `stack_${stackNum}.push(current_item)\n\n`;
            }
        }

        function writeCodePopStack(stackNum, htmlElement, gameModel) {
            if (!gameModel.stackIsEmpty(stackNum) && gameModel.currentSelectionIsNull()) {
                htmlElement.innerHTML += `current_item = stack_${stackNum}.pop()\n\n`;
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
        <div id="stackContent">

        <h1>Learn about Stacks</h1>
        <br /><br /><br />
        <div id="explanationDiv">
            <p>
                A Stack is a data structure that is frequently used in computer science, it 
                is commonly described as a <i>Last in, First out</i> data structure.
            </p>
            <p>
                Stacks can be used to store data, and <i>LIFO</i> refers to that the data in the stack can only be accessed in the reverse order it was added in. A helpful way to think about stacks is to compare them to how a pack of 3 tennis balls works. The container is cylindrical and just wide enough to fit a tennis ball. Only the top most tennis ball can be accessed and it is also the most recently added. Thus, the top most tennis ball is the <strong>"last one in"</strong> and must be the <strong>"first one out"</strong>, just like in the image below.
            </p>
            <img src={tennis_balls} width="100px" height="150px" alt="Tennis Balls"/> 
            <p>
                It can also be helpful to think of the items of a stack organized vertically, with the top of the stack representing the last item added. There are 2 main methods to interact with stacks.
            </p>
            <ul>
                <li> <strong>Push</strong> - Adds something to the top of the stack.</li>
                <li> <strong>Pop</strong> - Removes something from the top of the stack.</li>
            </ul>
            <br />



            <h4>How to play the stacks game:</h4>
            <ul>
                <li>
                    The goal of the game below is to make the Output box match the Goal box.
                    Both are listed on the right side of the Game window.
                </li>
                <li>
                    The <strong>Current item</strong> will show the item that was most recently popped from a Stack.
                </li>
                <li>
                    The buttons labeled with <strong>Push</strong> will put the current
                    selection into the button's labaled destination. 
                </li>
                <li>
                    The <strong>New Game</strong> button will reload the game with a fresh set
                    of input circles.
                </li>
                <li>
                    The <strong>Push</strong> and <strong>Pop</strong> buttons to manipulated the stacks can be found below the game window.
                </li>
                <li>
                    Stack numbering starts from 0.
                </li>
            </ul>
        </div>

        {/*<!-- init game -->*/}
        <script src="stack_game.js" type="module"></script>
        <div id="game_plus_code">

            <div id="game_container">

                <div id="gameDiv">
                    <canvas id="stackCanvas"></canvas>
                </div>
                <div id="game_buttons">
                    <div id="input_output_buttons" className="button_div"></div>
                    <div id="push_buttons" className="button_div"></div>
                    <div id="pop_buttons" className="button_div"></div>
                </div>

            </div>
            <div id="code_container">
                <h3>Sample Method Calls</h3>
                <code><pre id="stackCode"></pre></code>
            </div>
            <span id="score_container">
                Moves: <span id="movecount">0</span>
            </span>

        </div>
        </div>
    
        );
    }

}
