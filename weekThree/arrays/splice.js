//! The .splice method changes the contents of an array by 
//! removing or replacing existing elements and/or adding new elements in it's place

const months = ['Jan', 'March', 'April', 'June'];

           //1
months.splice(1, 0, "Feb");
//This will put Feb at index 1(the second position) of the array

console.log(months);
//The outcome should be: ["Jan", "Feb", "March", "April", "June"]

              //2
months.splice(4, 1, 'May');
//The outcome should now be ["Jan", "Feb", "March", "April", "May"]
console.log(months)

//3
months.splice(5, 0, "June", "July", "Aug")
//The outcome should now be ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug"]
console.log(months)

/*
! 1 => The 3 parameters in the splice method are(in order)
    -The index of the array that will be affected
    -The number of elements that will be removed(if the number is 0 then no elements are removed)
    -The elemtents to add to the array, starting at the index specified in the first parameter
    ? months.splice(1, 0, "Feb")
    ? this will target index 0, remove nothing, then add "Feb" at that spot


! 2 => This is saying that we will target index 4, remove one element(that element being "June"),
! and then replace it with "May"

! 3 => This is showing that you can add multiple elements to the array

*/
