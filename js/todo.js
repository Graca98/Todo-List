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
    editBtn.className = yellowBtn;
    editBtn.textContent = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete" + idUkolu;
    deleteBtn.className = redBtn;
    deleteBtn.textContent = "Delete";

    li.appendChild(label);
    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    seznamUkolu.appendChild(li);

    processTasks();
}

// Přesouvá úkoly podle "checked" checkboxů
function processTasks() {
    seznamUkolu.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.checked) {
            let ukol = e.target.closest("li")
            seznamHotovychUkolu.appendChild(ukol)
        }
    });

    seznamHotovychUkolu.addEventListener("change", (e) => {
        if (e.target.type === 'checkbox' && !e.target.checked) {
            let ukol = e.target.closest("li")
            seznamUkolu.appendChild(ukol)
        }
    })
}



