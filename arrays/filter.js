


//! The filter array method allows us to go thourgh an array and return or filter out
//! parameters that meet(or don't meet) a specific condition


//1
const foods = [
  { name: "bread", price: 100 },
  { name: "beef", price: 200 },
  { name: "mint", price: 10 },
  { name: "shrimp", price: 5 },
  { name: "ketchup", price: 500 },
  { name: "bell pepper", price: 25 },
];

//3                     //4    //5
const filteredPrice = foods.filter((food) => {
  //6       
  return food.price <= 100;
});

console.log(filteredPrice);
console.log(foods)

const filteredNames = foods.filter((food) => {
  //7
  return food.name.startsWith("b");
});


console.log(filteredNames)

/*
1 => Create an Array of objects called foods

2 => Each object has a name and a price

3 => Made a variable(which is another array) that will hold the objects we filtered out

? 4 => On our foods array, we tack on the .filter array-method
? that method will loop/iterate over the array and apply the conditions we state 

! 5 => We pass in a function that will take in an object from our array
! (in this case, we called it food, it can be named whatever you want. Just don't confuse yourself)

! 6 => We tell the function to 'step into' the object and look at the price
! and if the price is less than or equal to 100
! return it to the filteredPrice Array

? 7 => This is showing that you can tack on other methods to filter by 
? It's saying that if the name of the food starts with 'b'
? Then return it to the filteredName array
*/