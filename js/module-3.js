// let name = prompt('What`s your name?');
// console.log(`Hello ${name}`);

// const likesCats = confirm('Do you like cats?');
// if (likesCats) {
//   console.log('You`re a cool cat!');
// } else {
//   console.log('Yeah, that`s fine. You`re still cool!');
// }

// Pick a random word

// While the word has been guessed{
//     show the player their current progress
//     Get a guess from the player

//     if the player wants to quit the game {
//         Quit the game
//     }
//     else if{ The guess is not a single letter{
//         Tell the player to pick a single letter
//     }
//     }
//     else {
//     If the guess is in the world {
//         Update the player`s progrees with the guess
//     }
//     }
// }

// Congratulate the player on gguessingthe world

const words = ['javascript', 'monkey', 'amazing', 'pancake'];
alert(`${words.length} secret words the ${words.join(' ')}`);
const word = words[Math.floor(Math.random() * words.length)];
const answerArray = [];
for (let i = 0; i < word.length; i += 1) {
  answerArray[i] = '_';
}
let remainingLetters = word.length;
let numberOfAttemps = word.length * 2;
console.log(numberOfAttemps);
console.log(word);
console.log(answerArray);
while (remainingLetters > 0 && numberOfAttemps > 0) {
  alert(answerArray.join(''));
  let guess = prompt('Guess a letter, or click Cansel to stop plaing.');

  if (guess === null) {
    alert('You finish game');
    break;
  } else if (guess.length !== 1) {
    alert('PLease enter a single letter.');
  } else {
    guess = guess.toLowerCase();
    numberOfAttemps -= 1;
    console.log(numberOfAttemps);
    for (let j = 0; j < word.length; j += 1) {
      if (word[j] === guess && answerArray[j] === '_') {
        answerArray[j] = guess;
        remainingLetters -= 1;
        // alert(
        //   'This letter is not in this word. Minus 1 attempt. There are still attempts'
        // );
      }
    }
  }
}
alert(answerArray.join(' '));
if (numberOfAttemps > 0) {
  console.log(guess);
  alert(`Good job! the answer was ${word}`);
} else {
  alert(`Too bad! The answer was ${word}`);
}
