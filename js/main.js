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
let lastInputNumber = [];

let screenNormalOutput = 0;
let screenSmallOutput = 0;

let calculationResult = 0;

// *  00. Global variables *



// *  01. Functions  *

function storeValue(buttonValue) {
    inputsArray.push(buttonValue);
    lastInputNumber.push(buttonValue);

    calculateInputsArray();
}

// This will make the calculations display more fluid while you are entering numbers and operators
function calculateInputsArray() {
    inputsArrayLastItem = inputsArray[inputsArray.length - 1];
    inputsArrayFirstItem = inputsArray[0];

    if (typeof inputsArrayLastItem == 'number') {
        // Creating lastInputNumber[] helped me to separate numbers from operators without messing up the {complete} inputsArray[]
        // while also allowing me to display the last input number correctly {44 got displayed as 4, per example}
        screenNormalOutput = lastInputNumber.join("");
        // The calculation of inputsArray[] will be made, but not displayed
        calculationResult = eval(inputsArray.join(""));
    } else {
        // If inputsArrayLastItem isn't a number, per example
        // {inputsArray = [44, +]}
        // {inputsArrayLastItem = [+]}   
        // lastInputNumber[] will get emptied so a new number can be input later
        lastInputNumber = [];
        // The entire input secuence will be saved to screenSmallOutput
        screenSmallOutput = inputsArray.join("");

        // This will prevent to get a display error if calculationResult is 0
        if (calculationResult == 0) {
            // display the firstItem in inputArray {screenNormalOutput = 44}
            //  inputsArray = [44, +]
            //  calculationResult == 0
            //  inputsArrayFirstItem = [44]
            screenNormalOutput = inputsArrayFirstItem;
        } else {
            // display the calculationResult {screenNormalOutput = 66}
            //  inputsArray = [44, +, 22]
            //  calculationResult = 66
            screenNormalOutput = calculationResult;
        }
    }

    showOutput();
}

function calculateAllInputsArray() {
    calculationResult = eval(inputsArray.join(""));
    screenNormalOutput = calculationResult;
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
    lastInputNumber = [];

    showOutput();
}

function showOutput() {
    document.getElementById('output-normal').innerHTML = screenNormalOutput;
    document.getElementById('output-small').innerHTML = screenSmallOutput;

    log();
}

function log() {
    console.log('--------------------------------------------------');
    console.log("Current value of inputsArray: "        + inputsArray);
    console.log("Current value of screenNormalOutput: " + screenNormalOutput);
    console.log("Current value of screenSmallOutput: "  + screenSmallOutput);
    console.log("Current value of calculationResult: "  + calculationResult);
    console.log("Current value of lastInputNumber: "  + lastInputNumber);
    console.log('--------------------------------------------------');
}

// *  01. Functions  *