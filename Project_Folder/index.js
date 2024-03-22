// Author:  Ed Dozler
// Date:    03/21/2024
// Purpose: Functions of the calculator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = " ";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(erro){
        display.value= "Error";
    }
    
}