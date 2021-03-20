//! The .find method allows you to find a single item in an array

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const foundFood = foods.find((item) => {
      //1
      return item.name === 'mint'
  })

  console.log(foundFood);

  //! 1 => This will return the first object in the array that meets 
  //! the conditions that we specify in the function
  //! So if we have multiple objects that meet the condition, it will 
  //! still only return the first instance of it