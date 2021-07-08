const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*quotes.length)];

// jS -> HTML 추가
const bgImage = document.createElement("img"); 
bgImage.src = `img/${chosenImage}`;
// image를 body 내에 추가
document.body.appendChild(bgImage);