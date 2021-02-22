import Stack from "./Stack.js"

export default class Model {

    constructor(problem, gameGoal, numStacks) {
        this.numStacks = numStacks;
        this.stacks = [];
        var i;
        for (i = 0; i < this.numStacks; i++) {
            this.stacks.push(new Stack());
        }
        this.inputQueue = JSON.parse(JSON.stringify(problem));
        this.outputQueue = [];
        this.problem = JSON.parse(JSON.stringify(problem));
        this.gameGoal = JSON.parse(JSON.stringify(gameGoal));
        this.currentSelection = undefined;
    }

    isWon() {
        var i;
        for (i = 0; i<this.problem.length; i++) {
            if (! this.gameGoal[i].equals(this.outputQueue[i]))
                return false;
        }
        return true;
    }

    popFrom(stackNum) {
        if (this.currentSelection == undefined)
            this.currentSelection = this.stacks[stackNum].pop();
    }

    pushTo(stackNum) {
        if (!(this.currentSelection == undefined)) {
            let stack = this.stacks[stackNum];
            let item = this.currentSelection;
            stack.push(item);
            this.currentSelection = undefined;
        }
    }

    pushToOutput() {
        if (!this.currentSelection == undefined) {
            this.outputQueue.unshift(this.currentSelection);
            this.currentSelection = undefined
        }
    }

    popFromInput() {
        if (this.currentSelection == undefined)
            this.currentSelection = this.inputQueue.pop();
    }

    printModel() {
        console.log("--- Printing Model ---");
        console.log("Num Stacks: " + JSON.stringify(this.numStacks));
        console.log("Stacks:     " + JSON.stringify(this.stacks));
        console.log("input:      " + JSON.stringify(this.inputQueue));
        console.log("output:     " + JSON.stringify(this.outputQueue));
        console.log("problem:    " + JSON.stringify(this.problem));
        console.log("goal:       " + JSON.stringify(this.gameGoal));
        console.log("selection:  " + JSON.stringify(this.currentSelection));
    }
}