
// const fetch = require("node-fetch");
// function apendImage() {
//   fetch(`https://rickandmortyapi.com/api/character`)
//     .then((response) => response.json())
//     .then((data) => {
//       let rick = document.getElementById("rick");
//       rick.src = data.results[1].image;
//     })
//     .catch(err => console.log(err))
// }

// apendImage();


// async function fetchImage(){
//     let response = await fetch(`https://rickandmortyapi.com/api/character`);
//     let data = await response.json();
//     console.log(data.results[1].image);
// }

// fetchImage()

// let fetch = require("node-fetch");
const pickleRick = async () => {
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let json = await response.json();
    console.log(json); 
};

pickleRick()