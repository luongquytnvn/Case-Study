let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let myCar = new MyCar(300, 500);
let stress = [];
stress[0] = document.getElementById('stress1');
stress[1] = document.getElementById('stress2');
stress[2] = document.getElementById('stress3');
let obstacle = document.getElementById('obstacle');
let petro = document.getElementById('petro');
let car = document.getElementById('car');
let arrObstacle = [];
let arrPetro = [];
var gamelose = false;
let count = 0;
let petroCar = 500;
let lv = 0;
if(isNaN(localStorage.highScore)) {
    localStorage.highScore = 0;
}
let arrMove = [];
ctx.beginPath();
ctx.drawImage(stress1, 200, 0, 400, 600);
ctx.drawImage(car, myCar.xcar, myCar.ycar, 100, 100);
function start() {
    let highscore = localStorage.getItem('highScore');
    // vẽ đường
    ctx.clearRect(0, 0, 800, 600);
    ctx.beginPath();
    ctx.drawImage(stress[Math.floor(Math.random() * 5 / 3)], 200, 0, 400, 600);
    ctx.drawImage(car, myCar.xcar, myCar.ycar, 100, 100);

    // vẽ obstacle
    for (i = 0; i < arrObstacle.length; i++) {
        arrObstacle[i].moveObstacle(myCar);
        ctx.drawImage(obstacle, arrObstacle[i].xobstacle, arrObstacle[i].yobstacle, 30, 30);
    }
    if (arrObstacle[0].yobstacle > 600) {
        arrObstacle.shift();
        count++;
        lv++;
    }
    // tăng lv
    if (lv % 20 === 0 && lv !== 0) {
        speedObs += 0.05;
    }
    // vẽ petro
    myCar.eatPetro();
    for (j = 0; j < arrPetro.length; j++) {
        arrPetro[j].movePetro();
        ctx.drawImage(petro, arrPetro[j].xpetro, arrPetro[j].ypetro, 30, 30);
    }

    // vẽ điểm
    ctx.fillStyle = "cadetblue";
    ctx.font = "15px Arial";
    ctx.fillText('YOUR SCORE: ' + count, 30, 200);
    ctx.fillText('HIGH SCORE: ' + highscore, 30, 100);
    // vẽ petro
    petroCar--;
    ctx.font = "15px Arial";
    ctx.fillText('YOUR PETRO: ' + petroCar, 30, 300);
    if (petroCar === 0) {
        gamelose = true;
    }
    myCar.moveCar();
    audio2.play();
    if (!gamelose) {
        requestAnimationFrame(start);
    } else {
        // vẽ losegame
        audio1.play();
        ctx.clearRect(200, 0, 400, 600);
        ctx.font = "40px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("YOU LOSE", 300, 300);
        ctx.strokeRect(200, 0, 400, 600);
        if (count > localStorage.highScore) {
            localStorage.setItem('highScore', count);
        }
    }
}

// tạo mảng Obstacle
function createObstacle() {
    let obstacles = new Obstacle(200 + Math.floor(Math.random() * 10) * 40, 0, true);
    arrObstacle.push(obstacles);

    if (!gamelose) {
        setTimeout(function () {
            createObstacle()
        }, 450)
    }
}

//tạo mảng xăng
function createPeteo() {
    let petro = new Petro(200 + Math.floor(Math.random() * 10) * 40, 0, true);
    arrPetro.push(petro);
    if (arrPetro[0].ypetro > 600) {
        arrPetro.shift();
    }
    if (!gamelose) {
        setTimeout(function () {
            createPeteo()
        }, 2000)
    }
}

// sự kiện bàn phím
function moveSelectionDown(evt) {
    arrMove[evt.keyCode] = true;
}

function moveSelectionUp(evt) {
    arrMove[evt.keyCode] = false;
}

function clickStart() {
    gamelose = false;
    arrObstacle = [];
    arrPetro = [];
    count = 0;
    petroCar = 500;
    lv = 0;
    speedObs = 4;
    createObstacle();
    createPeteo();
    start();
}

if (!gamelose) {
    window.addEventListener('keydown', moveSelectionDown);
    window.addEventListener('keyup', moveSelectionUp);
}