// path animate
const canvasPathleAnimate02 = document.getElementById('canvas-path-animate-02')
const ctxPathAnimate02 = canvasPathleAnimate02.getContext('2d')

let PathAnimate02ID

// Pathの始点
let PathAnimate02Path = []

function PathAnimate02() {

  let Path02Counter = 0

  ctxPathAnimate02.clearRect(0, 0, 350, 200)

  ctxPathAnimate02.beginPath()
  if ((Math.floor(Math.random() * 10) + 1) >= 9 ){
    ctxArcAnimate.strokeStyle = 'rgba(42, 54, 59, 1)'  
  } else {
    ctxPathAnimate02.strokeStyle = 'rgba(232, 74, 95, 1)'
  }
  ctxPathAnimate02.lineWidth = 1
 
  for (let i = 0; i <= 350; i +=3) {
    let Path02Add = Math.floor(Math.random() * 100) - 50
    PathAnimate02Path[Path02Counter] = [i, 100 + Path02Add]

    // 初回は moveTo
    if (Path02Counter === 0) {
      ctxPathAnimate02.moveTo(PathAnimate02Path[Path02Counter][0], PathAnimate02Path[Path02Counter][1])
    } else {
      ctxPathAnimate02.lineTo(PathAnimate02Path[Path02Counter][0], PathAnimate02Path[Path02Counter][1])
    }

    Path02Counter++
  }

  ctxPathAnimate02.stroke()
  PathAnimate02ID = requestAnimationFrame(PathAnimate02)
}

// アニメーションスタートボタン
const PathleAnimate02Btn = document.getElementById('path-animate-02-btn')
PathleAnimate02Btn.onclick = () => {
  if (!PathAnimate02ID) {
    PathAnimate02ID = requestAnimationFrame(PathAnimate02)
  }
}

// アニメーションバックボタン
const PathleAnimate02Back = document.querySelector('#path-animate-02-back').addEventListener('click', () => {
  cancelAnimationFrame(PathAnimate02ID)
  PathAnimate02ID = null

  ctxPathAnimate02.clearRect(0, 0, 350, 200)
  for (let i = 0; i < lineNum; i++) {
    PathAnimate02MoveHeight[i] = Math.floor(Math.random() * 5) + 1
    PathAnimate02MoveWidth[i] = Math.floor(Math.random() * 5) + 1
  }
})
