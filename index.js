document.addEventListener("DOMContentLoaded", function() {

const description = document.querySelector("input");
const taskList = document.querySelector(".tasks");
const addTaskButton = document.getElementById("add-task");

let tasks = [];

addTaskButton.addEventListener("click", function() {
    const taskDescription = description.value.trim();
    if(taskDescription){
        const newTask = {
            id: Date.now(),
            description: taskDescription
        };

    tasks.push(newTask);
    }

    description.value = "";
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task.description;
        taskList.appendChild(li);
    });
}

});
