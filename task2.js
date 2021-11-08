function isPrime(num) {
    if(num=== 2 ) {
        return true;
    }
    for(let i = 2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let array = [] ;
function FindingPrimes(number1,number2) {
    for(let i = number1; i<= number2; i++) {
        if(isPrime(i)){
            array.push(i)
        }
    }
    return array;
}
console.log(FindingPrimes(34,45));