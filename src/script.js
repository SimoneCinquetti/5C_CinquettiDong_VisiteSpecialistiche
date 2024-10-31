import { initTable } from './components/table.js';
import { createListOfButtons } from './components/listOfButtons.js';
import { createForm } from './components/form.js';
import { getMondayOfDate } from './utils.js';
import { gestorePrenotazioniCache } from './librerie/prenotazioneCacheRemota.js';

const form = createForm(document.getElementById("test"));

form.setLabels({"ciao" : [
    "select", 
    [8, 9, 10, 11, 12]
]});

form.render();