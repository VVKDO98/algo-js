let min = prompt("Enter the first number")
let max = prompt("Enter the second number")
let current = prompt("Enter the third number")

if ((current >= min) && (current <= max)){
    console.log(current)
} else if (min > max){
    console.log("You doesn't understand anything")
} else{
    console.error("Humhum now way")
}