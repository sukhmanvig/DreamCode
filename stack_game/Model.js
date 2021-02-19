export default class Model {

    constructor(problem, gameGoal, stacks) {
        this.numStacks = 0;
        this.stacks = [];
        var i;
        for (i = 0; i < stacks.length; i++) {
            this.stacks.push(stacks[i]);
        }
        this.inputQueue = [];
        this.outputQueue = [];
        this.problem = problem;
        this.gameGoal = gameGoal;
    }

    newGame(marbleSequence, solution) {
        // generate new problem with marbleSequence and goal solution
    }

    isWon() {
        // todo
        // return this.outputQueue == this.gameGoal
    }
}