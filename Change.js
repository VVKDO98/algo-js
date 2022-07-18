function computeChange(price, moneyHanded){
    if (typeof price === 'number' && typeof moneyHanded === 'number'){
        if (price > 0 && moneyHanded > 0){
            if (moneyHanded < price){
                return []
            } else{
                const moneychange = [50000n, 20000n, 10000n, 5000n, 2000n, 1000n, 500n, 200n, 100n, 50n, 20n, 10n, 5n, 2n, 1n] //BigInt passe tout en nombre entier sans virgule, ici en cents : Objectif, gagner en précision
                let change = BigInt(moneyHanded * 100) - BigInt(price * 100)
                let changeResult = []
                for (let coin of moneychange){
                    while (coin <= change){
                        changeResult.push(Number(coin) / 100);
                        change -= coin;
                    } 
                } 
                return changeResult
            }
        } else {
            throw new Error("Not positive") ;
        }
    } else{
        throw new Error("Not a number") ;
    }
  }

  console.log(computeChange(12.3, 50))// [20, 10, 5, 2, 0.5, 0.2]
  console.log(computeChange(17.41, 20))// [2, 0.5, 0.05, 0.02, 0.02]


