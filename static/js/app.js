// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any exisiting data
    tbody.html("");

    // loop thorugh each object in he data and append a row and cells for each value in he row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // lopp thorugh each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}