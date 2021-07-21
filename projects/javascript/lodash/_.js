const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    let rangeStart = start;
    let rangeEnd = end;

    if (!end) {
      rangeEnd = start;
      rangeStart = 0;
    }

    if (start > end) {
      rangeEnd = start;
      rangeStart = end;
    }

    if (number >= rangeStart && number < rangeEnd) return true;
    return false;
  },

  words(string) {
    let words = string.split(" ");
    return words;
  },

  pad(string, length) {
    if (string.length >= length) return string;

    let paddingToApply = length - string.length;

    let rightPadding = [];
    let leftPadding = [];

    for (let i = 0; i < Math.ceil(paddingToApply / 2); i++) {
      rightPadding.push(" ");
    }

    for (let i = 0; i < Math.floor(paddingToApply / 2); i++) {
      leftPadding.push(" ");
    }

    return `${leftPadding.join("")}${string}${rightPadding.join("")}`;
  },

  has(object, key) {
    if (key in object) return true;
    return false;
  },

  invert(object) {
    const invertedObj = {};
    for (const key in object) {
      let value = object[key];
      let newKey = value;
      let newValue = key;
      invertedObj[newKey] = newValue;
    }
    return invertedObj;
  },

  findKey(object, predicate) {
    for (const key in object) {
      const value = object[key];
      const predReturnVal = predicate(value);
      if (predReturnVal) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, num) {
    if (num === undefined) num = 1;
    return array.slice(num);
  },

  chunk(array, size) {
    if (!size) size = 1;

    const newArr = [];

    for (let i = 0; i <= size; i++) {
      if (!array[0]) break;

      let start = 0;
      let end = size;

      newArr.push(array.slice(start, end))
      array.splice(start, size)
    }

    return newArr;
  },
};

module.exports = _;
