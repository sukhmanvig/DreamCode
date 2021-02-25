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
ctx.fillRect(50,50,30,30);


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

m2 = new Model(prob, goal, 3);
m2.outputQueue = goal;
m2.stacks[0] = goal;
console.log(m2.printModel());
m2.drawOnCanvase(ctx, 800, 600);
/*
m2 = new Model(prob, goal, 4);
m2.inputQueue = [];
m2.outputQueue = [];
m2.drawOnCanvase(ctx, 800, 600);
*/
// create model
// create view
// connect controller?
//create problem, send it to model

//start games
//gameloop
// takeinput
// render game

//gamewon? play again

