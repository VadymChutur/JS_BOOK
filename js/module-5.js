// const headingElement = document.getElementById('main-heading');
// console.log(headingElement);
// let newHeadingText = prompt('Please provide a new heading');
// headingElement.innerHTML = newHeadingText;

// let newHeadingText = 'Please provide a new heading:';
// $('#main-heading').text(newHeadingText);
// $('body').append('<p>This is a new pararaph</p>');
// for (let i = 0; i < 3; i += 1) {
//   let hobby = 'Tell me one of your hobbies!';
//   $('body').append(`<p>${hobby}</p>`).hide();
// }
// $('body').show(1000);
// $('h1').fadeOut(3000).slideUp(1000).fadeIn(2000).slideDown(1000);
// $('p').fadeOut(0).fadeIn(4000);

const friends = ['Jenny', 'Vitalik', 'Serg'];
$('h1').text('My friends');

// for (let i = 0; i < 5; i += 1) {
//   $('h1')
//     .fadeOut(i * 1000)
//     .fadeIn(i * 1000);
// }

for (let i = 0; i < friends.length; i += 1) {
  $('body').append(`<p id='${i}'>${friends[i]}</p>`);
  console.log(`this ${i} iter`);
  $(`#${i}`).hide();
  // $(`#${i}`).fadeOut(5000);
  // $(`#${i}`).fadeIn(5000);
  // for (let j = 0; j < friends.length; j += 1) {
  //   $(`#${j}`).fadeIn(2000).duration();
  // }
}
$('#0').delay(2000).fadeIn(1000);
$('#1').delay(4000).fadeIn(1000);
$('#2').delay(6000).fadeIn(1000);
$('#0').append(' smells sweet');
$('#1').append(' smels whiskye');
$('#2').append(' smels cigarets');
$('h1').fadeTo(2000, 0.5);
