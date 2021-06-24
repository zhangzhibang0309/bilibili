function my$(id) {
  return document.getElementById(id);
}

var util = (function () {
// 动漫函数封装
  function animate(element, target, widthSigle, initialPx) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
      //获取元素的当前的位置,数字类型
      var current = element.offsetLeft;
      //每次移动的距离
      var dValueStart = Math.abs(Math.abs(current) - Math.abs(initialPx))
      var dValueEnd = Math.abs(Math.abs(current) - Math.abs(target))
      var step = 90
      if (dValueStart < 50 || dValueEnd < 50) {
        step = 2
      } else if (dValueStart < 100 || dValueEnd < 100) {
        step = 7
      } else if (dValueStart < 200 || dValueEnd < 200) {
        step = 20
      } else if (dValueStart < 300 || dValueEnd < 300) {
        step = 30
      }
      step = current < target ? step : -step;
      //当前移动到位置
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        //清理定时器
        clearInterval(element.timeId);
        //直接到达目标
        element.style.left = target + "px";
      }
    }, 30);
  }

  function animate2(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
      //获取元素的当前的位置,数字类型
      var current = element.offsetLeft;
      //每次移动的距离
      var step = 1;
      step = current < target ? step : -step;
      //当前移动到位置
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        //清理定时器
        clearInterval(element.timeId);
        //直接到达目标
        element.style.left = target + "px";
      }
    }, 40);
  }

  var aaa = 123
  var obj = {}
  obj.aaa = aaa
  obj.animate = animate
  obj.animate2 = animate2
  return obj
})()
