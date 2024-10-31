/*
    Struttura dizionario

    {
        "etichetta" : [
            "tipo",
            [valore1, valore2, valore3]
        ]
    }

*/

const createForm = (parentElement) => {
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
            for (let key in data) {
                if (data[key][1] == null) {
                    parentElement.innerHTML += `<div>${key}\n<input id="${key}" type="${data[key][0]}"/></div>` + '\n';
                } else {
                    parentElement.innerHTML += `
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

            parentElement.innerHTML += "<button type='button' id='submit'>Prenota</button>";

            document.querySelector("#submit").onclick = () => {
                const result = Object.keys(data).map((name) => {
                    return document.querySelector("#" + name).value;
                });

                Object.keys(data).forEach(e => document.querySelector("#" + e).value = "")

                callback(result);
            }
        }
    }
}

export { createForm };