// Styly
let redBtn = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
let yellowBtn = "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900";

let todoInput = document.getElementById("todo-input");
let todoButton = document.getElementById("todo-button");
let seznamUkolu = document.getElementById("seznamUkolu");
let seznamHotovychUkolu = document.getElementById("seznamHotovychUkolu");

todoButton.onclick = (e) => {
    e.preventDefault();
    console.log("Input value: " + todoInput.value);
    createTask(todoInput.value);
};

// Function to generate a pseudo-UUID
function generateUUID() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

// Vytvoření úkolu včetně dalších elementů k němu patřicí 
function createTask(ukol) {
    let idUkolu = generateUUID()
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = idUkolu;
    let label = document.createElement("label");
    label.htmlFor = idUkolu;
    label.textContent = ukol;

    let editBtn = document.createElement("button");
    editBtn.id = "edit" + idUkolu;
    editBtn.className = "yellowBtn " + yellowBtn;
    editBtn.type = "button"
    editBtn.textContent = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete" + idUkolu;
    // "redBtn" pro zvolení delete buttonu později...
    deleteBtn.className = "redBtn " + redBtn;
    deleteBtn.textContent = "Delete";

    li.appendChild(label);
    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    seznamUkolu.appendChild(li);

    processTasks();
    deleteTask();
}

// Přesouvá úkoly podle "checked" checkboxů
function processTasks() {
    seznamUkolu.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.checked) {
            let ukolElement = e.target.closest("li")
            if (ukolElement) {
                seznamHotovychUkolu.appendChild(ukolElement)
            }
        }
    });

    seznamHotovychUkolu.addEventListener("change", (e) => {
        if (e.target.type === 'checkbox' && !e.target.checked) {
            let ukolElement = e.target.closest("li")
            if (ukolElement) {
                seznamUkolu.appendChild(ukolElement)
            }
        }
    })
}

// Smaže ukoly z hotových nebo splněných
function deleteTask() {
    seznamUkolu.addEventListener("click", (e) => {
        console.log(e.target.type);
        if (e.target.matches(".redBtn")) {
            let ukolElement = e.target.closest("li")
            if (ukolElement) {
                ukolElement.remove()
            }
        } 
        //? Test na edit
        else if (e.target.matches(".yellowBtn")) {
            let ukolElement = e.target.closest("li")
            if (ukolElement) {
                console.log("Ano, jsem žlutý btn");
            }
        }
    })

    seznamHotovychUkolu.addEventListener("click", (e) => {
        console.log(e.target.type);
        if (e.target.matches(".redBtn")) {
            let ukolElement = e.target.closest("li")
            if (ukolElement) {
                ukolElement.remove()
            }
        } 
    })
}

// editBtn.setAttribute("data-modal-target", "taskEdit-modal")
// editBtn.setAttribute("data-modal-toggle", "taskEdit-modal")
