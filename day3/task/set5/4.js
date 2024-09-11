function calculateFactorial(num){
    let factorial=1
    if(num===0){
        return1
    }
    else{
        for(let i=1;i<=num;i++){
            factorial*=i
        }
        return factorial
    }
}
let number=5
let result=calculateFactorial(number)
console.log("The factorial of " + "is "(number) +(result))