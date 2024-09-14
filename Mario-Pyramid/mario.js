//declaring variables
const pyramidHeight = prompt('How high do you want your pyramid?'); //asks user for height of pyramid

let pyramidSpace = ''; //creating empty string for loops

function printPyramid(height) { //main pyramid function
    for(let i = 1; i <= height; i++) {
        for(let j = 0; j < height - i; j++) {
            pyramidSpace += " "; //adds space before bricks to create pyramid shape
        }

        for(let k = -1; k < i; k++) {
          pyramidSpace += "#"; //adds bricks to pyramid
        }
        pyramidSpace += "\n"; //makes new line for next layer of pyramid
    }
  console.log(pyramidSpace); //prints the completed pyramid
}
printPyramid(pyramidHeight); //runs function to print out a pyramid