//! The unshift method adds an element to the beginning of an array

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];
//1
console.log("Before: ",foods);
//2
foods.unshift({name: "popcorn", price: "20000"});
//3
console.log("After: ",foods);

/* 
! 1 => In the before, we see the entire array as we created it

! 2 => We call the .unshift method and pass in what we want to add to the array

! 3 => In  the after, we see that the array now has a new first item
*/

//? Another example!

const nums = [1, 2, 3, 4, 5];

console.log(nums);

nums.unshift(0);

console.log(nums);