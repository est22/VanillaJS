const boxes = document.querySelectorAll(".parent div");
const score_board = document.querySelector("#score_board");
const miss_board = document.querySelector("#miss_board");
const flags = Array(9);
flags.fill(0);
const correct = new Map(
    [
        ["q",0], // 뒤 숫자는 배열이니까 0부터 시작
        ["w",1],
        ["e",2],
        ["a",3],
        ["s",4],
        ["d",5],
        ["z",6],
        ["x",7],
        ["c",8],
    ]); // QWE,ASD,ZXC -> 012,345,678

let score = 0;
let miss = 0;

function draw() {
    for(let i = 0; i < 9; i++){
        if (flags[i] === 1) {
            boxes[i].style.backgroundColor = "blue";
        } else {
            boxes[i].style.backgroundColor = "white";
        }
    }

    score_board.innerText = `점수: ${score}`;
    miss_board.innerText = `놓친 갯수: ${miss}`;
}

setInterval(function() {
    for (let i = 0; i < 9; i++){
        if (flags[i] === 1) miss++;
        flags[i] = 0;
    }
    const rand1 = Math.floor(Math.random()*9);
    const rand2 = Math.floor(Math.random()*9);
    const rand3 = Math.floor(Math.random()*9);
    flags[rand1] = 1;
    flags[rand2] = 1;
    flags[rand3] = 1;

    draw();

},1500);

window.addEventListener("keydown",function(e) {
    const keytype = e.key;
    // console.log(keytype);
    const idx = correct.get(keytype); // 있으면 값이 나오고, 없으면 Undefined

    if (idx === undefined) return;
    if (flags[idx] === 1) {
        score += 1;
        flags[idx] = 0;
        draw();
    }
});