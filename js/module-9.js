const Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.draw();
};

Car.prototype.draw = function () {
  const carHtml =
    '<img width=200px src="https://clipart-library.com/image_gallery2/Car-Transparent.png"/>';

  this.carElement = $(carHtml);

  this.carElement.css({
    position: 'absolute',
    left: this.x,
    top: this.y,
  });

  $('body').append(this.carElement);
};

Car.prototype.speed = {
  speed: 0,
};

Car.prototype.moveRight = function (arg) {
  this.speed = arg;
  this.x += this.speed;
  console.log(this.x);

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function (arg) {
  this.speed = arg;
  this.x -= this.speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveUp = function () {
  this.speed = arg;
  this.x -= this.speed;

  this.carElement.css({ left: this.x, top: this.y });
};

Car.prototype.moveDown = function () {
  this.speed = arg;
  this.x += this.speed;

  this.carElement.css({ left: this.x, top: this.y });
};

const tesla = new Car(10, 20);
const nissan = new Car(100, 200);

console.log(tesla);
// tesla.draw();
// nissan.draw();

tesla.moveRight(10);
tesla.moveRight(10);
tesla.moveRight(10);
tesla.moveRight(10);

// const intervalId =

// console.log(nissan.moveRight());
// console.log(nissan.moveRight());
// console.log(nissan.moveRight());
// console.log(nissan.moveRight());
// console.log(nissan.moveRight());
setInterval(function () {
  if (tesla.x < 1500) {
    tesla.moveRight(Math.floor(Math.random() * 10));
  } else {
    tesla.x = -50;
  }
}, 30);

setInterval(function () {
  if (nissan.x < 1500) {
    nissan.moveRight(Math.floor(Math.random() * 10));
  } else {
    nissan.x = -50;
  }
}, 30);
console.log();
