const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'SHRIMP FRIED RICE SHALL RISE!'
let idx = 1
let speed = 300/speedEl.val

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}