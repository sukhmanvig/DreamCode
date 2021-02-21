export default class Marble {

    constructor(colour, letter) {
        this.colour = colour;
        this.letter = letter;
    }

    getColour() {
        return this.colour;
    }

    getLetter() {
        return this.letter;
    }

    equals(other) {
        return (this.colour == other.colour) && (this.letter == other.letter);
    }
}