function matrixMul(a,b){
    var i ,j ,k ,c = [];
    for(i=0;i<a.length;i++){
        c[i]=[];
        for(j=0;j<b[0].length;j++){
            c[i][j]=0;
            for(k=0;k<a[0].length;k++){
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return c;
}
console.log(matrixMul([[1,2],[2,3]],[[1,2],[2,3]]));
