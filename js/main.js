/* 
======================================================
00. Global variables
01. Functions
====================================================== 
*/

// *  00. Global variables *

let inputsArray = [];
let outputArray = 0;
let operator = "";
let calculationResult = 0;
let squareRootResult = 0;

// *  00. Global variables *



// *  01. Functions  *

function storeValue(buttonValue){
    inputsArray.push(buttonValue);
    showOutput();
    log();
}

function deleteLastValue(){
    inputsArray.pop();
    showOutput();
    log();
}

function deleteAllValues(){
    inputsArray = [];
    outputArray = inputsArray;
    document.getElementById('output-small').innerHTML = outputArray;
    showOutput();
    log();
}

function squareRoot() {
    // output array is 25
    squareRootResult = Math.sqrt(outputArray); // 5
    // inputs array is [2,5]
    // empty inputs array
    inputsArray = [];
    // push square root results into the emptied array
    inputsArray.push(squareRootResult);

    document.getElementById('output-normal').innerHTML = squareRootResult;
    document.getElementById('output-small').innerHTML = `sqrt(${outputArray})`;
    log();
}

function showOutput(){
    outputArray = inputsArray.join("");
    document.getElementById('output-normal').innerHTML = outputArray;
    log();
}

function calculateAll(){
    outputArray = inputsArray.join("");
    calculationResult = eval(outputArray);
    document.getElementById('output-normal').innerHTML = calculationResult;
    document.getElementById('output-small').innerHTML = outputArray;
    log();
}

function log() {
    console.log('----------------------------------------------');
    console.log("Current value of outputArray: " + outputArray);
    console.log("Current value of inputsArray: " + inputsArray);
    console.log("Current value of Operator: " + operator);
    console.log("Current value of squareRootResult: " + squareRootResult);
    console.log("Current value of calculationResult: " + calculationResult);
    console.log('----------------------------------------------');
}

// *  01. Functions  *