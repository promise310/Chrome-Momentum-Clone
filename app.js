//querySelector -> call id from html
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    //Combinig Strings
    //greeting.innerText = "Hello " + userName;

    //saving username to local storage
    localStorage.setItem("username", userName);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

loginForm.addEventListener("submit", onLoginSubmit);
