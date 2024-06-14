function matrixAdd(a, b){
    var i, j, c = [];
    for (i=0; i<a.length; i++){
        c[i] = [];
        for (j=0; j<a[i].length; j++){
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    return c;
}
console.log(matrixAdd([[1,2],[2,3]],[[1,2],[2,3]]));
