const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBloks = height / blockSize;

let score = 0;

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

const Block = function (col, row) {
  this.col = col;
  this.row = row;
};

Block.prototype.drawSquare = function (color) {
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, blockSize, blockSize);
};

Block.prototype.drawCircle = function (color) {
  let centerX = this.col * blockSize + blockSize / 2;
  let centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};

Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

const Snake = function () {
  this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];

  this.direction = 'right';
  this.nextDirection = 'right';
};

Snake.prototype.draw = function () {
  for (let i = 0; i < this.segments.length; i += 1) {
    if (i === 0) {
      this.segments[i].drawSquare('Green');
    } else if (i % 2 === 0) {
      this.segments[i].drawSquare('Blue');
    } else {
      this.segments[i].drawSquare('yellow');
    }
  }
};

Snake.prototype.move = function () {
  let head = this.segments[0];
  let newHead;

  this.direction = this.nextDirection;

  if (this.direction === 'right') {
    newHead = new Block(head.col + 1, head.row);
  } else if (this.direction === 'down') {
    newHead = new Block(head.col, head.row + 1);
  } else if (this.direction === 'left') {
    newHead = new Block(head.col - 1, head.row);
  } else if (this.direction === 'up') {
    newHead = new Block(head.col, head.row - 1);
  }

  if (this.checkCollision(newHead)) {
    gameOver();
    return;
  }

  this.segments.unshift(newHead);

  if (newHead.equal(apple.position)) {
    score += 1;
    animationTime -= 1;
    apple.move(this.segments);
  } else {
    this.segments.pop();
  }
};

Snake.prototype.checkCollision = function (head) {
  let leftCollision = head.col === 0;
  let topCollision = head.row === 0;
  let rightCollision = head.col === widthInBlocks - 1;
  let bottomCollision = head.row === heightInBloks - 1;

  let wallCollision =
    leftCollision || topCollision || rightCollision || bottomCollision;

  let selfCollision = false;

  for (let i = 0; i < this.segments.length; i += 1) {
    if (head.equal(this.segments[i])) {
      selfCollision = true;
    }
  }

  return wallCollision || selfCollision;
};

Snake.prototype.setDirection = function (newDirection) {
  if (this.direction === 'up' && newDirection === 'down') {
    return;
  } else if (this.direction === 'right' && newDirection === 'left') {
    return;
  } else if (this.direction === 'down' && newDirection === 'up') {
    return;
  } else if (this.direction === 'left' && newDirection === 'right') {
    return;
  }

  this.nextDirection = newDirection;
};

const Apple = function () {
  this.position = new Block(10, 10);
};

Apple.prototype.draw = function () {
  this.position.drawCircle('limegreen');
};

Apple.prototype.move = function (occupiedBloks) {
  const randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
  const randomRow = Math.floor(Math.random() * (heightInBloks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);

  for (let i = 0; i < occupiedBloks.length; i += 1) {
    if (this.position.equal(occupiedBloks[i])) {
      this.move(occupiedBloks);
      return;
    }
  }
};

const drawBorder = function () {
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

const drawScore = function () {
  ctx.font = '20px Courier';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`Score: ${score}`, blockSize, blockSize);
};

// const updateScore = function () {
//   return (score += 1);
// };

const gameOver = function () {
  // clearInterval(intervalId);
  ctx.font = '60px Courier';
  ctx.fillStyle = 'Red';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Game Over', width / 2, height / 2);
  ctx.font = '30px Courier';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Your score :${score}`, width / 2, height / 1.5);
  drawScore();
  drawBorder();
  window.clearTimeout(timeoutId);
};

const snake = new Snake();
const apple = new Apple();

// const intervalId = setInterval(function () {
//   ctx.clearRect(0, 0, width, height);
//   drawScore();
//   // updateScore();
//   snake.move();
//   snake.draw();
//   apple.draw();
//   drawBorder();
// }, 100);

let animationTime = 100;
const gameLoop = function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  drawBorder();
  const timeoutId = setTimeout(gameLoop, animationTime);
};

gameLoop();

const directions = {
  37: 'left',
  39: 'right',
  38: 'up',
  40: 'down',
};

$('body').keydown(function (event) {
  console.log(event.keyCode);
  let newDirection = directions[event.keyCode];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
});
