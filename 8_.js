// Write a function that capitalizes the first letter of each word in a string.

function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word =
            words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result.push(word);
    }
    return result.join(" ");
}

// Example
console.log(capitalizeWords("hello world")); // Hello World
