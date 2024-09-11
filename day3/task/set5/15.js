function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
function calculateFactorials(numbers) {
    const results = []
    for (let num of numbers) {
        const fact = factorial(num)
        results.push(fact)
    }
    return results
}
const numbers = [3, 5, 7, 0, 1]
const factorials = calculateFactorials(numbers)

for (let i = 0; i < numbers.length; i++) {
    console.log ("The factorial of " +numbers[i]+" is:" + factorials[i])
}