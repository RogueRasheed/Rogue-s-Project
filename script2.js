function primeNumb(p){

    for(var i = 2; i < p; i++){
    if(p % i === 0)
    return true;
    }

    for(var i = 3; i < p; i++){
    if (p % i === 0)
    return false;
    }
}

console.log(primeNumb(21));