import { initTable } from './components/table.js';
import { createListOfButtons } from './components/listOfButtons.js';
import { createModalForm } from './components/modalForm.js';
import { getMondayOfDate, chooseType } from './utils.js';
import { gestorePrenotazioniCache } from './librerie/prenotazioneCacheRemota.js';

const form = createModalForm(document.getElementById("modal-bd"));
const listOfButtons = createListOfButtons(document.getElementById("tipologie"));
const appTable = initTable(document.getElementById("appuntamenti"));

fetch("./conf.json").then(r => r.json()).then((keyCache) => {

    let cacheRemota= gestorePrenotazioniCache(keyCache.cacheToken,"prenotazioni");
    
    listOfButtons.build([...keyCache.tipologie], (currentActiveBtn) => {
        let actualDate = new Date().toISOString().split('T')[0];
        appTable.build(getMondayOfDate(actualDate), chooseType(cacheRemota.mostraPrenotazioniCache(), currentActiveBtn));
        appTable.render();
    });

    listOfButtons.render();

    // Form
    form.onsubmit((result) => {
        let prenotazione="";
        prenotazione+=listOfButtons.getCurrentSelectedCategory()+"-"
        let data=result[0].split("-").reverse().join("")
        prenotazione+=data+"-"
        prenotazione+=result[1]
        document.getElementById("prompt").innerHTML = "Prenotazione effettuata!";
        cacheRemota.aggiungerePrenotazioneCache(prenotazione,result[2])
    });
    
    form.setLabels({
        "Data" : [
            "Date",
            null
        ],
        "Ora" : [
            "select",
            ["8","9","10","11","12"]
        ],
        "Nominativo" : [
            "text",
            null
        ]
    });

    form.render();
})