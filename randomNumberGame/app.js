const loginForm = document.querySelector("#login-form"); // getElementById("login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event){
  event.preventDefault(); // 기본동작 실행 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // hide the form
  const username = loginInput.value; // save info
  greeting.innerText = `Hello ${username}`; // put that name into h1, combine the variables
  greeting.classList.remove(HIDDEN_CLASSNAME);


}

loginButton.addEventListener("submit", onLoginSubmit);
