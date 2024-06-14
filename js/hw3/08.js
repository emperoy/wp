function daysInYear(n){
    if(n%400==0){
    return 366;
    }
    else if(n%4==0&&n%100!=0){
        return 366;
    }
    return 365;
}
console.log("daysInYear(1997)=>"+daysInYear(1997));
