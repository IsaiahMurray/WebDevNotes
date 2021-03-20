//! The .slice method will return a copy of specified portion of an array.
//! The portion is specified by the index given in the parameters

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];


console.log(foods.slice(2, 4));
/* expected output: 
[
    { name: "mint", price: 10}, 
    { name: "shrimp", price: 5 }, 
    { name: "ketchup", price: 500 }
]
*/


console.log(foods.slice(1, 5));
/* expected output:
[
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 }
]
*/
//?If the second parameter is not specified, the method will the rest of the 
//?array after the first specified index
console.log(foods.slice(2));
/* expected output: 
[
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
]
*/
