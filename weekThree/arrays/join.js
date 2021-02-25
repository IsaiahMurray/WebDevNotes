//! The .join method converts the elements of an array into a string. 
//! Can accept an optional parameter, “separator”, which indicates how the elements will be separated.
//! Default separator is a comma.

const greetings = ['hi', 'hello', 'welcome', 'howdy']

console.log(greetings.join())

console.log(greetings.join("! and "))