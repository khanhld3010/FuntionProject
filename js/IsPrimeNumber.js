let cnt = 1
while (cnt<=10000){
    if (isPrimeNumber(cnt)){
        document.write(cnt + " ");
    }
    cnt++
}


function isPrimeNumber(number){
    if (number < 2){
        return false;
    }
    if (number === 2){
        return true;
    }
    if (number  === 3){
        return true
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }return true;
}

