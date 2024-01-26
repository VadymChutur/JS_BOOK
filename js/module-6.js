// const timeUp = function () {
//   console.log('Time`s up!');
// };

// setTimeout(timeUp, 3000);
// console.log(setTimeout(timeUp, 5000));

// let counter = 5;
// const printMessage = function () {
//   console.log(`You have been starting at your console for ${counter} seconds`);
//   counter += 5;
// };

// const intervalId = setInterval(printMessage, 5000);
// clearInterval(intervalId);

// let letOffset = 0;
let leftOffset = 10;
let topOffset = 20;
let timeinterval = 120;
let clicks = 0;

const moveHanding = function () {
  if (leftOffset < 200 && topOffset === 20) {
    $('#main-heading').offset({ left: leftOffset });
    leftOffset += 1;
  } else if (leftOffset >= 200 && topOffset < 200) {
    $('#main-heading').offset({ top: topOffset });
    topOffset += 1;
  } else if (topOffset === 200 && leftOffset > 10) {
    $('#main-heading').offset({ left: leftOffset });
    leftOffset -= 1;
  } else {
    $('#main-heading').offset({ top: topOffset });
    topOffset -= 1;
  }
  // console.log(leftOffset, topOffset);
};

let intervalId = setInterval(moveHanding, timeinterval);

$('#main-heading').click(function () {
  clearInterval(intervalId);
  timeinterval /= 2;
  clicks += 1;

  if (clicks > 10) {
    $('#main-heading').text('You win');
  } else {
    intervalId = setInterval(moveHanding, timeinterval);
  }
});

// // $('h1').click(function () {
// //   clearInterval(intervalId);
// // });

// const clickHeandler = function () {
//   timeinterval /= 2;
//   console.log(timeinterval);
//   // $('#main-heading').offset({
//   //   left: event.pageX,
//   //   top: event.pageY,
//   // });
//   // console.log(`Click! ${event.pageX} ${event.pageY}`);
// };

// const clickHeandlerClear = function () {
//   console.log('clear');
//   clearInterval(intervalId);
// };

// $('html').click(clickHeandler);
// $('h1').click(clickHeandlerClear);

// $('html').mousemove(function (event) {
//   console.log(`Click! ${event.pageX} ${event.pageY}`);
// });
