function checkVowelOrConsonant(char) {
    let lowerChar = char.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u']

    if (vowels.includes(lowerChar)) {
        return `${char} is a vowel.`
    } else {
        return `${char} is a consonant.`
    }
}
let char1 = 'A'
let char2 = 'w'
console.log(checkVowelOrConsonant(char1))
console.log(checkVowelOrConsonant(char2))
