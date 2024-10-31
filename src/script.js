import { initTable } from './components/table.js';
import { createListOfButtons } from './components/listOfButtons.js';
import { createForm } from './components/form.js';
import { getMondayOfDate } from './utils.js';

const table = initTable(document.getElementById("tabella"));
table.build("2024-10-28", "");
table.render();