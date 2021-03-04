// Chest
const canvasChest02 = document.getElementById('canvas-chest02')
const ctxChest02 = canvasChest02.getContext('2d')

// 前面
ctxChest02.strokeStyle = 'rgba(0, 0, 0, 1)'
ctxChest02.fillStyle = 'rgba(232, 213, 183, 1)'

ctxChest02.beginPath()
ctxChest02.moveTo(140, 50)
ctxChest02.lineTo(140, 150)
ctxChest02.lineTo(210, 170)
ctxChest02.lineTo(210, 70)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

// 上面
ctxChest02.beginPath()
ctxChest02.moveTo(140, 50)
ctxChest02.lineTo(170, 40)
ctxChest02.lineTo(240, 60)
ctxChest02.lineTo(210, 70)
ctxChest02.fill()
ctxChest02.stroke()

// 右面
ctxChest02.beginPath()
ctxChest02.moveTo(240, 60)
ctxChest02.lineTo(240, 160)
ctxChest02.lineTo(210, 170)
ctxChest02.lineTo(210, 70)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

// 扉の線と取っ手
ctxChest02.fillStyle = 'rgba(255, 255, 255, 1)'

ctxChest02.beginPath()
ctxChest02.arc(165, 110, 3, 0, Math.PI * 2, true)
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.arc(185, 115, 3, 0, Math.PI * 2, true)
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(175, 60)
ctxChest02.lineTo(175, 160)
ctxChest02.stroke()

// 右ポール 上
ctxChest02.beginPath()
ctxChest02.moveTo(240, 20)
ctxChest02.lineTo(240, 30)
ctxChest02.lineTo(210, 40)
ctxChest02.lineTo(210, 30)
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(210, 40)
ctxChest02.lineTo(210, 30)
ctxChest02.lineTo(200, 27)
ctxChest02.lineTo(200, 37)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

// 右ポール 下
ctxChest02.beginPath()
ctxChest02.moveTo(240, 60)
ctxChest02.lineTo(240, 50)
ctxChest02.lineTo(210, 60)
ctxChest02.lineTo(210, 70)
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(210, 60)
ctxChest02.lineTo(210, 70)
ctxChest02.lineTo(200, 67)
ctxChest02.lineTo(200, 57)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(200, 57)
ctxChest02.lineTo(230, 47)
ctxChest02.lineTo(240, 50)
ctxChest02.lineTo(210, 60)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

// ポール棒
ctxChest02.beginPath()
ctxChest02.moveTo(230, 53)
ctxChest02.lineTo(230, 33)
ctxChest02.lineTo(220, 36.5)
ctxChest02.lineTo(220, 56.5)
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(220, 36.5)
ctxChest02.lineTo(220, 56.5)
ctxChest02.lineTo(213.5, 51.5)
ctxChest02.lineTo(213.5, 39.5)
ctxChest02.fill()
ctxChest02.stroke()

// 左ポール 上
ctxChest02.beginPath()
ctxChest02.moveTo(140, 10)
ctxChest02.lineTo(140, 20)
ctxChest02.lineTo(150, 23)
ctxChest02.lineTo(150, 13)
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(150, 23)
ctxChest02.lineTo(150, 13)
ctxChest02.lineTo(190, 15)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

// 左ポール 下
ctxChest02.beginPath()
ctxChest02.moveTo(140, 40)
ctxChest02.lineTo(140, 50)
ctxChest02.lineTo(150, 53)
ctxChest02.lineTo(150, 43)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(180, 43)
ctxChest02.lineTo(180, 33)
ctxChest02.lineTo(150, 43)
ctxChest02.lineTo(150, 53)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(180, 33)
ctxChest02.lineTo(150, 43)
ctxChest02.lineTo(140, 40)
ctxChest02.lineTo(170, 30)
ctxChest02.fill()
ctxChest02.stroke()

// 天井
ctxChest02.fillStyle = 'rgba(232, 213, 183, 1)'

ctxChest02.beginPath()
ctxChest02.moveTo(140, 0)
ctxChest02.lineTo(140, 10)
ctxChest02.lineTo(210, 30)
ctxChest02.lineTo(240, 20)
ctxChest02.lineTo(240, 0)
ctxChest02.closePath()
ctxChest02.fill()
ctxChest02.stroke()

ctxChest02.beginPath()
ctxChest02.moveTo(210, 0)
ctxChest02.lineTo(210, 30)
ctxChest02.stroke()


// Data URL 取得
// console.log(canvasChest02.toDataURL('image/png', 1.0))