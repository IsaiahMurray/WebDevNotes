//! The spread operator is an ES6 feature that expands the contents of an array and
//! takes it out of it's array structure
//! It is indicated by 3 dots => ...array

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  //This will just look like objects laid out next to eachother
  console.log(...foods);

  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug"];

  //This will look like the single months spaced out next to eachother
  console.log(...months)