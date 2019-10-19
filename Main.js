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
let gamelose = false;
let count = 0;
let petroCar = 500;
let lv = 0;
let arrMove = [];

function start() {
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
        speedObs += 0.03;
    }
    // vẽ petro
    myCar.eatPetro();
    for (j = 0; j < arrPetro.length; j++) {
        arrPetro[j].movePetro(myCar);
        ctx.drawImage(petro, arrPetro[j].xpetro, arrPetro[j].ypetro, 30, 30);
    }

    // vẽ điểm
    ctx.fillStyle = "blue";
    ctx.font = "15px Arial";
    ctx.fillText('YOUR SCORE: ' + count, 630, 50);
    // vẽ petro
    petroCar--;
    ctx.font = "15px Arial";
    ctx.fillText('YOUR PETRO: ' + petroCar, 30, 50);
    if (petroCar === 0) {
        gamelose = true;
    }
    if (arrMove[37] && myCar.xcar > 170) {
        myCar.xcar -= myCar.speedCar;
    }
    if (arrMove[39] && myCar.xcar < 530) {
        myCar.xcar += myCar.speedCar;
    }
    if (arrMove[38] && myCar.ycar > 0) {
        myCar.ycar -= myCar.speedCar;
    }
    if (arrMove[40] && myCar.ycar < 500) {
        myCar.ycar += myCar.speedCar;
    }

    if (!gamelose) {
        requestAnimationFrame(start);
    } else {
        // vẽ losegame
        ctx.clearRect(0, 0, 800, 600);
        ctx.fillStyle = "red";
        ctx.font = "50px Arial";
        ctx.fillText("YOUR SCORE: " + count + "", 140, 290);
    }
}

// tạo mảng Obstacle
function createObstacle() {
    let obstacles = new Obstacle(200 + Math.floor(Math.random() * 10) * 40, 0, true);
    arrObstacle.push(obstacles);

    if (!gamelose) {
        setTimeout(function () {
            createObstacle()
        }, 500)
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

createObstacle();
createPeteo();
start();
if (!gamelose) {
    window.addEventListener('keydown', moveSelectionDown);
    window.addEventListener('keyup', moveSelectionUp);
}