const createListOfButtons = (parentElement) => {
    let data;
    let tableBuilder;
    return {
        build: (dataInput, functionInput) => {
            data = dataInput;
            tableBuilder = functionInput;
        },
        render: () => {
            let buttons = ""; 
            buttons += data.map((e, index) => `<button id="button${index}">${e}</button>`).join("\n");
            parentElement.innerHTML = buttons;

            for (let i = 0; i < data.length; i++) {
                document.getElementById("button" + i).onclick = tableBuilder;
            }
        }
    }
}

export { createListOfButtons };