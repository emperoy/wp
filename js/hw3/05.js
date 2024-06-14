function vectorAdd(a,b){
    var c =[];
    for(var i=0;i<a.length;i++){
    c[i] = a[i] + b[i];
    }
    return c;
}
console.log(vectorAdd([1,2],[2,3]));
