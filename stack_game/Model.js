import Stack from "./Stack.js"

export default class Model {

    constructor(problem, gameGoal, numStacks) {
        this.numStacks = numStacks;
        this.stacks = [];
        var i;
        for (i = 0; i < this.numStacks; i++) {
            this.stacks.push(new Stack());
        }
        // this.inputQueue = problem;
        this.outputQueue = new Stack();
        this.problem = problem;
        this.gameGoal = gameGoal;
    }

    newGame(problem, goal) {
        // generate new problem with marbleSequence and goal solution
    }

    isWon() {
        // todo
        // return this.outputQueue == this.gameGoal
    }
}