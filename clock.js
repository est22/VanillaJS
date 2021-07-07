const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 웹사이트가 실행되자마자 실행
setInterval(getClock,1000); // 시간마다 반복하면서 실행
