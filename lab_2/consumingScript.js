// ConsumingScript.js

//question_1
// Test the toPascalCase function
console.log(toPascalCase('the quick brown fox')); // Output: The Quick Brown Fox
console.log(toPascalCase('JOHN DOE')); // Output: John Doe
console.log(toPascalCase('hello world')); // Output: Hello World



const inputSentence = "Web Development Tutorial";
const result = getLongestWord(inputSentence);

console.log("The longest word is:", result);  

//question_2

function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}


//question_3


const inputString = "javascript";
const sortedString = sortStringAlphabetically(inputString);

console.log("Sorted string alphabetically:", sortedString);  // Output => aacijprstv


//question_4


const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

const commonElements = getCommonElements(array1, array2);

console.log("Common elements:", commonElements);  // Output: [2, 3]



//question_5


const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const uniqueNumbers = removeDuplicates(numbersWithDuplicates);

console.log("Array without duplicates:", uniqueNumbers);  // Output: [1, 2, 3, 4, 5]

