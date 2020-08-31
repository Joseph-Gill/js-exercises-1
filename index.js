// Create a function that returns true when the argument passed is a string and false otherwise.

// Looks at typeof argument, returns true for a string, false for anything else
const isString = string => typeof string === 'string'

// console.log(isString('hello')); // => true
// console.log(isString(['hello'])); // => false
// console.log(isString('this is a long sentence')); // => true
// console.log(isString({ a: 2 })); // => false


// Create a function that returns true when the parameter passed is an array and false otherwise.

// Returns boolean of Array.isArray() method
const isArray = array => Array.isArray(array)

// console.log(isArray('hello')); // => false
// console.log(isArray(['hello'])); // => true
// console.log(isArray([2, {}, 10])); // => true
// console.log(isArray({ a: 2 })); // => false

// Create a function that checks whether all the element of an array are the same datatype
// For example, whether they are all String or all number.

const areSameType = array => {
    // Checks if first index in the Array is of type Array
    if (Array.isArray(array[0])) {
        // Iterates over all indices of the Array, returning false if any are not of type Array
        for (i in array) {
            if (!Array.isArray(array[i])) {
                return false
            }
        }
    }
    // Saves the data type of the first index of the Array
    let type = typeof array[0]
    // Iterates over all indices of the Array, returning false if any are not of the same type as dataType
    for (i in array) {
        if (typeof array[i] !== type) {
            return false
        }
    }
    return true
};

// console.log(areSameType(['hello', 'world', 'long sentence'])) // => true
// console.log(areSameType([1, 2, 9, 10])) // => true
// console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
// console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true


// Take 2 strings a and b including only letters from a to z. Return a new string that only
// contains each letter from a and/or b once and that is sorted.

const longest = (a, b) => {
    // Will contain the unique letters from the two parameters
    let result = '';
    // Combines the strings, changes the string to lower case, splits to an array, sorts the array, then iterates
    // over the array pushing any unique character to the result variable
    (a + b).toLowerCase().split('').sort().forEach(index => !result.includes(index) ? result += index : null);
    return result;
}

// console.log(longest('abcccaa', 'acddddffzzz')) // => 'abcdfz'
// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')) // => 'abcdefklmopqwxy'
// console.log(longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz')) // => 'abcdefghijklmnopqrstuvwxyz'


// Take a random number and convert it to a reverse-sorted array of digits.

// Converts number to a string, then splits to an array, sorts the array in reverse order
const convert = num => num.toString().split('').sort((a, b) => b - a)

// console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
// console.log(convert(324)) // => [4, 3, 2]


// You are given an array of strings (authors). Count the number of times each string occurs
// and keep track of it in a dict.

let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

const countAuthors = array => {
    // Will contain the author: (number of times appeared) after iteration
    let result = {}
    /* Iterates over the array, checking if the index is in countObj, adding the index if not there, incrementing by 1
    if there already */
    for (i in authors) {
        Object.keys(result).includes(array[i]) ? result[array[i]] ++ : result[array[i]] = 1
    }
    return result
}

// console.log(countAuthors(authors))
/*
 When you call your function, this is the result you should get:
{
   kerouac: 2,
   fante: 3,
   buk: 2,
   hemingway: 1,
   hornby: 1
 }
*/


// You will be given a string featuring a cat ‘C’ and a mouse ‘m’. The rest of the string
// will be made up of ‘.’. You need to find out if the cat can catch the mouse from it’s
// current position. The cat can jump three characters.

// Returns the comparison of the indexes of the mouse to the cat
const isCaught = (catString) => (catString.indexOf('m') - catString.indexOf('C')) - 3 <= 0;


// console.log(isCaught('C.....m')) // => false
// console.log(isCaught('C..m')) // => true
// console.log(isCaught('..C..m')) // => true


// Write a function to balance who has overpaid and should be compensated or who has paid less.
// The function should take one parameter: an object which represents the members of the group
// and the amount spent by each. The function should return an object with the same names,
// showing how much money the members should pay or receive. Negative number means they should
// receive money.

const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

const splitTheBill = obj => {
    // Will contain the member: (amount over/under paid) after iteration
    let result = {}
    // Contains the payments made by all members
    let payments = Object.values(obj)
    // Figures out what the average of all bills
    let individualBill = payments.reduce((a, b) => a + b) / payments.length
    // Iterates over the argument, adding each member to resultObj, then calculates what they over/under paid
    for (const [key, value] of Object.entries(obj)) {
        result[key] = individualBill - value
    }
    return result
}

// console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }


// Write a function that takes two integers. The first one will be the base b and the second
// one n will be the exponent. The function should return the value of b raised to the power n.
// Try to solve it with recursion. You can try it with a while loop first and then try to
// implement the recursive approach.

const exp = (num, pow) => {
    // Handles num to power 0 being 1
    if (pow === 0) {
        return 1
    }
    // Base case for recursion to build on
    if (pow === 1) {
        return num;
    }
    return num * exp(num, pow - 1);
}

// console.log(exp(5, 3)); // => 125
// console.log(exp(2, 4)); // => 16
// console.log(exp(5, 1)); // => 5
// console.log(exp(6, 0)); // => 1


