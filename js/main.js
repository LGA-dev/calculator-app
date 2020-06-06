/* 
======================================================
00. Global variables
01. Functions
====================================================== 
*/

// *  00. Global variables *

let inputsArray = [];
let inputsArrayFirstItem = 0;
let inputsArrayLastItem = 0;
let lastFullNumber = [];

let screenNormalOutput = 0;
let screenSmallOutput = 0;

let calculationResult = 0;

// *  00. Global variables *



// *  01. Functions  *

function showOutput() {
    // Normal
    document.getElementById('output-normal').innerHTML = screenNormalOutput;
    // Small
    document.getElementById('output-small').innerHTML = screenSmallOutput;

    log();
}

function storeValue(buttonValue) {
    inputsArray.push(buttonValue);
    lastFullNumber.push(buttonValue);

    inputsArrayLastItem = inputsArray[inputsArray.length - 1];
    inputsArrayFirstItem = inputsArray[0];

    //Outputs display
    if (typeof inputsArrayLastItem == 'number') {
        console.log("Last input is a number");
        screenNormalOutput = lastFullNumber.join("");
        calculationResult = eval(inputsArray.join("")); //!
    } else {
        console.log("Last input isn't a number");
        lastFullNumber = [];

        if (calculationResult == 0) {
            screenNormalOutput = inputsArrayFirstItem;
            screenSmallOutput  = inputsArray.join("");
        } else {
            screenNormalOutput = calculationResult;
            screenSmallOutput  = inputsArray.join("");
        }
    }

    showOutput();
}

function calculateAllArrayInputs() {
    calculationResult = eval(inputsArray.join("")); // !

    screenNormalOutput = calculationResult; // !
    screenSmallOutput = "";
    inputsArray = [calculationResult];

    showOutput();
}

function squareRoot() {
    if (calculationResult == 0) {
        sqrtResult = Math.sqrt(inputsArray.join(""));
        sqrtOriginalNumber = inputsArray.join("");
    } else {
        sqrtResult = Math.sqrt(calculationResult);
        sqrtOriginalNumber = inputsArray.join("");
    }

    screenNormalOutput = sqrtResult;
    screenSmallOutput  = "sqrt(" + sqrtOriginalNumber + ")";
    inputsArray = [sqrtResult];

    showOutput();
}

function deleteLastValue() {
    inputsArray.pop();

    showOutput();
}

function deleteAllValues() {
    inputsArray = [];
    screenNormalOutput = 0;
    screenSmallOutput = "";
    calculationResult = 0;
    lastFullNumber = [];

    showOutput();
}

function log() {
    console.log('--------------------------------------------------');
    console.log("Current value of inputsArray: "        + inputsArray);
    console.log("Current value of screenNormalOutput: " + screenNormalOutput);
    console.log("Current value of screenSmallOutput: "  + screenSmallOutput);
    console.log("Current value of calculationResult: "  + calculationResult);
    console.log('--------------------------------------------------');
}

// *  01. Functions  *