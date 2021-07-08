const reverseArray = (arr) => {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// Test case:
const sentence = ["sense.", "make", "all", "will", "This"];
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
