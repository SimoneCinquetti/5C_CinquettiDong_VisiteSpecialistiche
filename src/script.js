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

    listOfButtons.render();

    // Form
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