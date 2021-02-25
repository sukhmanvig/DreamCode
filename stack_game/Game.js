import Stack from "./Stack.js";
import Marble from "./Marble.js";
import ProblemGenerator from "./ProblemGenerator.js";
import Model from "./Model.js";

let s = new Stack();
s.push(1);
s.push(2);

console.log(s.pop());
console.log(s.peek());
console.log(s.pop());
console.log(s.pop());

let x = new Marble("red", "A");
let xx = new Marble("red", "A");
let y = new Marble("green", "B");
let z = new Marble("blue", "C");
let w = new Marble("orange", "D");
let v = new Marble("yellow", "E");
console.log(y.getColour());
console.log(y.getLetter());

let marbs = [x,y,z,w,v];
console.log("Printing Marbles");
console.log(marbs);
let i = 0;
for (i; i<marbs.length; i++) {
    console.log(marbs[i]);
}


let pg = new ProblemGenerator(marbs)
let prob = pg.generateProblem(4);

console.log("Printing Problem:");
console.log(prob);
for (i = 0; i<prob.length; i++) {
    console.log(prob[i]);
}

console.log("Printing Goal:");
let goal = pg.generateGoal(prob);
for (i=0; i<goal.length; i++) {
    console.log(goal[i]);
}


let canvas = document.getElementById("stackCanvas");
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext("2d");
ctx.fillRect(300,400,30,30);


console.log("-----------");
console.log("Testing Model");

let model = new Model(prob, goal, 2);
console.log(JSON.stringify(model));

console.log("test marble equality");
console.log(x == xx);
console.log(x === xx);
console.log(x.equals(xx));
console.log(x.equals(y));

console.log("Test isWon");
model.problem = [1,1,1];
model.outputQueue = [x,y,z];
model.gameGoal = [x,y,z];
console.log(model.isWon()); // true

model.outputQueue = [x,z,y];
console.log(model.isWon()); // false

console.log("test pushTo");
//console.log(JSON.parse(JSON.stringify(model)));
console.log(JSON.stringify(model));
model.currentSelection = 111;
console.log(JSON.stringify(model));
model.pushTo(1);
console.log(JSON.stringify(model));


console.log("Model tests");
let m2 = new Model(prob, goal, 2);
m2.printModel();
m2.popFromInput();
m2.printModel();
m2.pushTo(1);
m2.printModel();

// drawing tests
/*
m2 = new Model(prob, goal, 3);
m2.outputQueue = goal;
m2.stacks[0] = goal;
console.log(m2.printModel());
m2.drawOnCanvas(ctx, 800, 600);
*/

let m3 = new Model(prob, goal, 4);
m3.popFromInput();
//m3.inputQueue = [];
//m3.outputQueue = [];
m3.printModel();
//m3.outputQueue = JSON.parse(JSON.stringify(m3.gameGoal));
m3.drawOnCanvas(ctx, 800, 600);

///////////////////////////////

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

let buttonContainer = document.getElementById("input_output_buttons");
let canvasContext = ctx;

let popInputButton = document.createElement("button");
popInputButton.innerHTML = "Pop From Input";
popInputButton.onclick = function() { 
    gameModel.popFromInput();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
};
buttonContainer.appendChild(popInputButton);

let pushOutputButton = document.createElement("button");
pushOutputButton.innerHTML = "Push to Output";
pushOutputButton.onclick = function() { 
    gameModel.pushToOutput();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
};
buttonContainer.appendChild(pushOutputButton);

let popFromOutputButton = document.createElement("button");
popFromOutputButton.innerHTML = "Pop from Output";
popFromOutputButton.onclick = function() { 
    gameModel.popFromOutput();
    gameModel.drawOnCanvas(canvasContext, canvasWidth, canvasHeight);
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
