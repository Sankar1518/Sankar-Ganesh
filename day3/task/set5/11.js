function printNumbersDivisibleBy5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            console.log(arr[i])
        }
    }
}
let numbers = [10, 25, 6, 15, 30, 12, 7, 20]
console.log("Numbers divisible by 5:")
printNumbersDivisibleBy5(numbers)