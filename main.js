let counter
let savedNumber = JSON.parse(localStorage.getItem('key'))
        
if (savedNumber == null) {
    counter = 0
    render()
} else {
    counter = savedNumber
    render()
}

function render() {
    const phrase = "The running total is: " + counter
    document.querySelector('#counter').innerText = phrase
}

function saveCurrentNumber() {
    localStorage.setItem('key', JSON.stringify(counter))
}

function decrease() {
    counter = counter - 1
    saveCurrentNumber()
    render()
}

function increase() {
    counter = counter + 1
    saveCurrentNumber()
    render()
}