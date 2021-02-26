// Arc
const canvasArc = document.getElementById('canvas-arc')
const ctxArc = canvasArc.getContext('2d')

// Arcで塗りつぶし
ctxArc.fillStyle = 'rgba(42, 54, 59, 1)'
ctxArc.beginPath()
ctxArc.arc(50, 70, 30, 0, Math.PI * 2, true)    // 円のPath指定
ctxArc.fill()

// Arcで線引き
ctxArc.strokeStyle = 'rgba(232, 74, 95, 1)'
ctxArc.beginPath()
ctxArc.arc(60, 80, 30, 0, Math.PI * 2, true)    // 円のPath指定
ctxArc.stroke()

ctxArc.beginPath()
ctxArc.arc(70, 60, 30, 0, (Math.PI * 2) * 0.8, true)  // 最後の引数は時計回りかどうか
ctxArc.stroke()

ctxArc.beginPath()
ctxArc.arc(150, 60, 30, 0, (Math.PI * 2) * 0.8, false)
ctxArc.stroke()

ctxArc.beginPath()
ctxArc.arc(160, 60, 30, 0, (Math.PI * 2) * 0.7, false)
ctxArc.stroke()
ctxArc.beginPath()
ctxArc.arc(170, 60, 30, 0, (Math.PI * 2) * 0.6, false)
ctxArc.stroke()
ctxArc.beginPath()
ctxArc.arc(180, 60, 30, 0, (Math.PI * 2) * 0.5, false)
ctxArc.stroke()
ctxArc.beginPath()
ctxArc.arc(190, 60, 30, 0, (Math.PI * 2) * 0.4, false)
ctxArc.stroke()