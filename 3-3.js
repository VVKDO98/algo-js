let arr = [1, 2, 3, 4, 5];
let arrCopy =[];
let arrFull = [...arr];

for(let i of arr){
    arrCopy.push(i)
}
console.log(arr);
console.log(arrCopy);
console.log(arrFull);