let letters = [];
let word = "racecar";
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

// Test case:
console.log(reverseWord);
