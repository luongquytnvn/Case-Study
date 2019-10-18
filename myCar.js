function MyCar(xcar, ycar) {
    this.xcar = xcar;
    this.ycar = ycar;
    this.status = true;
    this.speedCar = 10;
    this.moveLeft = function () {
        if (this.xcar > 180)
            this.xcar -= this.speedCar;
    };
    this.moveRight = function () {
        if (this.xcar < 520)
            this.xcar += this.speedCar;
   };
}