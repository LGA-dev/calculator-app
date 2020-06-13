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

let screenNormalDisplay = document.getElementById('output-normal');
let screenSmallDisplay = document.getElementById('output-small');

let calculationResult = 0;

let maximumInputs = 8;
let numberOfInputs = 0;

// *  00. Global variables *



// *  01. Functions  *

function storeValue(buttonValue) {

    if (numberOfInputs < maximumInputs) {
        // If the array size is less than the maximum inputs
        // Allow input
        lastInputNumber.push(buttonValue);
        inputsArray.push(buttonValue);
        numberOfInputs++;
    } else if (inputsArray.length == maximumInputs && typeof buttonValue == 'string'){
        // If the array size is equal than the maximum inputs
        // and
        // If the type of button value is a string
        // Allow input
        // and reset numberOfInputs
        lastInputNumber.push(buttonValue);
        inputsArray.push(buttonValue);
        numberOfInputs = 0;
    } else {
        // Don't allow inputs
        return
    }

    calculateInputsArray();
    showOutput();
}

// This will help to make the calculations display more fluid while you are entering numbers and operators
function calculateInputsArray() {
    inputsArrayLastItem = inputsArray[inputsArray.length - 1];
    inputsArrayFirstItem = inputsArray[0];

    if (typeof inputsArrayLastItem == 'number') {
        // Creating lastInputNumber[] helped me to display the last input number correctly {44 got displayed as 4, per example}
        // while also allowing me to separate numbers from operators without messing up the {complete} inputsArray[]
        screenNormalOutput = lastInputNumber.join("");
        // The calculation of the items inside inputsArray[] will be made
        // but it will not be displayed in the screen until the last item from the inputs array is not a number
        calculationResult = eval(inputsArray.join(""));
    } else {
        // This means that whenever an operator is input, the result of calculationResult will be show 
        // also lastInputNumber[] will get emptied so a new number can be input later
        lastInputNumber = [];
        // and the entire numbers input sequence will be saved to screenSmallOutput
        screenSmallOutput = inputsArray.join("");

        // This will prevent to get a display error while showing the numbers from the calculation result
        // calculationResult being 0 means that there wasn't a calculation done yet
        // if that happens then it will grab the first item inside the inputs array instead of the calculation result
        // until the calculation result is given a value, it will always use this value instead
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
}

function calculateAllInputsArray() {
    calculationResult = eval(inputsArray.join(""));
    screenNormalOutput = calculationResult;
    screenSmallOutput = "";
    lastInputNumber = [];
    inputsArray = [calculationResult];

    showOutput();
}

function squareRoot() {
    sqrtResult = Math.sqrt(calculationResult);
    sqrtOriginalNumber = calculationResult;

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
    //Grab the values of screenNormalOutput and screenSmallOutput returned from calculateInputsArray()
    //and replaces the numbers in the screen with each of the values
    document.getElementById('output-normal').innerHTML = screenNormalOutput;
    document.getElementById('output-small').innerHTML  =  screenSmallOutput;

    //This animation would help to differentiate the last input number from the final calculation result
    if (lastInputNumber != 0) {
        screenNormalDisplay.classList.add('fadeInOutAnimation');
    } else {
        screenNormalDisplay.classList.remove('fadeInOutAnimation');
    }

    log();
}

function log() {
    console.log('--------------------------------------------------');
    console.log("Current value of inputsArray: "        +        inputsArray);
    console.log("Current value of screenNormalOutput: " + screenNormalOutput);
    console.log("Current value of screenSmallOutput: "  +  screenSmallOutput);
    console.log("Current value of calculationResult: "  +  calculationResult);
    console.log("Current value of lastInputNumber: "  +      lastInputNumber);
    console.log("Current value of maximumInputs: "  +          maximumInputs);
    console.log("Current value of numberOfInputs: "  +        numberOfInputs);
    console.log('--------------------------------------------------');
}

// *  01. Functions  *