// 图片切换
(function () {
  my$("body-top-right").onmouseover = function () {
    var arrow = document.getElementsByClassName("arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].style.display = 'block'
    }
  }
  my$("body-top-right").onmouseout = function () {
    var arrow = document.getElementsByClassName("arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].style.display = 'none'
    }
  }

  var index = 0;

  document.getElementsByClassName("arrow")[0].onclick = function () {
    if (index > 0) {
      var imgS = document.getElementsByClassName('body-top-right-img')
      for (var i = 0; i < imgS.length; i++) {
        if (isNaN(parseInt(imgS[i].src.substring(imgS[i].src.length - 6, imgS[i].src.length)))) {
          imgS[i].src = 'images/news' + (parseInt(imgS[i].src.substring(imgS[i].src.length - 5, imgS[i].src.length)) - 6) + '.jpg'
        } else {
          imgS[i].src = 'images/news' + (parseInt(imgS[i].src.substring(imgS[i].src.length - 6, imgS[i].src.length)) - 6) + '.jpg'
        }
      }
    index--;
    }
  }

  document.getElementsByClassName("arrow")[1].onclick = function () {
    if (index < 3) {
      var imgS = document.getElementsByClassName('body-top-right-img')
      for (var i = 0; i < imgS.length; i++) {
        if (isNaN(parseInt(imgS[i].src.substring(imgS[i].src.length - 6, imgS[i].src.length)))) {
          imgS[i].src = 'images/news' + (parseInt(imgS[i].src.substring(imgS[i].src.length - 5, imgS[i].src.length)) + 6) + '.jpg'
        } else {
          imgS[i].src = 'images/news' + (parseInt(imgS[i].src.substring(imgS[i].src.length - 6, imgS[i].src.length)) + 6) + '.jpg'
        }
      }
    index++;
    }
  }
})();
