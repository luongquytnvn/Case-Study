function Petro(xpetro, ypetro) {
    this.xpetro = xpetro;
    this.ypetro = ypetro;
    this.speedpetro = 3;
    this.movePetro = function (car) {
        this.ypetro += this.speedpetro;
    }
}