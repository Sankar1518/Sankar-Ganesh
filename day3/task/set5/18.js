function findGreatest(a,b,c){
    if(a>=b && a>=c){
        return a
    }else if (b>=1 && b>=3){
        return b
    }else {
        return c
    }
}
let a=5
let b=7
let c=3
let greatest=findGreatest(a,b,c)
console.log("The greatest number " +a + "," +b + ","+c +" :"+ greatest )