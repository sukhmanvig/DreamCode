export default class Queue {
  constructor() {
    this.length = 0;
    this.items = [];
  }

  enqueue(item) {
    this.length++;
    this.items.unshift(item);
  }

  dequeue() {
    if (this.length === 0) return;
    this.length--;
    return this.items.pop();
  }

  peek() {
    let queue = this.items;
    return queue[queue.length - 1];
  }

  getItems() {
    return this.items;
  }

  getLength() {
    return this.length;
  }
}
