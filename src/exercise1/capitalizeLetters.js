// 1. Write an ES6 function that takes in an array of objects representing users and returns an array of names with all the letters capitalized.

// Your ES6+ code here
export const capitalizeLetters = (arr) => {
  // Your ES6+ code here
  const capitalNameArray = arr.map((names) => names.name.toUpperCase());
  return capitalNameArray;
};

const sounds = [
  {
    name: "rain",
    sound: "tap tap tap"
  },
  {
    name: "fire",
    sound: "blaze"
  },
  {
    name: "water",
    sound: "slosh slosh"
  }
];

console.log(capitalizeLetters(sounds)); // Output: ["RAIN", "FIRE", "WATER"]
