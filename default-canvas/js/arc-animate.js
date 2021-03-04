// arc animate
const canvasArcleAnimate = document.getElementById('canvas-arc-animate')
const ctxArcAnimate = canvasArcleAnimate.getContext('2d')

// 円の出現位置
let ArcPath = [[Math.floor(Math.random() * 350) + 1, Math.floor(Math.random() * 200) + 1]]
// 円のサイズ
let ArcSize = [Math.floor(Math.random() * 20) + 5]

function ArcAnimate() {
  ctxArcAnimate.clearRect(0, 0, 350, 200)
  
  // 円描画
  ArcPath.map((value, index) => {

    // 左右色分け
    if (value[0] >= 175) {
      ctxArcAnimate.strokeStyle = 'rgba(232, 74, 95, 1)'
      ctxArcAnimate.fillStyle = 'rgba(42, 54, 59, 1)'  
    } else {
      ctxArcAnimate.strokeStyle = 'rgba(42, 54, 59, 1)'  
      ctxArcAnimate.fillStyle = 'rgba(232, 74, 95, 1)'
    }

    ctxArcAnimate.beginPath()
    ctxArcAnimate.arc(value[0], value[1], ArcSize[index], 0, Math.PI * 2, true)

    // 線描画と塗りつぶし分け
    if (index % 2 ===  0) {
      ctxArcAnimate.stroke()
    } else {
      ctxArcAnimate.fill()
      ctxArcAnimate.stroke()
    }
  })


  ArcPath.push([Math.floor(Math.random() * 350) + 1, Math.floor(Math.random() * 200) + 1])
  ArcSize.push([Math.floor(Math.random() * 20) + 5])

  ArcAnimateID = requestAnimationFrame(ArcAnimate)
}

// アニメーションスタートボタン
const ArcleAnimateBtn = document.getElementById('arc-animate-btn')
ArcleAnimateBtn.onclick = () => {
  ArcAnimateID = requestAnimationFrame(ArcAnimate)
}

// アニメーションバックボタン
const ArcleAnimateBack = document.querySelector('#arc-animate-back').addEventListener('click', () => {
  cancelAnimationFrame(ArcAnimateID)
  ctxArcAnimate.clearRect(0, 0, 350, 200)
  ArcPath = [[Math.floor(Math.random() * 350) + 1, Math.floor(Math.random() * 200) + 1]]
  ArcSize = [Math.floor(Math.random() * 20) + 5]
})
