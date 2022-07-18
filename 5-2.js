function askTvSerie(){
    let mySerie = {
        name : prompt("What's the name of the serie ?"),
        year : prompt("What's the year of the serie ?"),
        castMembers : []
    }
    let choose = true;
    while(choose){
        let useradd = prompt("Enter cast members names");
        choose = useradd.length !== 0;
        if(choose){
            mySerie.castMembers.push(useradd);
        }
    }
    return mySerie
}

//console.log(JSON.stringify(askTvSerie()));

function randomizeCast(tvSerie){
    let cast = tvSerie.castMembers;
    for (let i = 0; i < cast.length; i++){
        let temp = cast[i]
        let rndIndex = Math.floor(Math.random() * cast.length)
        cast[i] = cast[rndIndex]
        cast[rndIndex] = temp
    }
    return cast;
}

console.log(randomizeCast(askTvSerie()))