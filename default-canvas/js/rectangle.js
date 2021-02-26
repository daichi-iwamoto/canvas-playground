// Rectangle
const canvasRectangle = document.getElementById('canvas-rectangle')
const ctxRectangle = canvasRectangle.getContext('2d')

// 矩形の塗りつぶし描画
ctxRectangle.fillStyle = 'rgba(42, 54, 59, 0.7)'
ctxRectangle.fillRect(10, 10, 150, 100)

// 輪郭描画の色指定 / 矩形の輪郭描画
ctxRectangle.strokeStyle = 'rgba(232, 74, 95, 0.7)'
ctxRectangle.strokeRect(100, 30, 150, 100)

// 領域の消去
ctxRectangle.clearRect(50, 50, 120, 70)