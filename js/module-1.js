// const drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i += 1) {
//     console.log(i + ' =^.^=');
//   }
// };

// drawCats(10);
// console.log(1234 + 57 * 3 - 31 / 4);
// console.log((15 + 9) * 2);
// console.log(8 / (1 + 3));

// const numberOfSiblings = 1 + 3;
// const numberOfCandies = 8;
// const resultOfCandies = numberOfCandies / numberOfSiblings;
// console.log(resultOfCandies);

// const secondsInAMinute = 60;
// const minutesInAnHour = 60;
// const secondsInAnHour = secondsInAMinute * minutesInAnHour;
// console.log(secondsInAnHour);
// const hoursInADay = 24;
// const secondsInADay = secondsInAnHour * hoursInADay;
// console.log(secondsInADay);
// const daysInAYear = 365;
// const secondsInAYear = daysInAYear * secondsInADay;
// console.log(secondsInAYear);
// const age = 36;
// const secondsInMyLife = age * secondsInAYear;
// console.log(secondsInMyLife);

// const numberNine = 9;
// const stringNine = '9';

// console.log(numberNine + numberNine);
// console.log(stringNine + stringNine);
// console.log(numberNine + stringNine);

// const greeting = 'hello';
// const myName = 'Vadym';
// const spaceBar = ' ';
// console.log(greeting + spaceBar + myName);
// console.log(greeting.length);

// const codeWord1 = 'are';
// const codeWord2 = 'tubas';
// const codeWord3 = 'unsafe';
// const codeWord4 = '?!';
// console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

// const longString = 'My long string is long';
// console.log(longString.slice(3, 14));

// const sillyString = 'hELlo THERE,hOW ARE yUo doINg?';
// // const lowerString = sillyString.toLowerCase();
// // console.log(lowerString);
// // const firstCharacter = lowerString[0];
// // const firstCharacterUpper = firstCharacter.toUpperCase();
// // const restOfString = lowerString.slice(1);
// // console.log(restOfString);
// // const resultNormalString = firstCharacterUpper + restOfString;

// const resultRefractNoramlString =
//   sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
// // console.log(resultNormalString);

// console.log(resultRefractNoramlString);

// const isWeekend = false;
// const hadShower = true;
// const hasApple = false;
// const hasOrange = true;
// const shoudldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);

// console.log(!isWeekend && hadShower);
// console.log(shoudldGoToSchool);

// const height = 60;
// const heightRestriction = 60;
// console.log(height >= heightRestriction);

// const mySecretNumber = 5;
// const chicoGuess = 3;
// const harpoGuess = 7;
// const grouchoGuess = 5;

// console.log(mySecretNumber === chicoGuess);
// console.log(mySecretNumber === harpoGuess);
// console.log(mySecretNumber === grouchoGuess);

// const age = 12;
// const accompanied = true;
// const pg = 13;
// const goToTheCinema = age >= pg || accompanied;

// console.log(goToTheCinema);

// const dinosaurus = [
//   'T-Rex',
//   'Velociraptor',
//   'Stegosaurus',
//   'Triceraptors',
//   'Brachiosaurus',
//   'Pteranodon',
//   'apatosaurus',
//   'Diplodocus',
//   'Composongnatus',
// ];
// dinosaurus[0] = 'Tyrannosaurus Rex';
// // dinosaurus[33] = 'Philosoraptor';

// // console.log(dinosaurus);

// const dinosaurusAndNumbers = [
//   3,
//   dinosaurus,
//   ['tricerpotors', 'stegosaurus', 3627.5],
//   10,
// ];

// console.log(dinosaurusAndNumbers[2][0]);
// console.log(dinosaurusAndNumbers);

// const maniacs = ['Yakko', 'Wakko', 'Dot'];
// console.log(maniacs[maniacs.length - 1]);

// const animals = [];
// animals.push('Cat');
// animals.push('Dog');
// animals.push('Llama');
// console.log(animals.unshift('Monkey'));
// animals.unshift('Polar Bear');
// const lastAnimal = animals.pop();
// console.log(animals.pop());
// animals.unshift(lastAnimal);
// const firstAnimal = animals.shift();

// console.log(lastAnimal);
// console.log(animals);

// const furryAnimal = ['Alpaca', 'Ring-tailed Lemur', 'Yeti'];
// const scalyANimals = ['Boa Constrictor', 'Goodzilla'];
// const featheredAnimals = ['Macaw', 'Dodo'];
// const furryAndScalyAnimals = furryAnimal.concat(scalyANimals, featheredAnimals);
// console.log(furryAndScalyAnimals);
// console.log(furryAndScalyAnimals.indexOf('Goodzilla'));

// const boringAnimals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
// console.log(boringAnimals.join());

