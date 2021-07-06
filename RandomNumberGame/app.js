const maxRange = document.querySelector("#maxRange input"); // getElementById("login-form")
const userInput = document.querySelector("#userInput input");
const button = document.querySelector("#userInput");
const chose = document.querySelector("#chose");
const result = document.querySelector("#result");

const USER_KEY = "userNumber";  
const MAX_NUMBER = "maxNumber";
const TEMP  = "machineNumber";


function onPlay(event){
    event.preventDefault(); // 기본동작 실행 방지
    const userNumber = userInput.value;
    const maxNumber = maxRange.value;
    localStorage.setItem(USER_KEY, userNumber); 
    localStorage.setItem(MAX_NUMBER, maxNumber); 
    
    comparison(userNumber);
    
}

function comparison(usernumber){
    const randomNumber = Math.round(Math.random() * localStorage.getItem(MAX_NUMBER));
    chose.innerText = `You chose: ${usernumber}, the machine chose: ${randomNumber}.`;
    localStorage.setItem(TEMP,randomNumber);

}


const savedUsernumber = localStorage.getItem(USER_KEY);
const randomNumber = localStorage.getItem(TEMP);

if(savedUsernumber === randomNumber){
    result.innerText= "You won!";
} else {
    result.innerText="You lost!";
    button.addEventListener("submit", onPlay);
    
}