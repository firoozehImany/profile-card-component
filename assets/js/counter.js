let countNum = document.querySelector(".CountNumElement")

function countUp(from, to) {
    let current = from
    let numId = setInterval(() => {
        countNum.innerHTML = current
        if (current >= to) {
            clearInterval(numId)
        }
        current += 4
    }, 100)
}

setTimeout(() => {
    let from = parseInt(countNum.getAttribute("data-from"));
    let to = parseInt(countNum.getAttribute("data-to"));
    countUp(from, to)
}, 1000);
