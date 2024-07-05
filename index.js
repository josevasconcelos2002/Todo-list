document.addEventListener("DOMContentLoaded", function() {

    const description = document.querySelector("input");
    const taskList = document.querySelector(".tasks");
    const addTaskButton = document.getElementById("add-task");
    const completedTasks = document.querySelector(".completed");
    let i = 0;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];;

    addTaskButton.addEventListener("click", function() {
        const taskDescription = description.value.trim();
        if(taskDescription){
            const newTask = {
                id: i++,
                description: taskDescription,
                date: formatDate(Date.now()),
                completed: false
            };

        tasks.push(newTask);
        }

        description.value = "";
        renderTasks();
        saveTasks();
    });

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

        function removeTask(taskId) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        renderTasks();
    }

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach(function(task) {
            const div = document.createElement("div");
            const li = document.createElement("li");
            const p = document.createElement("p");
            const input = document.createElement("input");
            div.appendChild(li);
            div.appendChild(p);
            div.appendChild(input);
            task.id = tasks.indexOf(task);
            li.textContent = task.id + ".  " + task.description;
            p.textContent = task.date;
            input.type = "checkbox";
            input.className = "completed";
            input.checked = task.completed;

            taskList.appendChild(div);
            input.addEventListener("click", function() {
                task.completed = input.checked;
                console.log(task);
                console.log(tasks);
                taskList.removeChild(div);
                window.alert(`Task "${task.description}" has been completed`);
                tasks.pop(task);
                removeTask(task.id);
                console.log(tasks);
            })
            console.log(tasks);
        });
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    renderTasks();

});
