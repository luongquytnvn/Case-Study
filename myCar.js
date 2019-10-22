let audio1 = new  Audio('./sound/sound1.mp3');
let audio2 = new  Audio('./sound/sound2.mp3');
function MyCar(xcar, ycar) {
    this.xcar = xcar;
    this.ycar = ycar;
    this.status = true;
    this.speedCar = 5;
    // bơm xăng
    this.eatPetro = function () {
        for (i = 0; i < arrPetro.length; i++) {
            if (arrPetro[i].xpetro > this.xcar && arrPetro[i].xpetro < (this.xcar + 70) && (arrPetro[i].ypetro + 28) > this.ycar && arrPetro[i].ypetro < (this.ycar + 90)) {
                for (j = i; j < arrPetro.length; j++) {
                    arrPetro[j] = arrPetro[j+1];
                    arrPetro.pop();
                }
                petroCar = 500;
                count += 50;
            }
        }
    };
    // di chuyển xe
    this.moveCar = function () {
        if (arrMove[37] && this.xcar > 170) {
            this.xcar -= this.speedCar;
        }
        if (arrMove[39] && myCar.xcar < 530) {
            this.xcar += this.speedCar;
        }
        if (arrMove[38] && myCar.ycar > 0) {
            this.ycar -= this.speedCar;
        }
        if (arrMove[40] && myCar.ycar < 500) {
            this.ycar += this.speedCar;
        }
    }
}