/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const memf = document.getElementById("memf")
const litg = document.getElementById("litg")
const kilp = document.getElementById("kilp")
const covertBtn = document.getElementById("convert")
let input = document.getElementById("myInput").value = ""

function meters(number){
    let meter = number * 3.281
    let feet = number / 3.281
    memf.textContent = `${number} meters = ${meter.toFixed(3)} feet | ${number} feet = ${feet.toFixed(3)} meters`

    let liter = number * 0.264
    let gallon = number / 0.264
    litg.textContent = `${number} liters = ${liter.toFixed(3)} gallons | ${number} gallons = ${gallon.toFixed(3)} liters`

    let kilo = number * 2.204
    let pound = number / 2.204
    kilp.textContent = `${number} pounds = ${kilo.toFixed(3)} pounds | ${number} pounds = ${pound.toFixed(3)} kilos`

}
covertBtn.addEventListener("click", function() {
        let input = document.getElementById("myInput").value 
        
        meters(input)
    })