class Circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface(){
        return this.radius * this.radius * Math.PI;
    }
}

let circle1 = new Circle(12, 24, 2);
circle1.move(1, 0);
console.log(`x : ${circle1.xPos}\ny : ${circle1.yPos}\nsurface : ${circle1.surface}`)