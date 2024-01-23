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

let letOffset = 0;
const moveHanding = function () {
  $('#main-heading').offset({ left: letOffset });
  letOffset += 1;
  if (letOffset > 200) {
    letOffset = 0;
  }
};

// setInterval(moveHanding, 15);
