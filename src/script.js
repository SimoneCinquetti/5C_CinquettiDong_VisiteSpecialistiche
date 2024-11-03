import { initTable } from './components/table.js';
import { createListOfButtons } from './components/listOfButtons.js';
import { createModalForm } from './components/modalForm.js';
import { getMondayOfDate, chooseType } from './utils.js';
import { gestorePrenotazioniCache } from './librerie/prenotazioneCacheRemota.js';

const form = createModalForm(document.getElementById("modal-bd"));
const listOfButtons = createListOfButtons(document.getElementById("tipologie"));

fetch("./conf.json").then(r => r.json()).then((keyCache) => {

    let cacheRemota= gestorePrenotazioniCache(keyCache.cacheToken,"prenotazioni");
    
    listOfButtons.build([...keyCache.tipologie], () => {

    });

    console.log(listOfButtons.getCurrentSelectedCategory());

    listOfButtons.render();

    // Form
    form.onsubmit((result) => {
        //DA AGGIUNGERE LA CATEGORIA E COMBINARLA CON DATA E ORA PER LA PRENOTAZIONE DA INSERIRE
        //cacheRemota.aggiungerePrenotazioneCache() 
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