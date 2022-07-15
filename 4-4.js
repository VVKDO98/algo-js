let learners = ["Baudson Guillaume",
"Benaccetta Rinaldo",
"Blaevoet Benoit",
"Brigode Xavier",
"Charles Xavier",
"Corda Daniela",
"Denis Anthony",
"Devilers Vincent",
"Elinckx Julien",
"Friquet Lucas",
"Gillard Sophie",
"Kirac Axel",
"Maddouri Hazem",
"Maurcot Dylan",
"Moraes Kamilla",
"Pécher Stéphanie",
"Scourneau Julien",
"Vanvolcksom Doriano",
"Vervoot Eddy",
"Elyahyioui Selim",
"Moussiaux Titouan"]
let n = Number(prompt("Entre un chiffre"))

function pickLearner(inputAr, n){
    if ((n > 0) && (n < inputAr.length)){
        let arrRet = []
        for(let i = 0; i < n; i++){
            arrRet.push(inputAr[Math.floor(Math.random() * inputAr.length)])
        }
        return arrRet
    } else {
        return []
    }
} 

console.log(pickLearner(learners, n))