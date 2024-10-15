//declaring variables

let pyramidSpace = ''; //creating empty string for loops
let pyramidHeight = 3;
let pyramidSymbol = '#'

//function to determine height of pyramid

function determineHeightAndThenDrawPyramid() {
    var pyramidHeight = document.getElementById("height").value; //getting the height from the input box
    document.getElementById("pyramid").innerHTML = printPyramid(pyramidHeight);
}


function printPyramid(height) { //main pyramid function
    
    pyramidSpace = ''; //resets the pyramid
    pyramidSymbol = document.getElementById("symbols").value; //gets the symbol for pyramid from dropdown menu
    
    for(let i = 1; i <= height; i++) {
        for(let j = 0; j < height - i; j++) {
            pyramidSpace += "&nbsp;"; //adds space before bricks to create pyramid shape
        }

        for(let k = -1; k < i; k++) {
          pyramidSpace += pyramidSymbol; //adds bricks to pyramid
        }
        pyramidSpace += "</p>"; //makes new line for next layer of pyramid
    }
  return pyramidSpace;
}