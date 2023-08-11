let counter = 0
     
function render() {
    document.querySelector('#secondaryPage').innerText = counter
}

function decrease() {
    counter = counter - 1
    render()
}

function increase() {
    counter = counter + 1
    render()
}

function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active')
    })
    document.getElementById(pageId).classList.add('active')
}