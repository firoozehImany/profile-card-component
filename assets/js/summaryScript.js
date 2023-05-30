
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let jsonData = data;
    let listItems = document.getElementById("summaryList");
    let counter = 1;

    jsonData.forEach(function (item) {
      let summaryList = document.createElement('li');
      let classItem = "row-" + counter;
      summaryList.classList.add(classItem)
      summaryList.innerHTML =
        '<h4>' +
        item.category +
        '</h4>' +
        '<span>' +
        item.score +
        '</p>' +
        '<img src="' +
        item.icon +
        '" alt="' +
        item.category +
        ' icon">';
        listItems.appendChild(summaryList);
        counter++;
    });
  });
