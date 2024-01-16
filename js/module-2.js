// const name = 'Vadym';
// console.log('Hello ' + name);
// if (name.length > 7) {
//   console.log('Wow, you have a REALLY long name!');
// } else {
//   console.log('Your name isn`t very long.');
// }

// const lemonChicken = false;
// const beefWithBlackBean = true;
// const sweetAndSourPork = true;

// if (lemonChicken) {
//   console.log('Great! I`m having lemon chiken!');
// } else if (beefWithBlackBean) {
//   console.log('I`m having the beef.');
// } else if (sweetAndSourPork) {
//   console.log('Ok, I`ll have the pork.');
// } else {
//   console.log('Well, I guess have rice then.');
// }

// const name = 'Vadym';
// const nameMother = 'Yana';
// const nameFather = 'Valera';
// const me = name;

// if (me === name) {
//   console.log(`Hello ${name}!`);
// } else if (me === nameMother) {
//   console.log(`Hello ${nameMother}!`);
// } else if (me === nameFather) {
//   console.log(`Hello ${nameFather}!`);
// } else {
//   console.log('Hello stranger!');
// }

// let sheepCounted = 0;
// while (sheepCounted < 10) {
//   console.log(`I have counted ${sheepCounted} sheep!`);
//   sheepCounted += 1;
// }
// console.log('ZZZzzzz');

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted += 1) {
//   console.log(`I have counted ${sheepCounted} sheep!`);
// }
// console.log('ZZZzzzz');

// const timesToSayHallo = 3;
// for (let i = 0; i < timesToSayHallo; i += 1) {
//   console.log('Hello!');
// }

// const animals = ['Lion', 'Flamingo', 'Polar Bear', 'Boa Constrictor'];
// for (let i = 0; i < animals.length; i += 1) {
//   console.log(`This zoo contains a ${animals[i]}.`);
// }

// const name = 'Nick';
// for (let i = 0; i < name.length; i += 1) {
//   console.log(`My name contains the letter ${name[i].toUpperCase()}.`);
// }

// for (let x = 2; x < 10000; x *= 2) {
//   console.log(x);
// }

// for (let x = 3; x < 10000; x *= 3) {
//   console.log(x);
// }

// let numberIncriment = 3;
// while (numberIncriment < 10000) {
//   console.log(numberIncriment);
//   numberIncriment *= 3;
// }

// const animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon'];

// for (let i = 0; i < animals.length; i += 1) {
//   const awesome = 'Awesome ';
//   animals[i] = awesome + animals[i];
// }
// console.log(animals);

// const alphabet = 'abcdefghijklmnopqrstuwxyz';
// let randomString = '';
// while (randomString.length < 6) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

const input = 'javascript is awesome';
let output = '';
for (let i = 0; i < input.length; i += 1) {
  if (input[i] === 'a') {
    output += 4;
  } else if (input[i] === 'e') {
    output += 3;
  } else if (input[i] === 'i') {
    output += 1;
  } else if (input[i] === 'o') {
    output += 0;
  } else {
    output += input[i];
  }
}
console.log(output);
