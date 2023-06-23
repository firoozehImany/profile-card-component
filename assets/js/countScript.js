let countNum = document.getElementById("averageNum")

function countUp(from, to) {
    current = from
    let numId = setInterval(() => {
        countNum.innerHTML = current
        if (current >= to) {
            clearInterval(numId)
        }
        current += 4
    }, 100)
}

setTimeout(() => {
    countUp(0, 76)
}, 1000);

