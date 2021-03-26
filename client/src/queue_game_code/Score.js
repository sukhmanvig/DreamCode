export default class Score {

    constructor(initialScore) {
        this.score = initialScore;
    }

    increase(n) {
        this.score += n;
    }

    decrease(n) {
        this.decrease -= n;
    }

    getScore() {
        return this.score;
    }
}