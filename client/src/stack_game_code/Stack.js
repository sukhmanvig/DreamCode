export default class Stack {

    constructor() {
        this.length = 0;
        this.items = [];
    }

    push(item) {
        this.length++;
        this.items.push(item);
    }

    pop() {
        if (this.length === 0)
            return;
        this.length--;
        return this.items.pop();
    }

    peek() {
        let stack = this.items;
        return stack[stack.length - 1];
    }

    getItems() {
        return this.items;
    }

    getLength() {
        return this.length;
    }
}