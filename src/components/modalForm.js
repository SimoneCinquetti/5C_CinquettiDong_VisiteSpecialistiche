/*
Struttura dizionario

{
    "etichetta" : [
        "tipo",
        [valore1, valore2, valore3]
    ]
}

*/

const createModalForm = (parentElement) => {
let data;
let callback = null;

return {
    setLabels: (labelsAndType) => {
        data = labelsAndType;
    },
    onsubmit: (callbackInput) => {
        callback = callbackInput
    },
    render: () => {
        let modalHTML = "";
        for (let key in data) {
            if (data[key][1] == null) {
                modalHTML += `<div>${key}\n<input id="${key}" type="${data[key][0]}"/></div>` + '\n';
            } else {
                modalHTML += `
                    <div>
                        ${key}
                        <${data[key][0]} id="${key}">
                          ${Object.entries(data[key][1]).map((value) => 
                            `<option value="${value[1]}">${value[1]}</option>`
                          ).join('')}
                        </${data[key][0]}>
                    </div>
                `; 
            }
        }

        parentElement.innerHTML = modalHTML;
    }
}
}

export { createModalForm };