// const landmarks = [];
// landmarks.push('My house');
// landmarks.push('Front path');
// landmarks.push('Flickering streetlamp');
// landmarks.push('Leaky fire hydrant');
// landmarks.push('Fire station');
// landmarks.push('Cat rescue center');
// landmarks.push('My old school');
// landmarks.push('My friend`s house');

// console.log(landmarks);

// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// console.log(landmarks);

// const randomWords = ['Explosion', 'Cave', 'Princess', 'Pen'];
// const randomIndex = Math.floor(Math.random() * 4);
// console.log(randomWords[randomIndex]);

// const phrases = [
//   'That sounds good',
//   'Yes, you should definitely do that',
//   'I`m not sure that`s a great idea',
//   'Maybe not today?',
//   'Computer says no.',
// ];
// const randomPrhrases = Math.floor(Math.random() * phrases.length);
// console.log(phrases[randomPrhrases]);

// const randomBodyParts = ['Face', 'Nose', 'Hair'];
// const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
// const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];
// const randomBodyPart =
//   randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// const randomAdjective =
//   randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// const randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!!!`;
// console.log(randomInsult);
// const randomBodyParts = ['Face', 'Nose', 'Hair'];
// const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
// const randomAnimals = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];
// const randomAnimalParts = ['Mouth', 'Ears', 'Tail', 'Fur', 'Scales', 'Beak'];
// const randomBodyPart =
//   randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// const randomAdjective =
//   randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// const randomAnimal =
//   randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// const randomAnimalPart =
//   randomAnimalParts[Math.floor(Math.random() * randomAnimalParts.length)];
// const randomInsult = `Your ${randomBodyPart} is more ${randomAdjective} than a ${randomAnimal}'s ${randomAnimalPart}!!!`;
// const randomInsultString = [
//   'Your',
//   randomBodyPart,
//   'is',
//   'more',
//   randomAdjective,
//   'than',
//   'a',
//   randomAnimal + '`s',
//   randomAnimalPart + '!!!',
// ].join(' ');
// console.log(randomInsult);
// console.log(randomInsultString);

// const numbers = [3, 2, 1];
// const strings = ['is', 'bigger', 'than'].join(' ');
// const numberConcatString = [
//   numbers[0],
//   strings,
//   numbers[1],
//   strings,
//   numbers[2],
// ].join(' ');
// console.log(numberConcatString);

// const numberAndJoin = numbers.join(' is bigger than ');
// console.log(numberAndJoin);

// const cat = {
//   legs: 3,
//   name: 'Harmony',
//   color: 'Tortoiseshell',
// };

// console.log(cat['name']);
// console.log(cat.name);

// const dog = {
//   name: 'Pancake',
//   age: 6,
//   color: 'white',
//   bark: 'Yip yap yip!',
// };

// const cat = {
//   name: 'Harmony',
//   age: 8,
//   color: 'tortoiseshell',
// };

// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// const anna = {
//   name: 'Anna',
//   age: 11,
//   luckyNumbers: [2, 4, 8, 16],
// };

// const dave = {
//   name: 'Dave',
//   age: 5,
//   luckyNumbers: [3, 9, 40],
// };

// const kate = {
//   name: 'Kate',
//   age: 9,
//   luckyNumbers: [1, 2, 3],
// };

// const friends = [anna, dave, kate];

// console.log(friends[0].luckyNumbers[2]);

// const owedMoney = {};
// owedMoney['Jimmy'] = 5;
// owedMoney.Anna = 7;
// owedMoney.Jimmy += 3;
// console.log(owedMoney);

// const movies = {
//   'Finding Nemo': {
//     releaseDate: 2003,
//     duration: 100,
//     actors: ['Albert Brooks', 'Ellen DeGenres', 'Alexander Gould'],
//     format: 'DVD',
//   },
//   'Star Wars: Episode VI - Return of the jeds': {
//     releaseDate: 1983,
//     duration: 134,
//     actors: ['Mark Hamill', 'Harrisson Ford', 'Carrie Fisher'],
//     format: 'DVD',
//   },
//   'Harry Potter and the Golbet of Fire': {
//     releaseDate: 2005,
//     duration: 157,
//     actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
//     format: 'Blu-ray',
//   },
// };
// const cars = {
//   releaseDate: 2006,
//   duration: 117,
//   actors: ['Owen Wilson', 'Bonnie Hunt', 'Paul Newman'],
//   format: 'Blu-ray',
// };
// movies['Cars'] = cars;

// console.log(movies);

const myCrazyObject = {
  name: 'A ridiculus object',
  'some array': [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
  'random animal': 'Banana Sharck',
};

console.log(Object.keys(myCrazyObject));
console.log(myCrazyObject['some array'][2]['number']);
