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

// *  00. Global variables *



// *  01. Array variables  *

function storeValue(buttonValue){
    inputsArray.push(buttonValue);
    showOutput();
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
    console.log("Current value of calculationResult: " + calculationResult);
    console.log('----------------------------------------------');
}

// *  01. Array variables  *