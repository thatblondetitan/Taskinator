var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

/* create task handler code added below */

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

/* end task handler code */

buttonEl.addEventListener("click", createTaskHandler);

var buttonEl = document.querySelector("#save-task");
console.log(buttonEl)