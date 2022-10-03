/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-result")
const volumeEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result");
const convertBtn = document.getElementById("convert-btn")

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kgToPound = 2.204;

function converter(convertVal,unitVal) { 
    // let convertVal = inputEl.value
    
    let val1 = (convertVal * unitVal).toFixed(3); 
    let val2 = (convertVal / unitVal).toFixed(3); 

    return [val1, val2];
}

function getValues() { 

}

convertBtn.addEventListener("click", function () { 
    let convertVal = inputEl.value

    let getLength = converter(convertVal, meterToFeet);
    let feets = getLength[0],
        meters = getLength[1];
    lengthEl.textContent = `${convertVal} meters = ${feets} feet | ${convertVal} feet = ${meters} meters`

   
    let getVolume = converter(convertVal, literToGallon)
    let gallons = getVolume[0], 
        liters = getVolume[1]
    volumeEl.textContent = `${convertVal} liters = ${gallons} gallons | ${convertVal} gallons = ${liters} liters`;

    let getMass = converter(convertVal, kgToPound)
    let pounds = getMass[0],
         kilos = getMass[1];
    massEl.textContent = `${convertVal} kilos = ${pounds} pounds | ${convertVal} pounds = ${kilos} pounds`;

})
