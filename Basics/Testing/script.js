const baseURL = 'https://api.covid19api.com/summary'

let currentCountry;
let input = 'Bahamas'
//document.getElementById('input').value;

const fetchCovid = ( ) => {
  fetch(baseURL)
  .then(res => res.json())
  .then(data => {
    console.log("data:", data.Countries);
    let countryArray = data.Countries
    filterCountries(countryArray);
  })

}

const filterCountries = (array) => {
  foundCountry = array.find((countryName) => {
    return countryName.Country === input;
  })
  console.log(foundCountry);
}

fetchCovid()

/*
Get input value/searchTerm
Filter by searchterm
Store the data in a variable
Step through data and display to html


*/