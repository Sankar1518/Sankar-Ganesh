function findGreatest(a,b){
    if(a>b){
        return a
    } else{
        return b
    }
}
let num1=10
let num2=20
let greatest = findGreatest(num1,num2)
console.log("The greatest number between " +num1 +" and "+num2 +" : "+(greatest))