function separateNumber(arr) {
    let positiveNumbers=[]
    let negativeNumbers=[]
    arr.forEach(num => {
        if(num > 0){
            positive.push(num)
        } else{
            negative.push(num)
        }
    })
    return {
        positive :positiveNumbers,
        negative :negativeNumbers
    }
}
let x=[-1,5,-7,54,0,-15,-12,9]
let separated =separateNumber(x)
console.log("Positive numbers :", separated.positiveNumbers)
console.log("Negative number :", separated.positiveNumbers)