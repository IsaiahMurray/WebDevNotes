//! The .slice method will return a copy of specified portion of an array.
//! The portion is specified by the index given in the parameters

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];



console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//?If the second parameter is not specified, the method will the rest of the 
//?array after the first specified index
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
