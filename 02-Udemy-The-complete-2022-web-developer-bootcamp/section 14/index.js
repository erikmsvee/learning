// $('h1').addClass('big-title margin');
// $('h1').removeClass('big-title margin');
// $('h1').hasClass('big-title');
// $('h1').text('New title');
// $('button').html('<strong>Hello</strong>');
// $('a').attr('href', 'https://www.google.no');

// $('h1').click(() => {
//   $('h1').css('color', 'green');
// });

$('button').click(() => {
  $('h1').css('color', 'green');
});

$('input').keypress((event) => {
  $('h1').text(event.key);
})

$('.class-button').click(() => {
  $('h1').css('color', 'red');
});

$('#id-button').click(() => {
  $('h1').css('color', 'blue');
});

// $('button').remove();