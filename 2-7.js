let n = prompt("Enter a number between 1 and 5")
let result = 0

for (let i = 0; i < n; i++){
    result += Number(prompt("Enter a number"));
}

console.log(result)