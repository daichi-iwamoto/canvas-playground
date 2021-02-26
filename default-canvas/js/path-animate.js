// path animate
const canvasPathleAnimate = document.getElementById('canvas-path-animate')
const ctxPathAnimate = canvasPathleAnimate.getContext('2d')

let PathAnimateWidth = 0

let PathAnimateID

function PathAnimate() {  
  ctxPathAnimate.clearRect(0, 0, 300, 150)

  PathAnimateWidth += 5

  ctxPathAnimate.fillStyle = 'rgba(42, 54, 59, 1)'
  ctxPathAnimate.fillRect(0, 10, PathAnimateWidth, 30)
  
  ctxPathAnimate.fillStyle = 'rgba(232, 74, 95, 1)'
  ctxPathAnimate.fillRect(0, 80, PathAnimateWidth, 30)

  // Pathで線引き
  // ctxPathAnimate.strokeStyle = 'rgba(232, 74, 95, 1)'
  // ctxPathAnimate.beginPath()                           // 新規Path作成
  // ctxPathAnimate.moveTo(100, 10)                       // Pathの移動
  // ctxPathAnimate.lineTo(160, 80)                       // 現在のPathから指定位置まで線を描画
  // ctxPathAnimate.lineTo(190, 50)
  // ctxPathAnimate.lineTo(200, 100)
  // ctxPathAnimate.lineTo(230, 10)
  // ctxPathAnimate.lineTo(260, 40)
  // ctxPathAnimate.stroke()


  if (PathAnimateWidth <= 300) {
    PathAnimateID = requestAnimationFrame(PathAnimate)
  }
}

// アニメーションスタートボタン
const PathleAnimateBtn = document.getElementById('path-animate-btn')
PathleAnimateBtn.onclick = () => {
  PathAnimateID = requestAnimationFrame(PathAnimate)
}

// アニメーションバックボタン
const PathleAnimateBack = document.querySelector('#path-animate-back').addEventListener('click', () => {
  cancelAnimationFrame(PathAnimateID)
  ctxPathAnimate.clearRect(0, 0, 300, 150)
  PathAnimateWidth = 0
})
