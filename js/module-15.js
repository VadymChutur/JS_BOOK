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

const Block = function () {
  this.col = col;
  this.row = row;
};

Block.prototype.drawSquare = function () {
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

Block.prototype.drawCircle = function () {
  let centerX = this.col * blockSize + blockSize / 2;
  let centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};

Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

const Snake = function () {
  this.segment = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];

  this.direction = 'right';
  this.nextDirection = 'right';
};

Snake.prototype.draw = function () {
  for (let i = 0; i < this.segment; i += 1) {
    this.segment[i].drawSquare('blue');
  }
};

Snake.prototype.move = function () {
  let head = this.segment[0];
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

  this.segment.unshift(newHead);

  if (newHead.equal(apple.position)) {
    score += 1;
    apple.move();
  } else {
    this.segment.pop();
  }
};

Snake.prototype.checkCollision = function () {
  let leftCollision = head.col === 0;
  let topCollision = head.row === 0;
  let rightCollision = head.col === widthInBlocks - 1;
  let bottomCollision = head.row === heightInBloks - 1;

  let wallCollision =
    leftCollision || topCollision || rightCollision || bottomCollision;

  let selfCollision = false;

  for (let i = 0; i < this.segments.length; i += 1) {
    if (head.equal(this.segment[i])) {
      selfCollision = true;
    }
  }

  return wallCollision || selfCollision;
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
  clearInterval(intervalId);
  ctx.font = '60px Courier';
  ctx.fillStyle = 'Red';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Game Over', width / 2, height / 2);
};

const intervalId = setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  // updateScore();
  //   snake.move();
  // snake.draw();
  //   apple.draw();
  drawBorder();
}, 100);
