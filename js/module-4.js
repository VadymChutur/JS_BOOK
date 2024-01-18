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

const randomBodyParts = ['Face', 'Nose', 'Hair'];
const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];
const randomAnyWords = ['Planet', 'Worm', 'Flower', 'Computer'];

const pickRandomWord = function (words) {
  console.log(Math.floor(Math.random() * 100));
  console.log(words);
  console.log(words[Math.floor(Math.random() * words.Mathlength)]);
  return words[Math.floor(Math.random() * words.length)];
};
console.log(pickRandomWord(randomAnyWords));

console.log(
  `You ${pickRandomWord(randomBodyParts)} is like ${pickRandomWord(
    randomAdjectives
  )} ${pickRandomWord(randomWords)}`
);
