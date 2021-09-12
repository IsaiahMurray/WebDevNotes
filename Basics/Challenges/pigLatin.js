//! Pig Latin Challenge
//? Create a function that takes in strings
//? In the function, translate a phrase into pig latin and print it to the console.
//* If able to do so, return the value into another variable and print that variable.
// What is Pig Latin?
// If the word begins with a consonant, remove the consonant to the first vowel,
// then place it at the end of the word, and add an 'ay' to the end
//! (i.e. Pig Latin => IgPay Atinlay).
//? If the word begins with a vowel, simply add an 'ay' at the end of the word.

const pigLatin = (word) => {
  let vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let multiWord = word.split(" ");
  console.log("multi-word", multiWord, multiWord.length);

    let pigLatinWord = [];
  for(let i = 0; i < multiWord.length; i++){

     let singleWord = multiWord[i];
     console.log(word1)

     

    if (!vowelsArray.includes(singleWord[0])) {

        let letters = singleWord.split("");
    
        let firstLetter = letters.shift();
    
        letters.push(firstLetter);
    
        letters.push("ay");
    
        let plWord = letters.join("");
    
        console.log('Pig Latin: ', plWord);
        newWord.push(plWord);
      } else {
        let letters = word1.split("");
        console.log(letters);
        
        letters.push("ay");
        console.log(letters);
    
        let pgWord = letters.join("");
    
        console.log('Pig Latin: ', pgWord);

        newWord.push(pgWord);
      }
       
    }
   console.log(newWord.join(' '));
};

pigLatin("Isaiah Sheeley Murray");
