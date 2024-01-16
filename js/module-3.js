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
console.log(word);
console.log(answerArray);
while (remainingLetters > 0) {
  alert(answerArray.join(''));
  let guess = prompt('Guess a letter, or click Cansel to stop plaing.');

  if (guess === null) {
    alert('You finish game');
    break;
  } else if (guess.length !== 1) {
    alert('PLease enter a single letter.');
  } else {
    for (let j = 0; j < word.length; j += 1) {
      if (word[j] === guess.toLowerCase()) {
        answerArray[j] = guess.toLowerCase();
        remainingLetters -= 1;
      }
    }
  }
}
alert(answerArray.join(' '));
alert(`Good job! the answer was ${word}`);
