const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];


function saveTodos(){
    //JSON.stringify -> save value as a string
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    //change the text of the span
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    //change the text of the button
    button.innerText = "X";
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //text inside the todos array
    todos.push(newTodoObj);
    //paint on the screen
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handelTodoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }


//turn string into array
 const savedTodos = localStorage.getItem(TODOS_KEY);

 if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);

    todos = parsedTodos;
    //execute one function for each item on the array
    //parsedTodos.forEach((item) => console.log("this is the turn of",item));
    parsedTodos.forEach(paintTodo);
 }