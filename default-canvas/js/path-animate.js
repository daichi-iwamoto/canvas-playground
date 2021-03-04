// 線の数
const lineNum = 500

// path animate
const canvasPathleAnimate = document.getElementById('canvas-path-animate')
const ctxPathAnimate = canvasPathleAnimate.getContext('2d')

// Pathの始点
let PathAnimateStartWidth = []
let PathAnimateStartHeight = []
for (let i = 0; i < lineNum; i++) {
  PathAnimateStartHeight[i] = Math.floor(Math.random() * 201) + 1
  PathAnimateStartWidth[i] = Math.floor(Math.random() * 351) + 1
}

// Pathの動くSpeed
let PathAnimateSpeedWidth = []
let PathAnimateSpeedHeight = []
for (let i = 0; i < lineNum; i++) {
  PathAnimateSpeedHeight[i] = Math.floor(Math.random() * 5) + 1
  PathAnimateSpeedWidth[i] = Math.floor(Math.random() * 5) + 1
}

// Pathの動く幅
let PathAnimateMoveWidth = []
let PathAnimateMoveHeight = []
for (let i = 0; i < lineNum; i++) {
  PathAnimateMoveHeight[i] = 0
  PathAnimateMoveWidth[i] = 0
}

let PathAnimateID

function PathAnimate() {
  // Pathで線引き
  if (PathAnimateMoveWidth[0] <= 100) {
    ctxPathAnimate.clearRect(0, 0, 350, 200)
    
    for (let j = 0; j < lineNum; j++) {
      
      // 線の色分け
      if (j % 2 == 0) {
        ctxPathAnimate.strokeStyle = 'rgba(42, 54, 59, 0.8)'  
      } else {
        ctxPathAnimate.strokeStyle = 'rgba(232, 74, 95, 0.8)'
      }

      ctxPathAnimate.beginPath()
      ctxPathAnimate.moveTo(PathAnimateStartWidth[j], PathAnimateStartHeight[j])
      // 線の方向分け
      if (j % 2 == 0) {
        ctxPathAnimate.lineTo(PathAnimateStartWidth[j] + PathAnimateMoveWidth[j], PathAnimateStartHeight[j] + PathAnimateMoveHeight[j])
      } else {
        ctxPathAnimate.lineTo(PathAnimateStartWidth[j] - PathAnimateMoveWidth[j], PathAnimateStartHeight[j] - PathAnimateMoveHeight[j])
      }
      ctxPathAnimate.lineWidth = 5
      ctxPathAnimate.stroke()

      // 次の動く幅を指定 
      PathAnimateMoveWidth[j] += PathAnimateSpeedWidth[j]
      PathAnimateMoveHeight[j] += PathAnimateSpeedHeight[j]
    }
    
    PathAnimateID = requestAnimationFrame(PathAnimate)
  }
}

// アニメーションスタートボタン
const PathleAnimateBtn = document.getElementById('path-animate-btn')
PathleAnimateBtn.onclick = () => {
  if (!PathAnimateID) {
    PathAnimateID = requestAnimationFrame(PathAnimate)
  }
}

// アニメーションバックボタン
const PathleAnimateBack = document.querySelector('#path-animate-back').addEventListener('click', () => {
  cancelAnimationFrame(PathAnimateID)
  PathAnimateID = null

  ctxPathAnimate.clearRect(0, 0, 350, 200)

  for (let i = 0; i < lineNum; i++) {
    PathAnimateMoveHeight[i] = Math.floor(Math.random() * 5) + 1
    PathAnimateMoveWidth[i] = Math.floor(Math.random() * 5) + 1

    PathAnimateSpeedHeight[i] = Math.floor(Math.random() * 5) + 1
    PathAnimateSpeedWidth[i] = Math.floor(Math.random() * 5) + 1

    PathAnimateMoveHeight[i] = 0
    PathAnimateMoveWidth[i] = 0
  }
})
