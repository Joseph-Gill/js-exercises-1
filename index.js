// Create a function that returns true when the argument passed is a string and false otherwise.

const isString = string => typeof string === 'string'

// console.log(isString('hello')); // => true
// console.log(isString(['hello'])); // => false
// console.log(isString('this is a long sentence')); // => true
// console.log(isString({ a: 2 })); // => false

// Create a function that returns true when the parameter passed is an array and false otherwise.

const isArray = array => typeof array === 'object' ? !!array.length : false

// console.log(isArray('hello')); // => false
// console.log(isArray(['hello'])); // => true
// console.log(isArray([2, {}, 10])); // => true
// console.log(isArray({ a: 2 })); // => false

// Create a function that checks whether all the element of an array are the same datatype
// For example, whether they are all String or all number.

const areSameType = array => {
    let type = typeof array[0]
    for (let i = 1; i < array.length; i++) {
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
    let result = []
    for (i in a.split('')) {
        result.includes(a[i]) ? null : result.push(a[i])
    }
    for (i in b.split('')) {
        result.includes(b[i]) ? null : result.push(b[i])
    }
    return result.sort().join('')
}

// console.log(longest('abcccaa', 'acddddffzzz')) // => 'abcdfz'
// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')) // => 'abcdefklmopqwxy'
// console.log(longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz')) // => 'abcdefghijklmnopqrstuvwxyz'

// Take a random number and convert it to a reverse-sorted array of digits.

const convert = num => num.toString().split('').sort((a, b) => b - a)

// console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
// console.log(convert(324)) // => [4, 3, 2]

// You are given an array of strings (authors). Count the number of times each string occurs
// and keep track of it in a dict.

let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

const countAuthors = array => {
    let result = {}
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

const isCaught = string => {
    let cIndex = string.indexOf('C')
    let mIndex = string.indexOf('m')
    return mIndex - 3 <= cIndex;
}

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
    let result = {}
    let payments = Object.values(obj)
    let individualBill = payments.reduce((a, b) => a + b) / payments.length
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
    if (pow === 0) {
        return 1
    }
    if (pow === 1) {
        return num;
    }
    return num * exp(num, pow - 1);
}

// console.log(exp(5, 3)); // => 125
// console.log(exp(2, 4)); // => 16
// console.log(exp(5, 1)); // => 5
// console.log(exp(6, 0)); // => 1