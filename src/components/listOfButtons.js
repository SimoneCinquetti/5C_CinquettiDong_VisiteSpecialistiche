const createListOfButtons = (parentElement) => {
    let data;
    let btnFunction;
    return {
        build: (dataInput, functionInput) => {
            data = dataInput;
            btnFunction = functionInput;
        },
        render: () => {
            let buttons = ""; 
            buttons += data.map((e, index) => `<button class="btn btn-link nav-link" id="button${index}">${e}</button>`).join("\n");
            parentElement.innerHTML = buttons;

            for (let i = 0; i < data.length; i++) {
                document.getElementById("button" + i).onclick = btnFunction;
            }
        },
        getCurrentSelectedCategory: () => {

        }
        
    }
}

export { createListOfButtons };