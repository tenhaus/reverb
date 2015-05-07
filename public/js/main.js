var images = [
  '/public/img/painting.png',
  '/public/img/bg.png',
  '/public/img/IMG_20141106_100422.jpg',
  '/public/img/IMG_20141106_165332.jpg',
  '/public/img/IMG_20141107_164343.jpg',
  '/public/img/IMG_20141109_102034.jpg',
  '/public/img/IMG_20141113_145221.jpg',
  '/public/img/IMG_20141119_165054.jpg',
  '/public/img/IMG_20141120_112438.jpg',
  '/public/img/IMG_20141120_114243.jpg',
  '/public/img/IMG_20141122_104436.jpg',
  '/public/img/IMG_20141122_170902.jpg',
  '/public/img/IMG_20141122_222733.jpg',
  '/public/img/IMG_20141123_092342.jpg',
  '/public/img/IMG_20141124_111721.jpg',
  '/public/img/IMG_20141125_140653.jpg',
  '/public/img/IMG_20141126_114520.jpg',
  '/public/img/IMG_20141127_101145.jpg',
  '/public/img/IMG_20141127_122114.jpg',
  '/public/img/IMG_20141203_121525.jpg',
  '/public/img/IMG_20141204_215947.jpg',
  '/public/img/IMG_20141207_011025.jpg',
  '/public/img/IMG_20141209_154753.jpg',
  '/public/img/IMG_20141210_154709.jpg',
  '/public/img/IMG_20141227_115412.jpg',
  '/public/img/IMG_20141227_145326.jpg',
  '/public/img/IMG_20141227_153209.jpg',
  '/public/img/IMG_20141227_162228.jpg',
  '/public/img/IMG_20141227_162417.jpg',
  '/public/img/IMG_20141227_163948.jpg',
  '/public/img/IMG_20150101_164444.jpg',
  '/public/img/IMG_20150101_165256.jpg',
  '/public/img/IMG_20150101_182622.jpg',
  '/public/img/IMG_20150104_152519.jpg',
  '/public/img/IMG_20150105_143041.jpg',
  '/public/img/IMG_20150121_180109.jpg',
  '/public/img/IMG_20150122_124032.jpg',
  '/public/img/IMG_20150122_131841.jpg',
  '/public/img/IMG_20150122_133146.jpg',
  '/public/img/IMG_20150124_140838.jpg',
  '/public/img/IMG_20150124_141211.jpg',
  '/public/img/IMG_20150124_180935.jpg',
  '/public/img/IMG_20150127_151339.jpg',
];

$(document).ready(function() {
  var index = Math.floor(Math.random() * (images.length-1));
  console.log(index);

  if(index < images.length) {
    var image = 'url(' + images[index] + ')';
    $('body').css('background-image', image);
  }
});
