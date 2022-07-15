let arr = [1, 2, 3, 4, 5]
let max = 0
let min = 0

for(let i of arr){
    min = Math.min(...arr)
    max = Math.max(...arr)
}

console.log(min)
console.log(max)

