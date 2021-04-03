import Queue from "./Queue.js";

export default class Model {
  constructor(problem, gameGoal, numQueues) {
    this.numQueues = numQueues;
    this.queues = [];
    var i;
    for (i = 0; i < this.numQueues; i++) {
      this.queues.push(new Queue());
    }
    this.inputQueue = JSON.parse(JSON.stringify(problem));
    this.outputQueue = [];
    this.problem = JSON.parse(JSON.stringify(problem));
    this.gameGoal = JSON.parse(JSON.stringify(gameGoal));
    this.currentSelection = undefined;
    this.moves = 0;
  }

  currentSelectionIsNull() {
    return this.currentSelection === undefined;
  }

  queueIsEmpty(queueNum) {
    return this.queues[queueNum].getLength() === 0;
  }

  inputIsEmpty() {
    return this.inputQueue.length === 0;
  }

  isWon() {
    var i;
    for (i = 0; i < this.gameGoal.length; i++) {
      let g = this.gameGoal[i];
      let o = this.outputQueue[i];
      if (o === undefined) return false;
      if (!(g.colour === o.colour && g.letter === o.letter)) return false;
    }
    return true;
  }

  dequeueFrom(queueNum) {
    if (this.currentSelection === undefined) {
      this.currentSelection = this.queues[queueNum].dequeue();
      this.moves++;
    }
  }

  enqueueTo(queueNum) {
    if (!(this.currentSelection === undefined)) {
      let queue = this.queues[queueNum];
      let item = this.currentSelection;
      queue.enqueue(item);
      this.currentSelection = undefined;
      this.moves++;
    }
  }

  pushToOutput() {
    if (!(this.currentSelection === undefined)) {
      this.outputQueue.unshift(this.currentSelection);
      this.currentSelection = undefined;
      this.moves++;
    }
  }

  popFromOutput() {
    if (this.currentSelection === undefined) {
      this.currentSelection = this.outputQueue.shift();
      this.moves++;
    }
  }

  popFromInput() {
    if (this.currentSelection === undefined)
      this.currentSelection = this.inputQueue.pop();
    this.moves++;
  }

  printModel() {
    console.log("--- Printing Model ---");
    console.log("Num Queues: " + JSON.stringify(this.numQueues));
    console.log("Queues:     " + JSON.stringify(this.queues));
    console.log("input:      " + JSON.stringify(this.inputQueue));
    console.log("output:     " + JSON.stringify(this.outputQueue));
    console.log("problem:    " + JSON.stringify(this.problem));
    console.log("goal:       " + JSON.stringify(this.gameGoal));
    console.log("selection:  " + JSON.stringify(this.currentSelection));
  }

  drawOnCanvas(ctx, ctxWidth, ctxHeight) {
    let marbleRadius = 20;
    let i;

    ctx.clearRect(0, 0, ctxWidth, ctxHeight);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctxWidth, ctxHeight);

    // text
    ctx.fillStyle = "black";
    ctx.font = "25px Arial";
    ctx.fillText("Inputs:", 10, 25, 150);
    ctx.fillText("Output:", ctxWidth - 100, 25, 150);
    ctx.font = "15px Arial";
    ctx.fillText("Goal:", ctxWidth - 100, 150, 150);

    ctx.font = "20px Arial";
    ctx.fillText("Current Item:", ctxWidth / 2 - 150, ctxHeight * 0.25);

    // draw game elements
    this.drawInputMarbles(ctx, 30, 50, marbleRadius);
    this.drawOutputMarbles(
      ctx,
      ctxWidth - 2 * marbleRadius * this.outputQueue.length,
      50,
      marbleRadius
    );
    this.drawGoalMarbles(
      ctx,
      ctxWidth - marbleRadius * this.gameGoal.length,
      175,
      marbleRadius / 2
    );
    this.drawCurrentSelection(
      ctx,
      ctxWidth / 2,
      ctxHeight * 0.25,
      marbleRadius
    );

