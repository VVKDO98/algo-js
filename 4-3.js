let min = 1
let max = 10

function rand10(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiRand(){
    let n = Number(prompt("Entre un chiffre"))
    let arr = []
    for( let i = 0; i < n; i++){
        arr.push(rand10(1, 10))
    }
    return arr
}

console.log(multiRand())