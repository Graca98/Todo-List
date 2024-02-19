let todoInput = document.getElementById("todo-input")
let todoButton = document.getElementById("todo-button")

todoButton.onclick = (e) => {
    e.preventDefault()

    console.log("V inputu je napsáno: " + todoInput.value);
    createTask()
}

function createTask() {
    let seznamUkolu = document.getElementById("seznamUkolu")

    let li = document.createElement("li")
    li.textContent = todoInput.value

    seznamUkolu.appendChild(li)
}