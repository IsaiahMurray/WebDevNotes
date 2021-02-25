//! The .some method checks the array for a condition and then returns true or false

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const hasBeef = foods.some((item) => {
  return item.name === 'beef'
})
console.log(hasBeef);

//! So if the array contains a food object with the name 'beef', it will return true
//? And if we were to put 'basil' instead, it would return false
// This can be used to check any object and object property inside an array