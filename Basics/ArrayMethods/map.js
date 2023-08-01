//! map allows you to take one array and convert it into 
//! a new array that is populated with the results of the function passed through

const foods = [
  { name: "bread", price: 100 },
  { name: "beef", price: 200 },
  { name: "mint", price: 10 },
  { name: "shrimp", price: 5 },
  { name: "ketchup", price: 500 },
  { name: "bell pepper", price: 25 },
];

                    //1
const foodNames = foods.map((food) => {
  //2
  return food.name;
});

console.log(foodNames);

/*
? 1 => We call the .map method on the foods array and pass in a singular "food" object from the array
! 2 => We tell it to 'step into' the food object and look at the name property, 
! then return it to the foodNames array
  */
