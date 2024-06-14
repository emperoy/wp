function isPrime(n){
    if(n<=1){
        return false;
    }
    for(var i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

function sumPrime(n){
    var sum=0;
    for(var j=1;j<=n;j++){
        if(isPrime(j))
            sum = sum + j;
        
    }
    return sum;
}
var result = sumPrime(5);
console.log("sum=",result);
