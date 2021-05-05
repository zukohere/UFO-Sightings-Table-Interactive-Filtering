// from data.js
var tableData = data;
// console.log(data)
// YOUR CODE HERE!

//ref for table body using html tag tbody
var tbody = d3.select("tbody");

data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });