const Ball = function () {
  this.x = width / 2;
  this.y = heght / 2;
  this.xSpeed = Math.random() * 10 - 5;
  this.ySpeed = Math.random() * 10 - 5;
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  this.color = pickRandomColor(colors);
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

const pickRandomColor = function (color) {
  return color[Math.floor(Math.random() * color.length)];
};

Ball.prototype.draw = function () {
  ctx.fillStyle = this.color;
  // console.log(this.color());
  circle(this.x, this.y, 5, true);
};

Ball.prototype.fill = function () {
  ctx.fillStyle = this.color();
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
    console.log(this.xSpeed);
  }
  if (this.y < 0 || this.y > heght) {
    this.ySpeed = -this.ySpeed;
  }
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;
let heght = canvas.height;
heght = 200;
width = 400;
// console.log(heght);

const balls = [];
for (let i = 0; i < 10; i += 1) {
  // ball[i] = new Ball();
  balls.push(new Ball());
}

setInterval(function () {
  ctx.clearRect(0, 0, width + 10, heght + 10);

  for (let i = 0; i < balls.length; i += 1) {
    // console.log(ball);
    // console.log(ball[i].draw());
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
    // ball[i].fill();
  }

  ctx.strokeRect(0, 0, width, heght);
}, 30);
