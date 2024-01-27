const width = 598;
const heigth = 368;
let clikcs = 0;

const getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(heigth),
};

var getDistance = function (event, target) {
  const x = target.x;
  const y = target.y;
  // console.log(target.x);
  // console.log(event.offsetX);
  // console.log(event.offsetX - x);
  let diffx = event.offsetX - x;
  // console.log(Math.sqrt(diffx * diffx));
  let diffy = event.offsetY - y;
  return Math.sqrt(diffx * diffx + diffy * diffy);
};

const getDistanceHint = function (distance) {
  console.log(distance);
  if (distance < 10) {
    return 'Boiling hot!';
  } else if (distance < 20) {
    return 'Really hot!';
  } else if (distance < 40) {
    return 'Hot';
  } else if (distance < 80) {
    return 'Warm';
  } else if (distance < 160) {
    return 'Cold';
  } else if (distance < 320) {
    return 'Really cold';
  } else {
    return 'Freezing!';
  }
};

console.log(target);
// console.log(getDistance);
$('#map').click(function (event) {
  clikcs += 1;
  // console.log({ event, target });
  const distance = getDistance(event, target);
  console.log(distance);
  let distanceHint = getDistanceHint(distance);
  console.log(distanceHint);
  $('#distance').text(distanceHint);
  $('#distance').append(` ${clikcs}/150`);

  if (distance < 8) {
    alert(`Found the treasure in ${clikcs} clikcs!`);
  }
  if (clikcs > 150) {
    alert('GAME OWER');
  }
});
