function inverse(number) {
    for(let j = 0; j<= number.lenght-1; j++) {
        if(number[j]===0) {
            number[j]=1
        }else
        number[j]=0
    }
    return number.join("");
}
console.log(inverse([1,0]));