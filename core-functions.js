/**
 * CHECKPOINT: JAVASCRIPT CORE FUNCTIONS
 * File: core-functions.js
 */

// ==========================================
// 1. STRING MANIPULATION FUNCTIONS
// ==========================================

/**
 * Reverses a given string.
 * @param {string} str 
 * @returns {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Counts the number of characters in a string.
 * @param {string} str 
 * @returns {number}
 */
function countCharacters(str) {
    return str.length;
}

/**
 * Capitalizes the first letter of each word in a sentence.
 * @param {string} sentence 
 * @returns {string}
 */
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


// ==========================================
// 2. ARRAY FUNCTIONS
// ==========================================

/**
 * Finds the maximum value in an array of numbers.
 * @param {number[]} arr 
 * @returns {number|undefined}
 */
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

/**
 * Finds the minimum value in an array of numbers.
 * @param {number[]} arr 
 * @returns {number|undefined}
 */
function findMin(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function sumOfArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

/**
 * Filters out elements from an array based on a given condition function.
 * @param {Array} arr 
 * @param {Function} conditionFn 
 * @returns {Array}
 */
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}


// ==========================================
// 3. MATHEMATICAL FUNCTIONS
// ==========================================

/**
 * Calculates the factorial of a given number.
 * @param {number} n 
 * @returns {number|undefined}
 */
function factorial(n) {
    if (n < 0) return undefined; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Checks if a number is prime or not.
 * @param {number} num 
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * Generates the Fibonacci sequence up to a given number of terms.
 * @param {number} terms 
 * @returns {number[]}
 */
function generateFibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];

    let sequence = [0, 1];
    while (sequence.length < terms) {
        let nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}


// ==========================================
// TEST VALIDATION LAYER
// (You can run this file to verify the code works)
// ==========================================

console.log("--- 1. String Manipulation Tests ---");
console.log("Reverse 'hello':", reverseString("hello")); // "olleh"
console.log("Count 'JavaScript':", countCharacters("JavaScript")); // 10
console.log("Capitalize sentence:", capitalizeWords("hello world from javascript")); // "Hello World From Javascript"

console.log("\n--- 2. Array Tests ---");
const numbers = [4, 12, 2, 85, 9];
console.log("Max Value:", findMax(numbers)); // 85
console.log("Min Value:", findMin(numbers)); // 2
console.log("Sum of Array:", sumOfArray(numbers)); // 112
console.log("Filtered (Even numbers only):", filterArray(numbers, num => num % 2 === 0)); // [4, 12, 2]

console.log("\n--- 3. Mathematical Tests ---");
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Is 11 prime?:", isPrime(11)); // true
console.log("Is 4 prime?:", isPrime(4)); // false
console.log("Fibonacci (7 terms):", generateFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]