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

    li.appendChild(label)
    li.appendChild(input)
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
            console.log("Checkbox \"" + ukol.id + "\" je zakliknutý = " + ukol.checked);
        }
    }
}


//! ========== Testování =========
let testUkol = document.getElementById("ukol0")
function splnUkolTest(id) {
    id.onchange = () => {
        console.log("Checkbox \"" + id.id + "\" je zakliknutý = " + id.checked);
    }
}
splnUkolTest(testUkol)
//! ========== Testování =========

