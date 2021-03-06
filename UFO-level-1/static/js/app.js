// from data.js
var tableData = data;
// console.log(data)
// YOUR CODE HERE!

//ref for table body using html tag tbody
var tbody = d3.select("tbody");

tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn"); //arg based on button id, index line 44.

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
// filter the data to the user selection, if blank, show the full table. 
if (inputValue){  
var filteredData = tableData.filter(sighting => 
    sighting.datetime === inputValue);
}
else {
  var filteredData = tableData;
};
//print the filtered data to the console
  console.log(filteredData); 

  //overwrite table with filtered data
  var tbody = d3.select("tbody");
  tbody.html("") // clears the table

  filteredData.forEach((UFOsighting_bydate) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting_bydate).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
};