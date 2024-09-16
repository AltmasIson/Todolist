// Add Task Function
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new task element
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    // Add buttons to task
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = () => toggleComplete(newTask);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(newTask);

    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);

    // Add the new task to the list
    taskList.appendChild(newTask);

    // Clear input field
    taskInput.value = "";
}

// Toggle Complete Function
function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}
