import { initTable } from './components/table.js';
import { createListOfButtons } from './components/listOfButtons.js';
import { createForm } from './components/form.js';
import { createModalForm } from './components/form.js';
import { getMondayOfDate, chooseType } from './utils.js';
import { gestorePrenotazioniCache } from './librerie/prenotazioneCacheRemota.js';

//const table = initTable(document.getElementById("tabella"));

console.log("ciao");

const form = createModalForm(document.getElementById("test"));

console.log(document.getElementById("test"));
console.log("ciao");

/*
table.build(getMondayOfDate("2024-06-04"), 
    { 
        "Cardiologia-04062024-9": "Mario Rossi",
        "Cardiologia-07062024-9": "Mario Rossi",
        "Oncologia-21042025-12": "Sandra Bianchi",
    }
);

console.log(chooseType(
    { 
        "Cardiologia-04062024-9": "Mario Rossi",
        "Cardiologia-04072024-9": "Mario Rossi",
        "Oncologia-21042025-12": "Sandra Bianchi",
    }
, "Cardiologia"));

table.render();
*/

form.setLabels({
    "etichetta" : [
        "select",
        ["a","b","c"]
    ]
});
form.render();