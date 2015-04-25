var images = [
  '/public/img/painting.png',
  '/public/img/bg.png'
];

$(document).ready(function() {
  var index = Math.random(images.length - 1);
  index = Math.round(index);

  if(index < images.length) {
    var image = 'url(' + images[index] + ')';
    $('body').css('background-image', image);
  }
});
