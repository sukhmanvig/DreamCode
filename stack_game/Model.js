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
        for (i = 0; i<this.gameGoal.length; i++) {
            let g = this.gameGoal[i];
            let o = this.outputQueue[i];
            if (o == undefined) 
                return false;
            if (! (g.colour == o.colour && g.letter == o.letter)) 
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
        if (!(this.currentSelection == undefined)) {
            this.outputQueue.unshift(this.currentSelection);
            this.currentSelection = undefined;
        }
    }

    popFromOutput() {
        if (this.currentSelection == undefined) {
            this.currentSelection = this.outputQueue.shift();
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

    drawOnCanvas(ctx, ctxWidth, ctxHeight) {
        let marbleRadius = 20;
        let stackWidth = 22;
        let i;

        ctx.clearRect(0,0,ctxWidth,ctxHeight);
        ctx.fillStyle = "white";
        ctx.fillRect(0,0, ctxWidth, ctxHeight);

        // text
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.fillText("Inputs:", 10, 25, 150);
        ctx.fillText("Output:", ctxWidth-100, 25, 150);
        ctx.font = "15px Arial";
        ctx.fillText("Goal:", ctxWidth-100, 150, 150);

        ctx.font = "20px Arial";
        ctx.fillText("Current Item:", ctxWidth/2-150, ctxHeight*0.25);

        // draw game elements
        this.drawInputMarbles(ctx, 30, 50, marbleRadius);
        this.drawOutputMarbles(ctx, ctxWidth-2*marbleRadius*this.outputQueue.length, 50, marbleRadius);
        this.drawGoalMarbles(ctx, ctxWidth-marbleRadius*this.gameGoal.length, 175, marbleRadius/2);
        this.drawCurrentSelection(ctx, ctxWidth/2, ctxHeight*0.25, marbleRadius);

        this.drawStacks(ctx, ctxWidth, ctxHeight, marbleRadius);

        if (this.isWon()) {
            ctx.font = "35px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("You've reached the goal state", ctxWidth*0.2, ctxHeight*0.60);
        }


    }

    drawMarble(ctx, x, y, rad, colour) {
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI*2);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.closePath();
    }

    drawCurrentSelection(ctx, x, y, marbleRadius) {
        if (this.currentSelection == undefined) {
            return;
        }
        let colour = this.currentSelection.colour;
        this.drawMarble(ctx, x, y, marbleRadius, colour);
    }

    drawStack(ctx, stackNum, marbX, marbY, marbleRadius) {
        let stack = this.stacks[stackNum];
        if (stack.length == 0) {
            ctx.fillStyle = "black";
            ctx.strokeRect(marbX-marbleRadius, marbY-marbleRadius, marbleRadius*2, marbleRadius*2);
            ctx.fillStyle = "white";
            ctx.fillRect(marbX-marbleRadius,marbY-marbleRadius-1,marbleRadius*2,3)
            return;
        }

        let i;
        for (i=0; i<stack.length; i++) {
            this.drawMarble(ctx, marbX, marbY-i*2*marbleRadius, marbleRadius, stack.items[i].colour);
        }
        ctx.fillStyle = "black";
        let x = marbX-marbleRadius;
        let y = marbY-i*marbleRadius*2+marbleRadius;
        let width = marbleRadius*2;
        let height = marbleRadius*2*i;
        ctx.strokeRect(x, y, width, height);

        ctx.fillStyle = "white";
        ctx.fillRect(x,y-1,marbleRadius*2,3)
    }

    drawStacks(ctx, ctxWidth, ctxHeight, marbleRadius) {
        let totalStacks = this.stacks.length;
        let spacing = ctxWidth/(totalStacks+1);
        let i;
        for (i=0; i<totalStacks; i++) {
            this.drawStack(ctx, i, spacing*(i+1), ctxHeight-50, marbleRadius);
        }
    }

    drawInputMarbles(ctx, xStart, yStart, marbleRadius) {
        if (this.inputQueue.length == 0) {
            ctx.fillStyle = "black";
            ctx.strokeRect(xStart-marbleRadius, yStart-marbleRadius, marbleRadius*2, marbleRadius*2);
            ctx.fillStyle = "white";
            ctx.fillRect(xStart+marbleRadius-1,yStart-marbleRadius,3,2*marbleRadius-1)
            return;
        }

        let x = xStart;
        let y = yStart;
        let i;
        for (i = 0; i<this.inputQueue.length; i++) {
            this.drawMarble(ctx, x+i*2*marbleRadius, y, marbleRadius, this.inputQueue[i].colour);
        }
        ctx.fillStyle = "black";
        x = x-marbleRadius;
        y = y-marbleRadius;
        let inputWidth = marbleRadius*2*i;
        let inputHeight = 2*marbleRadius;
        ctx.strokeRect(x, y, inputWidth, inputHeight);

        ctx.fillStyle = "white";
        ctx.fillRect(x+inputWidth-1, y+1, 3, inputHeight-1);
    }

    drawOutputMarbles(ctx, xStart, yStart, marbleRadius) {
        if (this.outputQueue.length == 0) {
            ctx.fillStyle = "black";
            let x2 = xStart-2*marbleRadius-5;
            ctx.strokeRect(x2, yStart-marbleRadius, marbleRadius*2, marbleRadius*2);
            ctx.fillStyle = "white";
            ctx.fillRect(x2-1, yStart-marbleRadius, 3, 2*marbleRadius);
            return;
        }

        let x = xStart;
        let y = yStart;
        let i;
        for (i = 0; i<this.outputQueue.length; i++) {
            this.drawMarble(ctx, x+i*2*marbleRadius, y, marbleRadius, this.outputQueue[i].colour);
        }
        ctx.fillStyle = "black";
        x = x-marbleRadius;
        y = y-marbleRadius;
        let inputWidth = marbleRadius*2*i;
        let inputHeight = 2*marbleRadius;
        ctx.strokeRect(x, y, inputWidth, inputHeight);

        ctx.fillStyle = "white";
        ctx.fillRect(x-1, y+1, 3, inputHeight-1);
    }

    drawGoalMarbles(ctx, xStart, yStart, marbleRadius) {
        if (this.gameGoal.length == 0) {
            ctx.fillStyle = "black";
            let x2 = xStart-2*marbleRadius-5;
            ctx.strokeRect(x2, yStart-marbleRadius, marbleRadius*2, marbleRadius*2);
            ctx.fillStyle = "white";
            ctx.fillRect(x2-1,yStart-marbleRadius,3,2*marbleRadius)
            return;
        }

        let x = xStart;
        let y = yStart;
        let i;
        for (i = 0; i<this.gameGoal.length; i++) {
            this.drawMarble(ctx, x+i*2*marbleRadius, y, marbleRadius, this.gameGoal[i].colour);
        }
        ctx.fillStyle = "black";
        x = x-marbleRadius;
        y = y-marbleRadius;
        let inputWidth = marbleRadius*2*i;
        let inputHeight = 2*marbleRadius;
        ctx.strokeRect(x, y, inputWidth, inputHeight);

        ctx.fillStyle = "white";
        ctx.fillRect(x-1, y+1, 3, inputHeight-1);
    }
}