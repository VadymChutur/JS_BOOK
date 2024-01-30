// const dog = {
//   name: 'Pancake',
//   legs: 4,
//   isAwesome: true,
// };

// dog.bark = function () {
//   console.log(`Woof woof! my name is ${this.name}`);
// };

// dog.bark();

// const speak = function () {
//   console.log(`${this.sound}! My name is ${this.name}!`);
// };

// const cat = {
//   sound: 'Miaow',
//   name: 'Mittens',
//   speak: speak,
// };

// cat.speak();

// const pig = {
//   sound: 'Oink',
//   name: 'Charlie',
//   speak: speak,
// };

// const horse = {
//   sound: 'Neigh',
//   name: 'Marie',
//   speak: speak,
// };

// pig.speak();
// horse.speak();

const Car = function (x, y) {
  this.x = x;
  this.y = y;
};

const tesla = new Car(10, 20);
const nissan = new Car(100, 200);

console.log(tesla);

const drawCar = function (car) {
  const carHtml =
    '<img width=200px src="https://clipart-library.com/image_gallery2/Car-Transparent.png"/>';
  const carElement = $(carHtml);
  carElement.css({
    position: 'absolute',
    left: car.x,
    top: car.y,
  });

  $('body').append(carElement);
};

drawCar(tesla);
drawCar(nissan);
