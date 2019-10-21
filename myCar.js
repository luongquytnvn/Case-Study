let audio1 = new  Audio('./sound/sound1.mp3');
let audio2 = new  Audio('./sound/sound2.mp3');
function MyCar(xcar, ycar) {
    this.xcar = xcar;
    this.ycar = ycar;
    this.status = true;
    this.speedCar = 5;
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
    }
}