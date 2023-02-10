//querySelector -> call id from html
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //stop the event refreshing the page
    event.preventDefault();
    //hide the form again
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //save the value of the login input in a variable called userName
    const userName = loginInput.value;
    //save the username on the local storage under the key username
    localStorage.setItem(USERNAME_KEY, userName);
    //call the function
    paintGreetings(userName);
    
}

function paintGreetings(userName){
    //Combinig Strings
    //greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${userName}`;
    //remove the hidden class name title from the greeting title
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//get username from the API local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    //remove the hidden class name from thr html login-form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //addEventListener waiting for submit
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreetings(savedUsername);
}
