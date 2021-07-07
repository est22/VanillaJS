const clock = document.querySelector("hw#clock");

function sayHello() {
    console.log("Hello");
}

setInterval(sayHello,5000); // 시간마다 반복하면서 실행
setTimeout(sayHello,5000); // 시간만큼 기다렸다가 실행
// console에 new Date(); 라고 치면 나온다.
// date.getDay()
// date.getFullYear()
// date.getHours()
// date.getMinutes()
// date.getSeconds()