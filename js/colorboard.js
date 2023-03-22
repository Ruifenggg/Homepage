const container = document.getElementById('.container')
const colors = ['lightblue', 'lightgreen', 'lilac', 'violet', 'lightsalmon', 'lightpink', 'lightseagreen', 'lightsteelblue']

const SQUARES = 1000

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

    square.addEventListener('mouseover', () => setColor(square))
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}