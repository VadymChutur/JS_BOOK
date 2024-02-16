// $('body').keydown(function (event) {
//   console.log(event.keyCode);
// });

// const keyNames = {
//   32: 'space',
//   37: 'left',
//   38: 'up',
//   39: 'right',
//   40: 'down',
// };

// $('body').keydown(function (event) {
//   console.log(keyNames[event.keyCode]);
// });

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

const Ball = function () {
  this.speed = 5;
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = this.speed;
  this.ySpeed = 0;
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x < 0 || this.x > height) {
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 10, true);
};

Ball.prototype.setDirection = function (direction) {
  if (direction === 'up') {
    this.xSpeed = 0;
    this.ySpeed = -this.speed;
  } else if (direction === 'down') {
    this.xSpeed = 0;
    this.ySpeed = this.speed;
  } else if (direction === 'left') {
    this.xSpeed = -this.speed;
    this.ySpeed = 0;
  } else if (direction === 'right') {
    this.xSpeed = this.speed;
    this.ySpeed = 0;
  } else if (direction === 'stop') {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
};

Ball.prototype.setSpeed = function (speed) {
  if (speed === '1') {
    this.speed = 5;
  } else if (speed === '2') {
    this.speed = 10;
  } else if (speed === '3') {
    this.speed = 15;
  } else if (speed === '4') {
    this.speed = 20;
  } else if (speed === '5') {
    this.speed = 25;
  } else if (speed === '6') {
    this.speed = 30;
  } else if (speed === '7') {
    this.speed = 35;
  } else if (speed === '8') {
    this.speed = 40;
  } else if (speed === '9') {
    this.speed = 45;
  }
};

const ball = new Ball();

const keyActions = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
};

const speeds = {
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
};

$('body').keydown(function (event) {
  // console.log(event.keyCode);
  // let speed = speeds[event.keyCode];
  // ball.setSpeed(speed);
  let direction = keyActions[event.keyCode];
  ball.setDirection(direction);
});

$('body').keydown(function (event) {
  let speed = speeds[event.keyCode];
  ball.setSpeed(speed);
});

setInterval(function () {
  ctx.clearRect(0, 0, width, height);

  ball.draw();
  ball.move();

  ctx.strokeRect(0, 0, width, height);
}, 30);
