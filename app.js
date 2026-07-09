// Import modules
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// --- Part 4 & 5 Tests ---
console.log('Add: ', add(5, 3)); 
console.log('Subtract: ', subtract(10, 4));
console.log('Uppercase: ', toUpperCase('hello')); 
console.log('Lowercase: ', toLowerCase('WORLD'));
console.log('Multiply: ', multiply(4, 5)); 

// --- Part 6 Tests ---
console.log('Max: ', findMax([1, 2, 3, 4, 5])); 
console.log('Reversed: ', reverseArray([1, 2, 3])); 

// --- Part 7 Test ---
console.log('Combined Cross-Module Result:');
addAndLogUpper(10, 20);