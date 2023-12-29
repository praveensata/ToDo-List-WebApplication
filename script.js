function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append the new item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}

function completeTask(button) {
    var taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
