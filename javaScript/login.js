// 表单框
(function () {
  my$("contribute-text").onclick = function () {
    my$("login").style.display = "block";
    my$("zhezhao").style.display = "block";
    console.log('aaa');
  };

//获取关闭,注册点击事件,隐藏登录框和遮挡层
  my$("closeBtn").onclick = function () {
    my$("login").style.display = "none";
    my$("zhezhao").style.display = "none";
  };

  my$("title").onmousedown = function (e) {
    var spaceX = e.clientX - my$("login").offsetLeft;
    var spaceY = e.clientY - my$("login").offsetTop;
    //移动的事件
    document.onmousemove = function (e) {
      var x = e.clientX - spaceX + 400;
      var y = e.clientY - spaceY;
      my$("login").style.left = x + "px";
      my$("login").style.top = y + "px";
    }

    // 防止一直跟随鼠标移动
    document.onmouseup = function () {
      document.onmousemove = null;
    };
  };

//  浮动切换二维码
  my$("qr-login-top").onmouseover = function () {
    this.className = 'qr-login-top-b'
  }
  my$("qr-login-top").onmouseout = function () {
    this.className = 'qr-login-top-a'
  }
})();

