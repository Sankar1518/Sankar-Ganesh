function countEvenOddNumbers(start, end) {
    let evenCount = 0
    let oddCount = 0
    for (let num = start; num <= end; num++) {
        if (num % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }
    return { evenCount, oddCount }
}
let result = countEvenOddNumbers(10, 55)
console.log("Count of even numbers:", result.evenCount)
console.log("Count of odd numbers:", result.oddCount)
