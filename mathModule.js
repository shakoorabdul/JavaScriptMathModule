import { toUpperCase } from './stringModule.js';

// Named Export: Addition
export function add(a, b) {
    return a + b;
}

// Named Export: Subtraction
export function subtract(a, b) {
    return a - b;
}

// Part 7 Task 1: Cross-Module Interaction
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

// Part 5: Default Export - Multiplication
export default function multiply(a, b) {
    return a * b;
}