const showBack = document.querySelector(".product")
const moveresult = document.querySelector(".resultCard")
const showSummary = document.querySelector(".summaryCard")

setTimeout(() => {
    showSummary.classList.add("showSummary")
    moveresult.classList.add("moveResult")
}, 2000);

setTimeout(() => {
    showBack.classList.add("showBack")
}, 1700)

