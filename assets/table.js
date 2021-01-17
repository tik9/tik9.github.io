window.onload = function () {
    ags = [
        ['Firm', 'Job','date'],
    ]

    header = ['Firma', 'Job', 'Datum']

    function createTable(tableData, header) {
        table = document.createElement('table');
        tableBody = document.createElement('tbody');
        tableHead = document.createElement('thead')
        headRow = document.createElement('tr')
        tableHead.appendChild(headRow)
        header.forEach(function (headData) {
            headCell = document.createElement('th')
            headCell.appendChild(document.createTextNode(headData))
            headRow.appendChild(headCell)
        })

        tableData.forEach(function (rowData) {
            row = document.createElement('tr');

            rowData.forEach(function (cellData) {
                cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        table.appendChild(tableHead);

        document.getElementById('ags').appendChild(table);
    }

    createTable(ags, header);

}