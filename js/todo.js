let todoInput = document.getElementById("todo-input")
let todoButton = document.getElementById("todo-button")

todoButton.onclick = (e) => {
    e.preventDefault()

    console.log("V inputu je napsáno: " + todoInput.value);
    createTask()
}

let idCislo = 0
function createTask() {
    let seznamUkolu = document.getElementById("seznamUkolu")

    if (idCislo === 0) {
        idCislo = 1
    } else {
        idCislo++
    }

    let idUkolu = "ukol" + idCislo

    let li = document.createElement("li")
    let input = document.createElement("input")
    input.type = "checkbox"
    input.id = idUkolu
    let label = document.createElement("label")
    label.htmlFor = idUkolu
    label.textContent = todoInput.value

    let editBtn = document.createElement("button")
    editBtn.id = "edit" + idCislo
    editBtn.className = yellowBtn
    editBtn.textContent = "Upravit"

    let smazatBtn = document.createElement("button")
    smazatBtn.id = "smazat" + idCislo
    smazatBtn.className = redBtn
    smazatBtn.textContent = "Smazat"

    li.appendChild(label)
    li.appendChild(input)
    li.appendChild(editBtn)
    li.appendChild(smazatBtn)
    seznamUkolu.appendChild(li)

    zpracujUkol()
}

function najdiUkol() {
    let seznamUkolu = document.getElementById("seznamUkolu")
    console.log("Počet úkolů " + seznamUkolu.childElementCount);
    console.log("blabla je: " + seznamUkolu.childElementCount);
}

function zpracujUkol() {
    let seznamUkolu = document.getElementById("seznamUkolu")
    for (i = 1; i <= seznamUkolu.childElementCount; i++) {
        let ukol = document.getElementById("ukol" + i)
        ukol.onchange = () => {
            if (ukol.checked) {
                console.log("Checkbox \"" + ukol.id + "\" je zakliknutý = " + ukol.checked);
            } else {
                console.log("Checkbox \"" + ukol.id + "\" není zakliknutý = " + ukol.checked);
            }
        }
    }
}


//? ========== Styly ==========
let redBtn = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
let yellowBtn = "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"


//! ========== Testování =========
let testUkol = document.getElementById("ukol0")
function splnUkolTest(id) {
    id.onchange = () => {
        console.log("Checkbox \"" + id.id + "\" je zakliknutý = " + id.checked);
    }
}
splnUkolTest(testUkol)

