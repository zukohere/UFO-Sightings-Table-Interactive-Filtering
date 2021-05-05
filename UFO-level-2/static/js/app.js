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


// Create event handler 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    const idColmap = [{ id: "#datetime", col: "datetime" },
    { id: "#city", col: "city" },
    { id: "#state", col: "state" },
    { id: "#country", col: "country" },
    { id: "#shape", col: "shape" }];

    var filteredData = tableData;

    idColmap.forEach(entry => {
        //if the user selection is NOT blank, filter data to user selection.
        if (d3.select(entry.id).property("value")) {
            filteredData = filteredData.filter(sighting =>
                sighting[entry.col] === d3.select(entry.id).property("value"));
        }
    });

    //print the filtered data to the console
    console.log(filteredData);

    //overwrite table with filtered data
    var tbody = d3.select("tbody");
    tbody.html(""); // clears the table

    filteredData.forEach((UFOsighting_bydate) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting_bydate).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })
}