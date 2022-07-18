function calcDistance(xA, yA, xB, yB){
    let xDiff = xA - xB;
    let yDiff = yA - yB;

    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

let distance = calcDistance(1, 1, 3, 1)
console.log(distance)

/***
 * This function calculates the distance between 2 points.
 ***/