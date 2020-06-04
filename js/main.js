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

let copyArray = [];

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
    inputsArrayLastItem = inputsArray[inputsArray.length - 1];
    inputsArrayFirstItem = inputsArray[0];

    // screenNormalOutput = inputsArray.join("");
    screenSmallOutput  = inputsArray.join("");

/*
    // Copy array
    copyArray = inputsArray;
    // Delete last value
    copyArray.splice(-1,1)
    // Return a new array without the last value and display it
    screenSmallOutput = copyArray.join("")
*/

    //Normal Output Display

    if (typeof inputsArrayLastItem == 'number') {
        console.log("Last input is a number");
        screenNormalOutput = buttonValue;
    } else {
        console.log("Last input isn't a number");
        if (calculationResult == 0) {
            screenNormalOutput = inputsArrayFirstItem;
        } else {
            screenNormalOutput = calculationResult;
        }
    }
    //

    calculateArrayInputs();
    showOutput();
}

/*
function squareRoot() {
    calculationResult = Math.sqrt(calculationResult);
    inputsArray = []; // !
    inputsArray.push(calculationResult);
    showOutput();
    log();
}
*/

function calculateArrayInputs() {
    if (inputsArray.length >= 2 && typeof inputsArrayLastItem == 'number') {
        calculationResult = eval(inputsArray.join(""))
        console.log("Inputs array items equal or more than 3 and it's a number!")
        console.log("autoCalculateInput is: " + calculationResult);

        //

        //
    } else {
        console.log("Inputs array items less than 3");
    }
}


function calculateAllArrayInputs() {
    inputsArrayJoined = inputsArray.join("");
    calculationResult = eval(inputsArrayJoined); // !
    screenNormalOutput = calculationResult; // !
    screenSmallOutput = "";
    showOutput();
    log();
}

function deleteLastValue() {
    inputsArray.pop();
    showOutput();
    log();
}

function deleteAllValues() {
    inputsArray = [];
    screenNormalOutput = 0;
    screenSmallOutput = "";
    calculationResult = 0;
    showOutput();
    log();
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