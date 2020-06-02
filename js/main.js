/* 
======================================================
00. Global variables
01. Functions
====================================================== 
*/

// *  00. Global variables *

let inputsArray = [];
let outputValue = 0;
let smallOutputValue = "";
let calculationResult = 0;

// *  00. Global variables *



// *  01. Functions  *

function showOutput() {
    document.getElementById('output-small').innerHTML = outputValue;
    document.getElementById('output-normal').innerHTML = calculationResult;
    log();
}

function storeValue(buttonValue) {
    inputsArray.push(buttonValue);
    outputValue = inputsArray.join("");
    calculateOne(outputValue);
    showOutput();
    log();
}

function squareRoot() {
    calculationResult = Math.sqrt(calculationResult);
    inputsArray = []; // !
    inputsArray.push(calculationResult);
    showOutput();
    log();
}

function calculateOne(outputValue) {
    calculationResult = eval(outputValue); //!
    log();
    return calculationResult;
}

function calculateAll() {
    calculationResult = eval(outputValue); // !
    outputValue = calculationResult; // !
    smallOutputValue = "";
    outputValue = "";
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
    outputValue = 0; // !
    calculationResult = 0;
    showOutput();
    log();
}

function log() {
    console.log('--------------------------------------------------');
    console.log("Current value of inputsArray: "       + inputsArray);
    console.log("Current value of outputValue: "       + outputValue);
    console.log("Current value of smallOutputValue: "  + smallOutputValue);
    console.log("Current value of calculationResult: " + calculationResult);
    console.log('--------------------------------------------------');
}

// *  01. Functions  *