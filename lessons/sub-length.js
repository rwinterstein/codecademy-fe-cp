/**
 * Objective:
 *
 * Write a function subLength() that takes
 * 2 parameters, a string and a single character.
 *
 * The function should search the string for
 * the two occurrences of the character and
 * return the length between them including
 * the 2 characters.
 *
 * If there are less than 2 or more than 2 occurrences
 * of the character the function should return 0.
 */

/**
 * Example:
 *
 * subLength('Saturday', 'a'); // returns 6
 * subLength('summer', 'm'); // returns 2
 * subLength('digitize', 'i'); // returns 0
 * subLength('cheesecake', 'k'); // returns 0
 */

const subLength = (string, letter) => {
  let arr = string.split("");
  let nums = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == letter) {
      nums.push(i);
    }
  }

  if (nums.length != 2) {
    return 0;
  }

  return nums[1] - nums[0] + 1;
};

// Test case:
console.log(subLength("Saturday", "a"));
