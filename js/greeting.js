const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const topBar = document.querySelector(".top-bar");
const bottomBar = document.querySelector(".bottom-bar");
const clock = document.querySelector(".clock");
const skateboard = document.querySelector(".skateboard");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showMainScreen();
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  if (5 < parseInt(date.getHours()) && parseInt(date.getHours()) < 12) {
    greeting.innerText = `Good Morning, ${username}`;
  } else if (12 <= parseInt(date.getHours()) && parseInt(date.getHours()) < 6) {
    greeting.innerText = `Good Afternoon, ${username}`;
  } else {
    greeting.innerText = `Good Evening, ${username}`;
  }
}

function showMainScreen() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  topBar.classList.remove(HIDDEN_CLASSNAME);
  bottomBar.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  skateboard.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  showMainScreen();
}
