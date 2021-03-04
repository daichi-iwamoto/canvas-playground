// rectangle animate
const canvasReactangleAnimate = document.getElementById('canvas-rectangle-animate')
const ctxRectangleAnimate = canvasReactangleAnimate.getContext('2d')

let width = 0

let AnimateID

function rectangleAnimate() {  
  ctxRectangleAnimate.clearRect(0, 0, 350, 200)

  width += 10

  ctxRectangleAnimate.fillStyle = 'rgba(42, 54, 59, 1)'
  ctxRectangleAnimate.fillRect(0, 50, width, 30)
  
  ctxRectangleAnimate.fillStyle = 'rgba(232, 74, 95, 1)'
  ctxRectangleAnimate.fillRect(0, 100, width, 30)

  if (width <= 350) {
    AnimateID = requestAnimationFrame(rectangleAnimate)
  }
}

// アニメーションスタートボタン
const ReactangleAnimateBtn = document.getElementById('rectangle-animate-btn')
ReactangleAnimateBtn.onclick = () => {
  AnimateID = requestAnimationFrame(rectangleAnimate)
}

// アニメーションバックボタン
const ReactangleAnimateBack = document.querySelector('#rectangle-animate-back').addEventListener('click', () => {
  cancelAnimationFrame(AnimateID)
  ctxRectangleAnimate.clearRect(0, 0, 350, 200)
  width = 0
})
