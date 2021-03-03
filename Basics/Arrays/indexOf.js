//! The .indexOf method will search the array for a specific element 
//! and returns its first index. Returns -1 when element is not found

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1 because it does not exist in the array
