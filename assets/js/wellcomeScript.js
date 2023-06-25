const showBack = document.getElementById("product")
const moveresult = document.getElementById("resultCard")
const showSummary = document.getElementById("summaryCard")

setTimeout(() => {
    showSummary.classList.add("showSummary")
    moveresult.classList.add("moveResult")
}, 1500);

setTimeout(() => {
    showBack.classList.add("showBack")
}, 1200)

