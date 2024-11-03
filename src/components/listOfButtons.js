const createListOfButtons = (parentElement) => {
    let data;
    let btnFunction;
    let currentActiveBtn;
    return {
        build: (dataInput, functionInput) => {
            data = dataInput;
            btnFunction = functionInput;
        },
        render: () => {
            let buttons = ""; 
            buttons += data.map((e, index) => `
                <button type="button" id="button${index}" class="btn btn-primary">${e}</a>
            `).join("\n");
            parentElement.innerHTML = buttons;
            const btnList = document.querySelectorAll(".btn-primary");

            btnList.forEach((btn) => {
                btn.onclick = function () {
                    btnList.forEach((button) => button.classList.remove('active'));
                    this.classList.add('active');
                    currentActiveBtn = this.innerHTML.trim();
                    btnFunction()
                }
            });
        },
        getCurrentSelectedCategory: () => {
            return currentActiveBtn;
        }
        
    }
}

export { createListOfButtons };