let todos = [];

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo.text;
    if (todo.completed) {
      listItem.style.textDecoration = "line-through";
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => {
      deleteItem(index);
    };
    const completeButton = document.createElement("button");
    completeButton.innerText = todo.completed ? "Undo" : "Complete";
    completeButton.onclick = () => {
      toggleCompleted(index);
    };
    listItem.appendChild(deleteButton);
    listItem.appendChild(completeButton);
    todoList.appendChild(listItem);
  });
}

function addItem() {
  const input = document.getElementById("todo-input");
  const text = input.value;
  if (text.trim() !== "") {
    todos.push({ text: text, completed: false });
    input.value = "";
    renderTodos();
  }
}

function deleteItem(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

renderTodos();
