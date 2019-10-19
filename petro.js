function Petro(xpetro, ypetro) {
    this.xpetro = xpetro;
    this.ypetro = ypetro;
    this.speedpetro = 3;
    this.movePetro = function (car) {
        this.ypetro += this.speedpetro;
        // if (this.xpetro > car.xcar && this.xpetro < (car.xcar + 70) && (this.ypetro + 28) > car.ycar && this.ypetro < (car.ycar + 90)) {
        //     petroCar = 500;
        //     arrPetro.shift();
        //     count += 50;
        // }
    }
}