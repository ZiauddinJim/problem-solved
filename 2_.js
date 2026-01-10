// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Example
console.log(countVowels("programming")); // 3
