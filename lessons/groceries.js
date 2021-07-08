/**
 * Objective:
 *
 * Write a function groceries() that takes an array
 * of object literals of grocery items. The function
 * should return a string with each item separated
 * by a comma except the last two items should be
 * separated by the word 'and'. Make sure spaces (' ')
 * are inserted where they are appropriate.
 */

/**
 * Examples:
 *
 * groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
 * returns 'Carrots, Hummus, Pesto and Rigatoni'
 *
 * groceries( [{item: 'Bread'}, {item: 'Butter'}] );
 * returns 'Bread and Butter'
 *
 * groceries( [{item: 'Cheese Balls'}] );
 * returns 'Cheese Balls'
 */

const groceries = (arr) => {
  // For a single item
  if (arr.length == 1) {
    return arr[0]["item"];
  }

  // For only 2 items
  if (arr.length == 2) {
    let list = [];

    for (const obj of arr) {
      list.push(obj["item"]);
    }
    return list.join(" and ");
  }

  // For 3 or more items
  let firstHalfOfList = [];
  let secondHalfOfList = [];

  for (let i = 0; i < arr.length; i++) {
    if (i <= arr.length - 3) firstHalfOfList.push(arr[i]["item"] + ", ");
    if (i >= arr.length - 2) secondHalfOfList.push(arr[i]["item"]);
  }

  return firstHalfOfList.join("") + secondHalfOfList.join(" and ");
};

// Test cases:
console.log(groceries([{ item: "Carrots" }, { item: "Hummus" }, { item: "Pesto" }, { item: "Rigatoni" }]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
console.log(groceries([{ item: "Bread" }, { item: "Butter" }]));
// returns 'Bread and Butter'
console.log(groceries([{ item: "Cheese Balls" }]));
// returns 'Cheese Balls'
