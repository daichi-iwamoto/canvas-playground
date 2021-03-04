// Chest
const canvasChest01 = document.getElementById('canvas-chest01')
const ctxChest01 = canvasChest01.getContext('2d')

// 前面
ctxChest01.strokeStyle = 'rgba(0, 0, 0, 1)'
ctxChest01.fillStyle = 'rgba(232, 213, 183, 1)'

ctxChest01.beginPath()
ctxChest01.moveTo(140, 50)
ctxChest01.lineTo(140, 150)
ctxChest01.lineTo(210, 170)
ctxChest01.lineTo(210, 70)
ctxChest01.closePath()
ctxChest01.fill()
ctxChest01.stroke()

// 上面
ctxChest01.beginPath()
ctxChest01.moveTo(140, 50)
ctxChest01.lineTo(170, 40)
ctxChest01.lineTo(240, 60)
ctxChest01.lineTo(210, 70)
ctxChest01.fill()
ctxChest01.stroke()

// 右面
ctxChest01.beginPath()
ctxChest01.moveTo(240, 60)
ctxChest01.lineTo(240, 160)
ctxChest01.lineTo(210, 170)
ctxChest01.lineTo(210, 70)
ctxChest01.closePath()
ctxChest01.fill()
ctxChest01.stroke()

// 扉の線と取っ手
ctxChest01.fillStyle = 'rgba(255, 255, 255, 1)'

ctxChest01.beginPath()
ctxChest01.arc(165, 110, 3, 0, Math.PI * 2, true)
ctxChest01.fill()
ctxChest01.stroke()

ctxChest01.beginPath()
ctxChest01.arc(185, 115, 3, 0, Math.PI * 2, true)
ctxChest01.fill()
ctxChest01.stroke()

ctxChest01.beginPath()
ctxChest01.moveTo(175, 60)
ctxChest01.lineTo(175, 160)
ctxChest01.stroke()

// Data URL 取得
// console.log(canvasChest01.toDataURL('image/png', 1.0))