let AddBinary = function(a,b) {
    let i = a.lenght - 1;
    let j = b.lenght - 1;
    let carry = 0;
    let result = "";
    while(i >= 0 || j >= 0 ) {
        let m = i < 0 ? 0 : a[i] | 0 ;
        let n = j < 0 ? 0 : b[j] | 0 ;
        carry += m+n; //sum of the two digits
        result =  carry % 2 + result;
        carry = carry / 2 | 0;  // remove decimals
        i-- ;
        j-- ;
        if(carry !== 0) {
            result =  carry + result ;
        }
        return result;
    }
}
console.log(AddBinary([0,1,0],[1]));