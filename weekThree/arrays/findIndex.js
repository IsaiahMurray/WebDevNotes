//! The .findIndex method will search the array for a specific element 
//! and returns its first index. Returns -1 when element is not found

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

                    //1
console.log(beasts.findIndex(beast => 
    //2
    beast.startsWith('b')
));

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.findIndex(item => item.startsWith("g")));


/*
! 1 => when we call the findIndex method, it will iterate over the array 
! and finds the first element that passes the test we give it

! 2 => The test we are giving it is to check to see if the item starts with the letter 'b'
*/