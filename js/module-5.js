// const headingElement = document.getElementById('main-heading');
// console.log(headingElement);
// let newHeadingText = prompt('Please provide a new heading');
// headingElement.innerHTML = newHeadingText;

let newHeadingText = 'Please provide a new heading:';
$('#main-heading').text(newHeadingText);
$('body').append('<p>This is a new pararaph</p>');
for (let i = 0; i < 3; i += 1) {
  let hobby = 'Tell me one of your hobbies!';
  $('body').append(`<p>${hobby}</p>`).hide();
}
$('body').show(1000);
$('h1').fadeOut(3000).slideUp(1000).fadeIn(2000).slideDown(1000);
$('p').fadeOut(0).fadeIn(4000);
