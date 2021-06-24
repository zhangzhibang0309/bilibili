var carousel = my$('body-top-carousel')
var frames = my$('body-top-carousel-ul')
var widthImg = frames.children[0].offsetWidth
var index = 1
var activeIcon = my$('activeIcon')
var activeIcpnLeft = 20
var timeID = setInterval(function fun() {
  util.animate(frames, -index * widthImg, widthImg, frames.offsetLeft);
  util.animate2(activeIcon, index * activeIcpnLeft);
  index++
  if (index == 5) {
    index = 0
  }
}, 4000);

