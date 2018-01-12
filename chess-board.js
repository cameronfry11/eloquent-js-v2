/*
    Write a program that creates a string that represents an 8x8 grid
    Use new line characters to separate lines
    At each position, there is either a space or a '#' character
    The characters should form a chess board

    Once the pattern has been generated, define a variable size
    These variable can change the size of the grid
 */

// 1. Log a '#'
console.log('#');

// 2. Log a new line character
console.log("\n");

// 3. Log the first row of the pattern
console.log("#" + " " + "#" + " " + "#" + " " + "#");

// 4. Write function that take a grid size and creates a board string
function createBoard(gridsize) {
    var board = "";
        for (k=1; k <= gridsize*(gridsize + 1); k++) {
            if (k%(gridsize+1) === 0) {
                board += "\n";
            } else if (k%2 === 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
    console.log(board);
}

createBoard(20);