// You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant
// (or consonant cluster) of an English word, moves it to the end of the word and suffixes an “ay”. If a word begins with
// a vowel you just add “way” to the end. It might not be obvious but you need to remove all the consonants up to the first
// vowel in case the word does not start with a vowel.

const translatePigLatin = (engString) => {
    // Used to test if a character is a vowel
    let testString = 'aeiou';
    // Handles if the word starts with a vowel, returning it with 'way' added to the end
    if (testString.includes(engString[0])) {
        return engString + 'way';
    }
    // Will contain all characters up to the first vowel during iteration
    let endOfWord = [];
    // Will contain all characters once a vowel is reached
    let pigWord = [];
    // Iterates over the string, adding letters to endOfWord till the first vowel is reached, then adding the rest of the
    // word to pigWord
    for (i in engString.split('')) {
        if (testString.includes(engString[i])) {
            pigWord.push(engString.slice(i));
            break;
        } else {
            endOfWord.push(engString[i]);
        }
    }
    // Combines both halves of the word together, adding 'ay' to the end
    return pigWord.join('') + endOfWord.join('') + 'ay';
};

// console.log(translatePigLatin("glove")); // oveglay
// console.log(translatePigLatin("pig")); // igpay
// console.log(translatePigLatin("air")); // airway


// You will create a program that takes a sentence, then search for a word in it and replaces
// it for a new one while preserving the uppercase if there is one. For example:

const myReplace = (stringToCheck, wordRemove, wordReplace) => {
    // Contains the string to check split into an array for iterations
    let arrayToCheck = stringToCheck.split(' ');
    // Contains the word replacing with, held as an array to allow the changing of it to upper or lower case
    let wordReplaceArray = wordReplace.split('');
    // Iterates over the array of words, checking to see if any match the word to remove
    for (i in arrayToCheck){
        if (arrayToCheck[i].toLowerCase() === wordRemove.toLowerCase()) {
            // Handles if the first letter of the word to be replaced is uppercase
            if (arrayToCheck[i][0] === arrayToCheck[i][0].toUpperCase()) {
                wordReplaceArray.splice(0, 1, wordReplaceArray[0].toUpperCase());
                arrayToCheck.splice(i, 1, wordReplaceArray.join(''));
            // Handles if the first letter of the word to be replace is lowercase
            } else {
                wordReplaceArray.splice(0, 1, wordReplaceArray[0].toLowerCase());
                arrayToCheck.splice(i, 1, wordReplaceArray.join(''));
            }
        }
    }
    return arrayToCheck.join(' ');
}

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"
// console.log(myReplace("He is sleeping on the couch", "Sleeping", "sitting")); // "He is sitting on the couch"
// console.log(myReplace("He is sleeping on the couch", "Sleeping", "Sitting")); // "He is sitting on the couch"


// This problem is very straight forward, you will get a string that will represent a sentence in binary code,
// and you need to translate that into words. There is no direct way to do this so you will have to translate twice.

const toEnglish = (binString) => {
    // Array that will contain the final translation, joined together during return
    let result = [];
    // Array that will contain the number values after translation from binary for iteration
    let numArray = [];
    // Array that contains the string of binaries split to allow for iteration on the first translation
    let binArray = binString.split(' ');
    // Iteration translating all binary values to number values
    for (i in binArray) {
        numArray.push(parseInt(binArray[i],2));
    }
    // Iteration translating all number values to letter values
    for (i in numArray) {
        result.push(String.fromCharCode(numArray[i]));
    }
    return result.join('');
};

// console.log(toEnglish("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111" )); // Aren't bonfires fun!?


// Check if a string (first argument, str) ends with the given target string (second argument, target). Please do
// not use .endsWith() method. Try to use one of the JavaScript substring methods instead.

const confirmEnding = (stringToCheck, checkEnding) => {
    // Checks if the string is shorter then the ending to check and can't possibly match
    if (stringToCheck.length < checkEnding.length) {
        return false;
    }
    // Creates an array of characters from the end of the string to check the same length as the ending to check against
    let endToCheck = stringToCheck.split('').splice(stringToCheck.length - checkEnding.length);
    // Checks the end of the string to check against the ending string to see if they match
    if (endToCheck.join('') === checkEnding) {
        return true;
    } else {
        return false;
    }
};

// console.log(confirmEnding("Open sesame", "same")); // true
// console.log(confirmEnding("ame", "same")); // false


// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In
// other words, return the symmetric difference of the two arrays.

const diffArray = (arr1, arr2) => {
    // Array that will contain the unique values between each array after iteration
    result = [];
    // Iterates over the first array, checking if the second array includes the value, if not it is pushed to result
    for (i in arr1) {
        (!arr2.includes(arr1[i])) ? result.push(arr1[i]) : null;
    }
    // Iterates over the second array, checking if the first array includes the value, if not it is pushed to result
    for (i in arr2) {
        (!arr1.includes(arr2[i])) ? result.push(arr2[i]) : null;
    }
    return result;
};

// console.log(diffArray(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )); // [ 'pink wool', 'diorite' ]