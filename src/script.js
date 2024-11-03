import { initTable } from './components/table.js';
import { createListOfButtons } from './components/listOfButtons.js';
import { createModalForm } from './components/modalForm.js';
import { getMondayOfDate, chooseType } from './utils.js';
import { gestorePrenotazioniCache } from './librerie/prenotazioneCacheRemota.js';

//const table = initTable(document.getElementById("tabella"));

console.log("ciao");

const form = createModalForm(document.getElementById("modal-bd"));
fetch("./conf.json").then(r => r.json()).then((keyCache) => {
    console.log(keyCache.cacheToken)
    let cacheRemota= gestorePrenotazioniCache(keyCache.cacheToken,"prenotazioni")

    form.onsubmit((result) => {
        cacheRemota.aggiungerePrenotazioneCache() //la prenotazione richiede sia la data che la persona
    });
    
    form.setLabels({
        "etichetta" : [
            "select",
            ["a","b","c"]
        ]
    });

    form.render();
})

//const cacheRemota = gestorePrenotazioniCache(keyCache,"prenotazioni") //mi serve modo per ottenere dal config la chiave
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