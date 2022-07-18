function askTvSerie(){
    let mySerie = {
        name : prompt("What's the name of the serie ?"),
        year : prompt("What's the year of the serie ?"),
        cast : []
    }
    let choose = true;
    while(choose){
        let useradd = prompt("Enter cast members names");
        choose = useradd.length !== 0;
        if(choose){
            mySerie.cast.push(useradd);
        }
    }
    return mySerie
}

console.log(JSON.stringify(askTvSerie()));