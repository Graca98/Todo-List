// Ruzné kraviny z webu
//! Toto je pouze pro přehled - potom smazat


document.getElementById('taskList').addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target && event.target.matches('.deleteBtn')) {
      // Find the parent `li` element, which is the task container
      const taskElement = event.target.closest('li');
      if (taskElement) {
        // Remove the task element from the document
        taskElement.remove();
      }
    }
  });

  
// Function to generate a pseudo-UUID (as previously defined)
function generateUUID() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

// Function to create a task and append it to the DOM
function createTask(taskDescription) {
    let uuidForTask = generateUUID(); // Generate a unique identifier for this task
    let li = document.createElement("li");
    li.id = uuidForTask; // Assign the UUID as the ID of the li element
    li.textContent = taskDescription; // Set the task description
    document.getElementById("taskList").appendChild(li); // Append to the task list
}

// Function to delete a task by its UUID
function deleteTask(uuid) {
    let taskElement = document.getElementById(uuid);
    if (taskElement) {
        taskElement.remove(); // Removes the task from the DOM
    } else {
        console.log("Task not found.");
    }
}

// Example usage
createTask("Learn JavaScript");
createTask("Exercise for 30 minutes");

// Assuming you know the UUID of the task you want to delete
// For example, let's say the UUID of the task you want to delete is "123e4567-e89b-12d3-a456-426614174000"
deleteTask("123e4567-e89b-12d3-a456-426614174000");



function generateUUID() {
    // Generates a pseudo-UUID
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

let uuidForTask = generateUUID(); // Generate UUID for new task
// Assume you assign this UUID to a task's ID attribute when creating it





// Function to create a task and append it to the DOM
function createTask(taskDescription) {
    let uuidForTask = generateUUID(); // Generate a unique identifier for this task
    let li = document.createElement("li");
    li.id = uuidForTask; // Assign the UUID as the ID of the li element
    li.textContent = taskDescription; // Set the task description
    document.getElementById("taskList").appendChild(li); // Append to the task list
    return uuidForTask; // Return the UUID for future reference
}

// Function to select and highlight a task by its UUID
function highlightTask(uuid) {
    let taskElement = document.getElementById(uuid);
    if (taskElement) {
        taskElement.style.backgroundColor = "yellow"; // Example manipulation
    } else {
        console.log("Task not found.");
    }
}

// Example usage
let taskUUID = createTask("Learn JavaScript");
highlightTask(taskUUID); // This will highlight the newly created task
