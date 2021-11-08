function Reverse(num) {
    let NumStr = "" + num;  //"1234" text
    let ReversedNumStr = NumStr.split(""); // ["1","2""3"]
    let Reversed = ReversedNumStr.reverse() ; //["4","3","2,"1']
    let joined = Reversed.join(""); 
    return +joined ;
}
function palindrome(num) {
    let rev = Reverse(num);
    if(rev === num) {
        return true;
    }else return false;
}
console.log(palindrome(1234321));