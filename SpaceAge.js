function spaceAge(seconds, planet){
    let earthYear = seconds / (365.25 * 24 * 60 * 60);
    switch(planet){
        case 'Mercury' : 
            return earthYear * 0.2408467;
        case 'Venus' : 
            return earthYear * 0.61519726;
        case 'Mars' : 
            return earthYear * 1.8808158;
        case 'Jupiter' : 
            return earthYear * 11.862615;
    }
    return earthYear;
}

let age = prompt("Enter your age")
let ageInSecond = age * (365.25 * 24 * 60 * 60)
let planet = prompt("Enter a planet you want your age on")
console.log(spaceAge(ageInSecond, planet))