    this.drawQueues(ctx, ctxWidth, ctxHeight, marbleRadius);

    if (this.isWon()) {
      ctx.font = "35px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(
        "You've reached the goal state",
        ctxWidth * 0.2,
        ctxHeight * 0.4
      );
    }
  }

  drawMarble(ctx, x, y, rad, colour) {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
  }

  drawCurrentSelection(ctx, x, y, marbleRadius) {
    if (this.currentSelection === undefined) {
      return;
    }
    let colour = this.currentSelection.colour;
    this.drawMarble(ctx, x, y, marbleRadius, colour);
  }

  drawQueue(ctx, queueNum, marbX, marbY, marbleRadius) {
    // draw queue name
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
    ctx.fillText(
      "queue_" + queueNum,
      marbX - 20,
      marbY - marbleRadius - 10,
      70
    );

    // draw arrows
    ctx.fillStyle = "black";
    ctx.moveTo(marbX - 2.5 * marbleRadius - 10, marbY);
    ctx.lineTo(marbX - marbleRadius - 10, marbY);
    ctx.stroke();
    ctx.moveTo(marbX - 1.5 * marbleRadius - 10, marbY - 10);
    ctx.lineTo(marbX - marbleRadius - 10, marbY);
    ctx.stroke();
    ctx.moveTo(marbX - 1.5 * marbleRadius - 10, marbY + 10);
    ctx.lineTo(marbX - marbleRadius - 10, marbY);
    ctx.stroke();
    var numMarbs = this.queues[queueNum].length;
    if (!(numMarbs === 0)) numMarbs--;
    ctx.moveTo(marbX + (numMarbs + 1) * 2 * marbleRadius - 10, marbY);
    ctx.lineTo(marbX + (numMarbs + 1) * 2 * marbleRadius + marbleRadius, marbY);
    ctx.stroke();
    ctx.moveTo(
      marbX + (numMarbs + 1) * 2 * marbleRadius - 10 + 1.5 * marbleRadius - 10,
      marbY - 10
    );
    ctx.lineTo(marbX + (numMarbs + 1) * 2 * marbleRadius + marbleRadius, marbY);
    ctx.stroke();
    ctx.moveTo(
      marbX + (numMarbs + 1) * 2 * marbleRadius - 10 + 1.5 * marbleRadius - 10,
      marbY + 10
    );
    ctx.lineTo(marbX + (numMarbs + 1) * 2 * marbleRadius + marbleRadius, marbY);
    ctx.stroke();

    let queue = this.queues[queueNum];
    if (queue.length === 0) {
      ctx.fillStyle = "black";
      ctx.strokeRect(
        marbX - marbleRadius,
        marbY - marbleRadius,
        marbleRadius * 2,
        marbleRadius * 2
      );
      ctx.fillStyle = "white";
      ctx.fillRect(
        marbX - marbleRadius - 1,
        marbY - marbleRadius - 1,
        3,
        marbleRadius * 2
      );
      ctx.fillRect(
        marbX + marbleRadius - 1,
        marbY - marbleRadius - 1,
        3,
        marbleRadius * 2
      );
      return;
    }

    let i;
    for (i = 0; i < queue.length; i++) {
      this.drawMarble(
        ctx,
        marbX + i * 2 * marbleRadius,
        marbY,
        marbleRadius,
        queue.items[i].colour
      );
    }
    ctx.fillStyle = "black";
    let x = marbX - marbleRadius;
    let y = marbY - marbleRadius;
    let width = marbleRadius * 2 * i;
    let height = marbleRadius * 2;
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = "white";
    ctx.fillRect(x - 1, y - 1, 3, marbleRadius * 2);
    ctx.fillRect(x + 2 * marbleRadius * i - 1, y - 1, 3, marbleRadius * 2);
  }

  drawQueues(ctx, ctxWidth, ctxHeight, marbleRadius) {
    let totalQueues = this.queues.length;
    let xCenter = ctxWidth / 2;
    let i;
    for (i = 0; i < totalQueues; i++) {
      this.drawQueue(ctx, i, xCenter, ctxHeight - 85 * (i + 1), marbleRadius);
    }
  }

  drawInputMarbles(ctx, xStart, yStart, marbleRadius) {
    if (this.inputQueue.length === 0) {
      ctx.fillStyle = "black";
      ctx.strokeRect(
        xStart - marbleRadius,
        yStart - marbleRadius,
        marbleRadius * 2,
        marbleRadius * 2
      );
      ctx.fillStyle = "white";
      ctx.fillRect(
        xStart + marbleRadius - 1,
        yStart - marbleRadius,
        3,
        2 * marbleRadius - 1
      );
      return;
    }

    let x = xStart;
    let y = yStart;
    let i;
    for (i = 0; i < this.inputQueue.length; i++) {
      this.drawMarble(
        ctx,
        x + i * 2 * marbleRadius,
        y,
        marbleRadius,
        this.inputQueue[i].colour
      );
    }
    ctx.fillStyle = "black";
    x = x - marbleRadius;
    y = y - marbleRadius;
    let inputWidth = marbleRadius * 2 * i;
    let inputHeight = 2 * marbleRadius;
    ctx.strokeRect(x, y, inputWidth, inputHeight);

    ctx.fillStyle = "white";
    ctx.fillRect(x + inputWidth - 1, y + 1, 3, inputHeight - 1);
  }

  drawOutputMarbles(ctx, xStart, yStart, marbleRadius) {
    if (this.outputQueue.length === 0) {
      ctx.fillStyle = "black";
      let x2 = xStart - 2 * marbleRadius - 5;
      ctx.strokeRect(
        x2,
        yStart - marbleRadius,
        marbleRadius * 2,
        marbleRadius * 2
      );
      ctx.fillStyle = "white";
      ctx.fillRect(x2 - 1, yStart - marbleRadius, 3, 2 * marbleRadius);
      return;
    }

    let x = xStart;
    let y = yStart;
    let i;
    for (i = 0; i < this.outputQueue.length; i++) {
      this.drawMarble(
        ctx,
        x + i * 2 * marbleRadius,
        y,
        marbleRadius,
        this.outputQueue[i].colour
      );
    }
    ctx.fillStyle = "black";
    x = x - marbleRadius;
    y = y - marbleRadius;
    let inputWidth = marbleRadius * 2 * i;
    let inputHeight = 2 * marbleRadius;
    ctx.strokeRect(x, y, inputWidth, inputHeight);

    ctx.fillStyle = "white";
    ctx.fillRect(x - 1, y + 1, 3, inputHeight - 1);
  }

  drawGoalMarbles(ctx, xStart, yStart, marbleRadius) {
    if (this.gameGoal.length === 0) {
      ctx.fillStyle = "black";
      let x2 = xStart - 2 * marbleRadius - 5;
      ctx.strokeRect(
        x2,
        yStart - marbleRadius,
        marbleRadius * 2,
        marbleRadius * 2
      );
      ctx.fillStyle = "white";
      ctx.fillRect(x2 - 1, yStart - marbleRadius, 3, 2 * marbleRadius);
      return;
    }

    let x = xStart;
    let y = yStart;
    let i;
    for (i = 0; i < this.gameGoal.length; i++) {
      this.drawMarble(
        ctx,
        x + i * 2 * marbleRadius,
        y,
        marbleRadius,
        this.gameGoal[i].colour
      );
    }
    ctx.fillStyle = "black";
    x = x - marbleRadius;
    y = y - marbleRadius;
    let inputWidth = marbleRadius * 2 * i;
    let inputHeight = 2 * marbleRadius;
    ctx.strokeRect(x, y, inputWidth, inputHeight);

    ctx.fillStyle = "white";
    ctx.fillRect(x - 1, y + 1, 3, inputHeight - 1);
  }
}
