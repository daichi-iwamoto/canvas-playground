// Text
const canvasText = document.getElementById('canvas-text')
const ctxText = canvasText.getContext('2d')

// font指定
ctxText.font = '48px serif'

// 文字の塗りつぶし
ctxText.fillStyle = 'rgba(42, 54, 59, 1)'
ctxText.fillText('Text Test', 30, 40)

// 文字のアウトライン
ctxText.strokeStyle = 'rgba(232, 74, 95, 1)'
ctxText.strokeText('Text Test', 50, 50)

// 文字サイズの取得 1
let textSize = ctxText.measureText('Text Test')
ctxText.strokeStyle = 'rgba(232, 74, 95, 0.5)'
ctxText.strokeText('Text Test', 300 - textSize.width, 90)

// 文字サイズの取得 2
ctxText.font = '28px serif'
ctxText.fillStyle = 'rgba(232, 74, 95, 1)'
textSize = ctxText.measureText('Text Test')
ctxText.fillText('Text Test', 300 - textSize.width, 120)
