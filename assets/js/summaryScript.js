const listItems = document.getElementById("summary-list");
let counter = 1;

const getData = () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const items = data.map(item => {
                const { category, icon, score } = item;
                const classItem = "row-" + counter;
                counter++;
                return `<li class="${classItem}">
                            <div class="itemTitle">
                                <img alt="${category.toLowerCase()}-icon" src="${icon}"/>
                                <span>${category}</span>
                            </div>
                            <div class="itemScore">
                                <span>${score}</span>
                                <span class="dash">/</span>
                                <span>100</span>
                            </div>
                        </li>`
            }).join('')
            listItems.innerHTML = items;
        })
}

getData()