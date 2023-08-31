//! The .reduce method is a bit more confusing than the others, but incredibly useful!
//! It executes a function for each specified value in an array and returns a single value

const foods = [
  { name: "bread", price: 100 },
  { name: "beef", price: 200 },
  { name: "mint", price: 10 },
  { name: "shrimp", price: 5 },
  { name: "ketchup", price: 500 },
  { name: "bell pepper", price: 25 },
];

//? So normally, if you wanted to get the total price of all of the food objects in this array,
//? you would run a loop that adds the price every single time, then return the price
//? The reduce method simplifies that

                            //1
const total = foods.reduce((currentTotal, food) => {
    //2
  return food.price + currentTotal;
//3
}, 0);

console.log(total);

/*
! 1 => This method takes in two parameters. 
! The first will be the current sum of the numbers at each iteration.
! The second will be what item we are iterating over

! 2 => So we will look at the price of food object, then add it to the current total
! Then do it over and over again until it has gone through each item in the array
We should get 840

? 3 => The 0 at the end specifies what value we are going to start at. 
? So if we put 200, the total would come out to 1040
*/
