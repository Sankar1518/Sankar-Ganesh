function isFirstAndLastEqual(arr) {
    if (arr.length > 0) {
        return arr[0] === arr[arr.length - 1]
    }
}

let list1 = [10, 20, 30, 40, 10]
console.log("Given list:", list1)
console.log("Result:", isFirstAndLastEqual(list1)) 

let list2 = [5, 6, 7, 8, 9]
console.log("Given list:", list2)
console.log("Result:", isFirstAndLastEqual(list2))

