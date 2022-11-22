let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    countEl.innerText = count
}

function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    count = 0
    countEl.textContent = count
}




