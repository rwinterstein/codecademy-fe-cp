// Write your code here:

const convertToBaby = (arr) => {
  let babyArr = [];

  for (let i = 0; i < arr.length; i++) {
    babyArr.push("baby " + arr[i]);
  }

  return babyArr;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
console.log(convertToBaby(animals));
