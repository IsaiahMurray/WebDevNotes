//! The .every method checks the array for a condition and then returns true or false
//! like the .some method, except it checks every item in the array to see if it meets the condition

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const isExpensive = foods.every((food) => {
      //1
  return food.price <= 1000
})
console.log(isExpensive);

//! 1 => So if the price of every item in the array is less than 1000, it will return true
//? And if we were to to check if every item was less than or equal to 5 instead, it would return false
// This can be used to check any object and object property inside an array