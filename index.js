/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const memf = document.getElementById("memf")
const litg = document.getElementById("litg")
const kilp = document.getElementById("kilp")
const covertBtn = document.getElementById("convert")
let input = document.getElementById("myInput").value =''

function overhall(number, measurement, convertValue, firstUnit, secondUnit){
    let firstDight = number * convertValue
    let secondDight = number / convertValue
    measurement.textContent = `${number} ${firstUnit} = ${firstDight.toFixed(3)} ${secondUnit} | ${number} ${secondUnit} = ${secondDight.toFixed(3)} ${firstUnit} `
}

covertBtn.addEventListener("click", function() {
        let input = document.getElementById("myInput").value 
        
        overhall(input, memf, 3.281, 'meters','feets')
        overhall(input, litg, 0.264, 'liters','gallons')
        overhall(input, kilp, 2.204, 'kilos','pounds')
    })

// function meters(number){
//     let meter = number * 3.281
//     let feet = number / 3.281
//     memf.textContent = `${number} meters = ${meter.toFixed(3)} feet | ${number} feet = ${feet.toFixed(3)} meters`

//     let liter = number * 0.264
//     let gallon = number / 0.264
//     litg.textContent = `${number} liters = ${liter.toFixed(3)} gallons | ${number} gallons = ${gallon.toFixed(3)} liters`

//     let kilo = number * 2.204
//     let pound = number / 2.204
//     kilp.textContent = `${number} pounds = ${kilo.toFixed(3)} pounds | ${number} pounds = ${pound.toFixed(3)} kilos`
// }