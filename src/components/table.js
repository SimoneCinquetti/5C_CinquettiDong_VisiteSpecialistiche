const createTable = (parentElement) => {
    let data;
    return {
        build: (dataInput) => {
            data = dataInput;
        },
        render: () => {
            let htmlTable = "<table>";
            htmlTable += data.map((row) =>
                "<tr>" + row.map((col) =>
                    "<td>" + col + "</td>"
                ).join("")
            ).join("") + "</tr>";
            htmlTable += "</table>";
            parentElement.innerHTML = htmlTable;
        }
    }
}

const initTable = (parentElement) => {
    let date;
    let data;
    return {
        build: (dateInput, dataInput) => {
            date = dateInput;
            data = dataInput;
        }, 
        render: () => {
            let tableStructure = [];
            let dateRow = ["Orario", new Date(date).toLocaleDateString()];

            // Le date
            for (let i = 1; i < 5; i++) {
                let weekDate = new Date(date);
                weekDate.setDate(weekDate.getDate() + i);
                dateRow.push(weekDate.toLocaleDateString()); 
            }

            tableStructure.push(dateRow);

            // Gli orari
            for (let i = 8; i <= 12; i++) {
                tableStructure.push([i]);
            } 

            const table = createTable(parentElement);
            table.build(tableStructure);
            table.render();
        }
    }
}

