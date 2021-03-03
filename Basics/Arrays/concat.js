//! The .concat method will take two or more arrays, combine them,
//! then return them as one new array

const numsOne = [0, 1, 2, 3, 4];

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

          //1        //2
  const newArray = numsOne.concat(foods);
  //3
  console.log(newArray);

  /* 
  ! 1 => First, we create a variable for our new array
  
  ! 2 => Then we call the .concat method on an array, and pass in the other array in its parameters

  ! 3 => We see that the arrays are now both combined 
  */