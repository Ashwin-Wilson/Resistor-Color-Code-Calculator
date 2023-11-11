let bandSelector = document.getElementById('Band');
let inputDigit = 1;

//Calculation variables
let firstDigit = '1';
let secondDigit = '0';
let thirdDigit = 0;
let multiplier = 1;
let tolerance = 1;
let tempCoeff = 100;

//Input Field
let inputOne = document.getElementById('1st-digit');
let inputTwo = document.getElementById('2nd-digit');
let inputThree = document.getElementById('3rd-digit');
let inputMulti = document.getElementById('Multiplier');
let inputTolerance = document.getElementById('Tolerance');
let inputTempCoeff = document.getElementById('Temp-Coeff');
//Outpust Field
let displayResistance = document.getElementById('display-resistance');
let displayTolerance = document.getElementById('display-Tolerance');
let displayTempCoeff = document.getElementById('display-TempCoeff');
//Reset button
document.getElementById('reloadBtn').onclick = ()=>{location.reload();};
//Disable 3rd-digit and temp.coeff by default
inputThree.classList.add('disable');
inputTempCoeff.classList.add('disable');

//to enable buttons according to selected band
console.log(bandSelector);
bandSelector.onchange = () => {
    if (bandSelector.value == 4) {
        inputThree.classList.add('disable');
        inputTempCoeff.classList.add('disable');
    }
    else if (bandSelector.value == 5) {
        inputThree.classList.remove('disable');
        inputTempCoeff.classList.add('disable');
    }
    else {
        inputThree.classList.remove('disable');
        inputTempCoeff.classList.remove('disable');
    }
}
//funciton for resistance calculations
function fourBandResistorCalc() {
    var resistance = firstDigit + secondDigit;
    resistance = Number(resistance) * Number(multiplier);
    var count = 0, temp = resistance;
    if( (temp / 1000000) < 1 ){
        if((temp/1000)>=1){
            resistance = temp/1000;
            resistance = resistance + "k";
        }
    }else{
        resistance = temp/1000000;
        resistance = resistance + "M";
    }
    // console.log(count);
    displayResistance.value = "Resistance : " + resistance + " Ohms";
    displayTolerance.value = "Tolerance : ±" + tolerance + "%"
}

function fiveBandResistorCalc(){
    var resistance = firstDigit + secondDigit + thirdDigit;
    resistance = Number(resistance) * Number(multiplier);
    var count = 0, temp = resistance;
    if( (temp / 1000000) < 1 ){
        if((temp/1000)>=1){
            resistance = temp/1000;
            resistance = resistance + "k";
        }
    }else{
        resistance = temp/1000000;
        resistance = resistance + "M";
    }
    // console.log(count);
    displayResistance.value = "Resistance : " + resistance + " Ohms";
    displayTolerance.value = "Tolerance : ±" + tolerance + "%"
}

function sixBandResistorCalc(){
    var resistance = firstDigit + secondDigit + thirdDigit;
    resistance = Number(resistance) * Number(multiplier);
    var count = 0, temp = resistance;
    if( (temp / 1000000) < 1 ){
        if((temp/1000)>=1){
            resistance = temp/1000;
            resistance = resistance + "k";
        }
    }else{
        resistance = temp/1000000;
        resistance = resistance + "M";
    }
    // console.log(count);
    displayResistance.value = "Resistance : " + resistance + " Ohms";
    displayTolerance.value = "Tolerance : ±" + tolerance + "%";
    displayTempCoeff.value = "Temp. Coeff : "+ tempCoeff + "ppm/K"
}
//to change the color and calculate the resistance 
inputOne.onchange = () => {
    //for color changing
    inputOne.style.backgroundColor = inputOne[inputOne.selectedIndex].style.backgroundColor;
    //for calculation
    firstDigit = inputOne.value;
    if (bandSelector.value == 4) {
        fourBandResistorCalc();
    }
    else if (bandSelector.value == 5) {
        fiveBandResistorCalc();
    }
    else {
        sixBandResistorCalc();
    }
}

inputTwo.onchange = () => {
    //for calculation
    secondDigit = inputTwo.value;
    if (bandSelector.value == 4) {
        fourBandResistorCalc();
    }
    else if (bandSelector.value == 5) {
        fiveBandResistorCalc();
    }
    else {
        sixBandResistorCalc();
    }
    //for color changing
    var color = inputTwo[inputTwo.selectedIndex].style.backgroundColor;
    if (color == 'white') {
        inputTwo.style.color = 'black';
        inputTwo.style.backgroundColor = color;

    }
    else if (color == 'black') {
        inputTwo.style.color = 'white';
        inputTwo.style.backgroundColor = color;
    }
    else {
        inputTwo.style.color = 'black';
        inputTwo.style.backgroundColor = color;
    }

}
inputThree.onchange = () => {
    //for calculation
    thirdDigit = inputThree.value;

    if (bandSelector.value == 5) {
        fiveBandResistorCalc();
    }
    else {
        sixBandResistorCalc();
    }
    //for color changing
    var color = inputThree[inputThree.selectedIndex].style.backgroundColor;
    if (color == 'white') {
        inputThree.style.color = 'black';
        inputThree.style.backgroundColor = color;

    }
    else if (color == 'black') {
        inputThree.style.color = 'white';
        inputThree.style.backgroundColor = color;
    }
    else {
        inputThree.style.color = 'black';
        inputThree.style.backgroundColor = color;
    }
}
inputMulti.onchange = () => {
    //for calculation
    multiplier = inputMulti.value;
    if (bandSelector.value == 4) {
        fourBandResistorCalc();
    }
    else if (bandSelector.value == 5) {
        fiveBandResistorCalc();
    }
    else {
        sixBandResistorCalc();
    }
     //for color changing
     var color = inputMulti[inputMulti.selectedIndex].style.backgroundColor;
     if (color == 'white') {
        inputMulti.style.color = 'black';
        inputMulti.style.backgroundColor = color;
 
     }
     else if (color == 'black') {
        inputMulti.style.color = 'white';
        inputMulti.style.backgroundColor = color;
     }
     else {
        inputMulti.style.color = 'black';
        inputMulti.style.backgroundColor = color;
     }

}
inputTolerance.onchange = () => {
    //for calculation
    tolerance = inputTolerance.value;
    if (bandSelector.value == 4) {
        fourBandResistorCalc();
    }
    else if (bandSelector.value == 5) {
        fiveBandResistorCalc();
    }
    else {
        sixBandResistorCalc();
    }
    //for color changing
    inputTolerance.style.backgroundColor = inputTolerance[inputTolerance.selectedIndex].style.backgroundColor;

}
inputTempCoeff.onchange = () => {
    //for calculation
    tempCoeff = inputTempCoeff.value;
    sixBandResistorCalc();
    //for color changing
    inputTempCoeff.style.backgroundColor = inputTempCoeff[inputTempCoeff.selectedIndex].style.backgroundColor;

}

