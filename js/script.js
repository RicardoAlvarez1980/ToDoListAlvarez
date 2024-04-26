// Función para agregar una tarea
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Por favor ingrese una tarea");
    return;
  }
  
  var taskList = document.getElementById("taskList");
  var taskItem = document.createElement("li");
  taskItem.className = "list-group-item";
  
  var taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.className = "mr-3";
  taskCheck.onclick = function(event) {
    event.stopPropagation();
    toggleTaskDone(taskTextSpan);
  };
  
  var taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  taskTextSpan.className = "task-text";
  
  var taskEditBtn = document.createElement("button");
  taskEditBtn.textContent = "Editar";
  taskEditBtn.className = "btn btn-warning btn-sm btn-edit";
  taskEditBtn.onclick = function(event) {
    event.stopPropagation();
    editTask(taskTextSpan);
  };
  
  var taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Eliminar";
  taskDeleteBtn.className = "btn btn-danger btn-sm";
  taskDeleteBtn.onclick = function(event) {
    event.stopPropagation();
    deleteTask(taskItem);
  };
  
  taskItem.appendChild(taskCheck);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(taskEditBtn);
  taskItem.appendChild(taskDeleteBtn);
  
  taskList.appendChild(taskItem);
  
  taskInput.value = "";
}

// Función para marcar/desmarcar una tarea como realizada
function toggleTaskDone(taskTextSpan) {
  if (taskTextSpan.classList.contains("task-done")) {
    taskTextSpan.classList.remove("task-done");
  } else {
    taskTextSpan.classList.add("task-done");
  }
}

// Función para eliminar una tarea
function deleteTask(taskItem) {
  taskItem.remove();
}

// Función para editar una tarea
function editTask(taskTextSpan) {
  var newText = prompt("Editar tarea:", taskTextSpan.textContent);
  
  if (newText !== null && newText.trim() !== "") {
    taskTextSpan.textContent = newText;
  }
}
