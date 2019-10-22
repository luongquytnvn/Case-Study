let speedObs = 4;
function Obstacle(xobstacle, yobstacle) {
    this.xobstacle = xobstacle;
    this.yobstacle = yobstacle;
    this.status = true;
    this.speedObstacle = speedObs;
    this.moveObstacle = function (car) {
        this.yobstacle += this.speedObstacle;
        if (this.xobstacle > car.xcar && this.xobstacle < (car.xcar + 70) && (this.yobstacle + 28) > car.ycar && this.yobstacle < (car.ycar + 90)) {
            gamelose = true;
        }

    }
}