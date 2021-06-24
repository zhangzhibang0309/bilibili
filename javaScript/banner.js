var startingPoint
var header = document.querySelector('header')

// 鼠标进入
header.addEventListener('mouseenter', function (e) {
  startingPoint = e.clientX
  header.classList.add('moving')
})

// 鼠标移出
header.addEventListener('mouseout', function (e) {
  header.classList.remove('moving')
  header.style.setProperty('--percentage', 0.5)
})

// 鼠标移动
header.addEventListener('mousemove', function (e) {
  let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5
  header.style.setProperty('--percentage', percentage)
})
