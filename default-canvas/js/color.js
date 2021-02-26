// Color
const canvasColor = document.getElementById('canvas-color')
const ctxColor = canvasColor.getContext('2d')

// 塗りつぶしの色指定 fillStyle RGBA指定
ctxColor.fillStyle = 'rgba(42, 54, 59, 0.7)'
ctxColor.fillRect(10, 10, 150, 100)

ctxColor.fillStyle = 'rgba(232, 74, 95, 0.7)'
ctxColor.fillRect(100, 30, 150, 100)