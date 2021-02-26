// Path
// https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D#paths
const canvasPath = document.getElementById('canvas-path')
const ctxPath = canvasPath.getContext('2d')

// Pathで塗りつぶし
ctxPath.fillStyle = 'rgba(42, 54, 59, 1)'
ctxPath.beginPath()                           // 新規Path作成
ctxPath.moveTo(10, 10)                          // Pathの移動
ctxPath.lineTo(60, 80)                        // 現在のPathから指定位置まで線を描画
ctxPath.lineTo(150, 50)
ctxPath.fill()

// Pathで線引き
ctxPath.strokeStyle = 'rgba(232, 74, 95, 1)'
ctxPath.beginPath()                           // 新規Path作成
ctxPath.moveTo(100, 10)                          // Pathの移動
ctxPath.lineTo(160, 80)                        // 現在のPathから指定位置まで線を描画
ctxPath.lineTo(190, 50)
ctxPath.lineTo(200, 100)
ctxPath.lineTo(230, 10)
ctxPath.lineTo(260, 40)
ctxPath.stroke()
