// import functions
import { add } from './calculations.js';

const addNumber1 = document.getElementById('number-1');
const addNumber2 = document.getElementById('number-1');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');
       
// reference needed DOM elements
addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    const sum = add(num1, num2);
    addAnswer.textContent = sum;
});

import { sub } from './calculations.js';

const subNumber1 = document.getElementById('subnumber-1');
const subNumber2 = document.getElementById('subnumber-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

subButton.addEventListener('click', () => {
    const num1 = Number(subNumber1.value);
    const num2 = Number(subNumber2.value);
    const sum = sub(num1, num2);
    subAnswer.textContent = sum;

});

import { times } from './calculations.js';

const timesNumber1 = document.getElementById('timesnumber-1');
const timesNumber2 = document.getElementById('timesnumber-2');
const timesButton = document.getElementById('times-button');
const timesAnswer = document.getElementById('times-answer');
    
timesButton.addEventListener('click', () => {
 
    const num1 = Number(timesNumber1.value);
    const num2 = Number(timesNumber2.value);
    const sum = times(num1, num2);
    timesAnswer.textContent = sum;
});

import { div } from './calculations.js';

const divNumber1 = document.getElementById('divnumber-1');
const divNumber2 = document.getElementById('divnumber-2');
const divButton = document.getElementById('div-button');
const divAnswer = document.getElementById('div-answer');

divButton.addEventListener('click', () => {
    const num1 = Number(divNumber1.value);
    const num2 = Number(divNumber2.value);
    const sum = div(num1, num2);
    divAnswer.textContent = sum;
});
    
    
// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
