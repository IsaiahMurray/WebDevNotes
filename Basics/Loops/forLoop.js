//* Basic For Loop

let i = 7
//?        (1)    (2)    (3)
for (i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

console.log('global variable:', i);
//? 1 => initial expression
//? 2 => condition
//? 3 => increment expression



//* Using a for loop, count to 20, by 2's

for (let i = 0; i <= 20; i += 2) { // i = i + 2
    console.log(i); // 0 2 4 6 8 10 12 14 16 18 20
}



//* For Loop over an array

let colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}



//* Using a for loop, count from 10 to 0, going down by 1

for (i = 10; i >= 0; i--) {
    console.log(i); // 10 9 8 7 6 5 4 3 2 1 0
}



//* Using a for loop, count from 0, going down by 2's to -24

for (i = 0; i >= -25; i -= 2) {
    console.log(i); // 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24
}



//* Using a for loop, go through a name and display each letter individually

let name = "Kenn";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]); // K e n n
}



//* Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
}

console.log(sum); //1275



//* For Loop with Async Fetch and Try Catch

const fetchAlienMorty = async () => {
  try {
    let response = await fetch((`https://rickandmortyapi.com/api/character`));
    let json = await response.json();
    
    let charactersArray = json.results;
    console.log(charactersArray);

    loopCharacters(charactersArray);

  } catch (err) {
    console.error(err);
  }
};

const loopCharacters = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].name);
  }
};

fetchAlienMorty();