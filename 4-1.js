let w = Number(prompt("Width"))
let l = Number(prompt("Length"))
/***
 * Une fonction qui prends deux valeurs définies par l'utilisateur.
 ***/
function calcSurface(width, length){
    return width * length;
} 

console.log(calcSurface(w, l))