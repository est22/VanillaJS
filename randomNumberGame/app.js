
const h1 = document.querySelector("h1");

function handleTitleClick(){
  // toggle  : class name 존재 확인 후 있으면 제거, 없으면 추가해줌
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);