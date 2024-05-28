/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let memf = document.getElementById("memf")
let litg = document.getElementById("litg")
let kilp = document.getElementById("kilp")
const covertBtn = document.getElementById("convert")
let input = document.getElementById("myInput").value = ""

covertBtn.addEventListener("click", function() {
        let input = document.getElementById("myInput").value
        
        let meter = input * 3.281
        let feet = input / 3.281
        memf.textContent = `${input} meters = ${meter.toFixed(3)} feet | ${input} feet = ${feet.toFixed(3)} meters`

        let liter = input * 0.264
        let gallon = input / 0.264
        litg.textContent = `${input} liters = ${liter.toFixed(3)} gallons | ${input} gallons = ${gallon.toFixed(3)} liters`

        let kilo = input * 2.204
        let pound = input / 2.204
        kilp.textContent = `${input} pounds = ${kilo.toFixed(3)} pounds | ${input} pounds = ${pound.toFixed(3)} kilos`

    }
)

