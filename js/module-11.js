const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const words = ['javascript', 'monkey', 'amazing', 'pancake'];
// const answerArray = [];
let numberOfAttemps = 9;
let drawLine = 0;
const drawFalseLetter = function (drawLine) {
  //   console.log(numberOfAttemps);
  let i = drawLine;
  ctx.lineWidth = 4;
  if (i === 1) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(160, 340);
    ctx.lineTo(160, 180);
    ctx.stroke();
  } else if (i === 2) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(160, 180);
    ctx.lineTo(240, 180);
    ctx.stroke();
  } else if (i === 3) {
    ctx.strokeStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(220, 182);
    ctx.lineTo(220, 198);
    ctx.stroke();
  } else if (i === 4) {
    ctx.strokeStyle = '#008000';
    // ctx.lineWidth = 4;
    ctx.strokeRect(210, 200, 20, 20);
  } else if (i === 5) {
    ctx.strokeStyle = '#008000';
    ctx.beginPath();
    ctx.moveTo(220, 220);
    ctx.lineTo(220, 260);
    ctx.stroke();
  } else if (i === 6) {
    ctx.strokeStyle = '#008000';
    ctx.beginPath();
    ctx.moveTo(220, 240);
    ctx.lineTo(200, 230);
    ctx.stroke();
  } else if (i === 7) {
    ctx.strokeStyle = '#008000';
    ctx.beginPath();
    ctx.moveTo(220, 240);
    ctx.lineTo(240, 230);
    ctx.stroke();
  } else if (i === 8) {
    ctx.strokeStyle = '#008000';
    ctx.beginPath();
    ctx.moveTo(220, 260);
    ctx.lineTo(200, 300);
    ctx.stroke();
  } else if (i === 9) {
    ctx.strokeStyle = '#008000';
    ctx.beginPath();
    ctx.moveTo(220, 260);
    ctx.lineTo(240, 300);
    ctx.stroke();
  }
};

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
  return alert(answerArray.join(' '));
};
const getGuess = function () {
  let guess = prompt('Guess a letter, or click Cansel to stop plaing.');
  return guess;
};
const updateGameState = function (guess, word, answerArray) {
  guess = guess.toLowerCase();
  // console.log(numberOfAttemps);
  let number = 0;
  for (let j = 0; j < word.length; j += 1) {
    if (word[j] === guess && answerArray[j] === '_') {
      answerArray[j] = guess;
      console.log(answerArray[j]);
      number += 1;
    }
    // console.log(numberOfAttemps);
  }

  return number;
};
const showAnswerAndCongratilatePlayer = function (answerArray) {
  alert(answerArray.join(' '));
  return alert(`Good job! the answer was ${word}`);
  if (numberOfAttemps > 0) {
  } else {
    return alert(`Too bad! The answer was ${word}`);
  }
};

const showAnswerAndMessageOfTheLose = function (answerArray) {
  alert(answerArray.join(' '));
  return alert(`Too bad! The answer was ${word}`);
};

// console.log(pickWord(words));
// console.log(setupAnswerArray(pickWord(words)));
const word = pickWord(words);
const answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('PLease enter a single letter.');
  } else if (numberOfAttemps === 0) {
    showAnswerAndMessageOfTheLose(answerArray);
    break;
  } else {
    const correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    if (correctGuesses === 0) {
      numberOfAttemps -= 1;
      drawLine += 1;
      drawFalseLetter(drawLine);
    }
    console.log(correctGuesses);
    console.log(drawLine);
    console.log(numberOfAttemps);
  }
}

if (remainingLetters === 0) {
  showAnswerAndCongratilatePlayer(answerArray);
}
// if (remainingLetters > 0) {
// } else {
//   showAnswerAndMessageOfTheLose(answerArray);
// }
