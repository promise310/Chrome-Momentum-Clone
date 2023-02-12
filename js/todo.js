const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    //change the text of the span
    span.innerText = newTodo;
    const button = document.createElement("button");
    //change the text of the button
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    //add the span to the li
    li.appendChild(span);
    //add the button to the li
    li.appendChild(button);
    //add li to the todo list
    todoList.appendChild(li);
}

function handelTodoSubmit(event){
    event.preventDefault();
    //coping the current value of the input into a new variable
    const newTodo = todoInput.value;
    todoInput.value = "";
    //text inside the todos array
    todos.push(newTodo);
    //paint on the screen
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handelTodoSubmit);