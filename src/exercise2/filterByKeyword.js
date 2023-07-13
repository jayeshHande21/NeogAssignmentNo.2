// 2. Write an ES6 function that takes an array of objects with name, price and quantity, and returns a new array with only the names containing bread

export const filterByKeyword = (arr) => {
  // Your ES6+ code here
  const newArrayWithKey = arr
    .filter((arr) => arr.name.includes("Bread"))
    .map((item) => item.name);
  return newArrayWithKey;
};

const products = [
  { name: "Bread", price: 480, quantity: 3 },
  { name: "Clips", price: 300, quantity: 5 },
  { name: "green Bread Knife", price: 3077, quantity: 1 },
  { name: "Slipper", price: 150, quantity: 2 }
];

console.log(filterByKeyword(products));
// Output: ["Bread", "green Bread Knife"]
