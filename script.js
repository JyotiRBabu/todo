const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

addTaskButton.addEventListener("click", function() {
  const task = newTaskInput.value;
  todoList.innerHTML += `<li>${task}</li>`;
  newTaskInput.value = "";
});

todoList.addEventListener("click", function(event) {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
});