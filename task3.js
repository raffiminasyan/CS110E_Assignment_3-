function Reverse(num) {
    let NumStr = "" + num;  //"1234" text
    let ReversedNumStr = NumStr.split(""); // ["1","2""3"]
    let Reversed = ReversedNumStr.reverse() ; //["4","3","2,"1']
    let joined = Reversed.join(""); 
    return +joined ;

}
console.log(Reverse(1234)) ;