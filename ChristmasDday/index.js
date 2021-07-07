const clockTitle = document.querySelector(".js-clock");

const clock = setInterval(function () {
    const xmas = new Date("December 25 2021 00:00:00 GMT+0900").getTime();
    const now = new Date().getTime();
    const distance = xmas - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    // const hours = String(date.getHours()).padStart(2,"0");
    // const minutes = String(date.getMinutes()).padStart(2,"0");
    // const seconds = String(date.getSeconds()).padStart(2,"0");
    clockTitle.innerText=`${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    
    if (distance < 0) {
        clearInterval(clock);
        clockTitle.innerText=`IT'S D-DAY!!`
    }
    
}, 1000);


