function printNumbersExcludingMultiplesOf5() {
    for (let i = 1; i <= 25; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        }
    }
}
printNumbersExcludingMultiplesOf5();