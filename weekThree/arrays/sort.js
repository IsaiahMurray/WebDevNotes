//! The .sort method sorts the items in an array. The sort order can either be alphabetic or numeric, 
//! and either ascending or descending. By default, sort() orders the values as strings in alphabetical 
//! and ascending order. Can take in a compare function which indicates if you want to sort by 
//! ascending or descending.

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];

console.log(costs.sort((a, b) => b - a));
//want to sort by descending order

console.log(costs.sort((a, b) => a - b));
//want to sort by ascending order
