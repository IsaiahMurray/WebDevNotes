//* Regular fetch

function fetchMorty() {
  fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((data) => {
      let morty = document.getElementById("morty");
      morty.src = data.results[1].image;
    })
    .catch(err => console.log(err))
}
fetchMorty();



//* Async fetch

async function fetchAlienRick() {
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let json = await response.json();
    let alienRick = document.getElementById('alienRick');
    alienRick.src = json.results[14].image;
};
fetchAlienRick()


//* Async fetch with try and catch
async function fetchRick() {
    try{
      let response = await fetch((`https://rickandmortyapi.com/api/character`));
      let json = await response.json();
      let rick = document.getElementById("rick");
      rick.src = json.results[0].image
    }catch(err){
      console.error(err);
    }
  }

  fetchRick();

  //* E6 Async Fetch with Try and Catch

  const fetchAlienMorty = async() =>  {
    try{
      let response = await fetch((`https://rickandmortyapi.com/api/character`));
      let json = await response.json();
      let aMorty = document.getElementById("alienMorty");
      aMorty.src = json.results[13].image
    }catch(err){
      console.error(err);
    }
  }
fetchAlienMorty();
