const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
  li.remove();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const button = document.createElement("button");
  const span = document.createElement("span");
  button.addEventListener("click", deleteTodo);
  span.innerText = newTodoObj.text;
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
