// const ourFirstFunction = function () {
//   console.log('Hello world!');
// };

// ourFirstFunction();

// const sayHelloTo = function (name) {
//   console.log(`Hello ${name}!`);
// };

// sayHelloTo('Nick');

// const drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i += 1) {
//     console.log('=^.^=');
//   }
// };

// drawCats(10);
// const printMultipleTimes = function (howManyTimes, whtToDraw) {
//   for (let i = 0; i < howManyTimes; i += 1) {
//     console.log(i + ` ${whtToDraw}`);
//   }
// };

// printMultipleTimes(10, '=^.^=');

// const double = function (number) {
//   return number * 2;
// };

// console.log(double(6) + double(3));

// const randomBodyParts = ['Face', 'Nose', 'Hair'];
// const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
// const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];
// const randomAnyWords = ['Planet', 'Worm', 'Flower', 'Computer'];

// const pickRandomWord = function (words) {
//   // console.log(Math.floor(Math.random() * 100));
//   // console.log(words);
//   // console.log(words[Math.floor(Math.random() * words.Mathlength)]);
//   return words[Math.floor(Math.random() * words.length)];
// };
// // console.log(pickRandomWord(randomAnyWords));

// const generateRandomInsult = function () {
//   const randomString = `You ${pickRandomWord(
//     randomBodyParts
//   )} is like ${pickRandomWord(randomAdjectives)} ${pickRandomWord(
//     randomWords
//   )}`;

//   return randomString;
// };

// console.log(generateRandomInsult());

// const add = function (a, b) {
//   return a + b;
// };

// const multiply = function (a, b) {
//   return a * b;
// };

// console.log(add(multiply(36325, 9824), 777));

// const areArraysSame = function (a, b) {
//   if (a.length === b.length) {
//     if (a.join() === b.join()) {
//       return true;
//     }
//   }
//   return false;
// };

// const areArraysSame = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i += 1) {
//     // console.log(arr1[i], arr2[i]);
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

const words = ['javascript', 'monkey', 'amazing', 'pancake'];
// const answerArray = [];

const pickWord = function (words) {
  const word = words[Math.floor(Math.random() * words.length)];
  return word;
};
const setupAnswerArray = function (word) {
  const answerArray = [];
  for (let i = 0; i < word.length; i += 1) {
    answerArray[i] = '_';
  }
  return answerArray;
};
const showPlayerProgress = function (answerArray) {
  return alert(answerArray);
};
const getGuess = function () {
  let guess = prompt('Guess a letter, or click Cansel to stop plaing.');
  return guess;
};
const updateGameState = function (guess, word, answerArray) {
  guess = guess.toLowerCase();
  // console.log(numberOfAttemps);
  for (let j = 0; j < word.length; j += 1) {
    if (word[j] === guess && answerArray[j] === '_') {
      answerArray[j] = guess;
      console.log(answerArray);
    }
  }

  return;
};
const showAnswerAndCongratilatePlayer = function (answerArray) {
  alert(answerArray.join(' '));
  return alert(`Good job! the answer was ${word}`);
  if (numberOfAttemps > 0) {
  } else {
    return alert(`Too bad! The answer was ${word}`);
  }
};

// console.log(pickWord(words));
// console.log(setupAnswerArray(pickWord(words)));
const word = pickWord(words);
const answerArray = setupAnswerArray(word);
const remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('PLease enter a single letter.');
  } else {
    const correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratilatePlayer(answerArray);
