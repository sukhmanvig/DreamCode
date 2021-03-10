import Stack from "./Stack.js";
import Marble from "./Marble.js";
import ProblemGenerator from "./ProblemGenerator.js";
import Model from "./Model.js";

// Currently, this game generation is fixed

let x = new Marble("red", "A");
let xx = new Marble("red", "A");
let y = new Marble("green", "B");
let z = new Marble("blue", "C");
let w = new Marble("orange", "D");
let v = new Marble("yellow", "E");

let marbs = [x,y,z,w,v];

let pg = new ProblemGenerator(marbs)
let prob = pg.generateProblem(4);

let canvas = document.getElementById("stackCanvas");
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext("2d");
ctx.fillRect(300,400,30,30);


///////////////////////////////
let i =0; // iterator index
// adding buttons
let canvasWidth = 800;
let canvasHeight = 600;
ctx.clearRect(0,0,800,600);
console.log("adding buttons");
pg = new ProblemGenerator([x,y,z,w,v]);
let gameProb = pg.generateProblem(3);
let gameGoal = pg.generateGoal(gameProb);
console.log(gameProb);
console.log(gameGoal);
let gameModel = new Model(gameProb, gameGoal, 3);
gameModel.printModel();

// Create control buttons
let buttonContainer = document.getElementById("input_output_buttons");
let canvasContext = ctx;

let popInputButton = document.createElement("button");
popInputButton.innerHTML = "Pop From Input";
popInputButton.onclick = function() { 
    gameModel.popFromInput();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
    update();
};
buttonContainer.appendChild(popInputButton);

let pushOutputButton = document.createElement("button");
pushOutputButton.innerHTML = "Push to Output";
pushOutputButton.onclick = function() { 
    gameModel.pushToOutput();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
    update();
};
buttonContainer.appendChild(pushOutputButton);

let popFromOutputButton = document.createElement("button");
popFromOutputButton.innerHTML = "Pop from Output";
popFromOutputButton.onclick = function() { 
    gameModel.popFromOutput();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
    update();
};
buttonContainer.appendChild(popFromOutputButton);

let newGameButton = document.createElement("button");
newGameButton.innerHTML = "New Game";
newGameButton.onclick = function() { 
    newGame();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
};
buttonContainer.appendChild(newGameButton);

buttonContainer = document.getElementById("push_buttons");
gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight );
for (i = 0; i<gameModel.numStacks; i++) {
    let b = document.createElement("button");
    b.innerHTML = "Push to Stack " + i;
    let stackIndex = i.valueOf();
    b.onclick = function() { 
        gameModel.pushTo(stackIndex.valueOf());
        gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
    };
    buttonContainer.appendChild(b);
}

buttonContainer = document.getElementById("pop_buttons");
for (i = 0; i<gameModel.numStacks; i++) {
    let b = document.createElement("button");
    b.innerHTML = "Pop from Stack " + i;
    let stackIndex = i.valueOf();
    b.onclick = function() { 
        gameModel.popFrom(stackIndex.valueOf());
        gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
    };
    buttonContainer.appendChild(b);
}

function newGame() {
    gameProb = pg.generateProblem(5);
    gameGoal = pg.generateGoal(gameProb);
    gameModel = new Model(gameProb, gameGoal, 3);
    gameModel.drawOnCanvas(canvasContext, 800, 600);
}

/**Send the results to the back end once the game is finished
 */
update = function() {
    if (gameModel.isWon()) {
        let score = gameModel.moves;
    }
}