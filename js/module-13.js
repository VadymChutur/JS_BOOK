const Ball = function () {
  this.x = 400;
  this.y = 400;
  this.xSpeed = -4;
  this.ySpeed = 6;
};

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 10, true);
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > 800) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > 800) {
    this.ySpeed = -this.ySpeed;
  }
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = new Ball();

setInterval(function () {
  ctx.clearRect(0, 0, 800, 800);

  ball.draw();
  ball.move();
  ball.checkCollision();
  ctx.strokeRect(0, 0, 800, 800);
}, 30);
