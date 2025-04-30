//question_1

// Function to convert string to Pascal Case
function toPascalCase(fullName) {
    if (typeof fullName !== 'string' || fullName.trim() === '') {
        return 'Invalid input';
    }
    
    return fullName
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


//question_2
function getLongestWord(sentence) {
   
    const words = sentence.split(" ");
    
    
    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    
    return longestWord;
}


//question_3


function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}

//question_4


function getCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}


//question_5

function removeDuplicates(array) {
    return [...new Set(array)];
}


