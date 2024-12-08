function foo(a, b) {
  // Check if both arguments are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    // Handle cases where arguments are not numbers (optional)
    console.error("Invalid input types. Both arguments must be numbers.");
    return NaN; // or throw an error
  }
}
console.log(foo(1, "1")); // Output: Error message
console.log(foo(1, 1));   // Output: 2