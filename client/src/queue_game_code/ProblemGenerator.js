export default class ProblemGenerator {

    constructor(marbles) {
        // marbles => list of tuples to generate marbles from
        this.marbles = marbles;
    }

    generateProblem(length) {
        // return a problem of size 'length'
       var problem = [];
       var i;
       var marbles = this.marbles;
       for (i = 0; i < length; i++) {
           problem.push(marbles[Math.floor(Math.random() * marbles.length)]);
       }
       return problem
    }

    generateGoal(problem) {
        // create a permutation of problem to act as the goal
        var goal = [...problem];
        var i = goal.length;

        let swapRandom = function(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        var r1, r2;
        while (i !== 0) {
            r1 = Math.floor(Math.random() * goal.length);
            r2 = Math.floor(Math.random() * goal.length);
            swapRandom(goal, r1, r2);
            i--;
        }

        return goal;

    }

    generateSolution(inputProblem, goal) {
        // todo
    }
}