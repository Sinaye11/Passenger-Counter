//Declaring our variables
let count = 0
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")

//Our function that will keep track of our count
function increment() {
    count += 1
    countEL.textContent = count
}
//Save function that will keep track of our incrementation and reset from zero
function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}

