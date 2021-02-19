import Stack from "./Stack.js";
import Marble from "./Marble.js";
import ProblemGenerator from "./ProblemGenerator.js";

let s = new Stack();
s.push(1);
s.push(2);

console.log(s.pop());
console.log(s.peek());
console.log(s.pop());
console.log(s.pop());

let x = new Marble("red", "A");
let y = new Marble("green", "B");
let z = new Marble("blue", "C");
console.log(y.getColour());
console.log(y.getLetter());

let marbs = [x,y,z];
console.log(marbs);
let pg = new ProblemGenerator(marbs)
let prob = pg.generateProblem(3);
console.log(prob);
let i = 0;
console.log(prob[0]);

let canvas = document.getElementById("stackCanvas");
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext("2d");
ctx.fillRect(50,50,30,30);


// create model
// create view
// connect controller?
//create problem, send it to model

//start games
//gameloop
// takeinput
// render game

//gamewon? play again

