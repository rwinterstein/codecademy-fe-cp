/**
 * Objective:
 *
 * Write a function factorial() that takes a number
 * as an argument and returns the factorial of the number.
 *
 * Assume only positive numbers will be given
 * as an argument for the factorial() function.
 */

/**
 * Example:
 *
 * factorial(6);
 * returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720
 */

const factorial = (n) => {
  let result = n;

  while (n > 1) {
    result *= n - 1;
    n--;
  }

  return result;
};

// Test case:
console.log(factorial(6));
