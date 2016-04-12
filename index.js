//var end = require('./end')
//var game = require('./game')
//var guide = require('./guide')
//var start = require('./start')

var pixilib = require('pixi-lib')
var renderer = new PIXI.autoDetectRenderer(600, 1004, {
  transparent: true
})
var rafI = 0
var currentStage = null

var render = function (stage) {
  cancelAnimationFrame(rafI)
  if (!currentStage) {
    currentStage = stage
  }
  function animate () {
    if (currentStage.render) {
        currentStage.render()
    }
    currentStage.children.forEach(function(child) {
      if(child.render) {
        child.render()
      }
    })
    renderer.render(currentStage)
    rafI = requestAnimationFrame(animate)
  }
  animate()
}
document.body.appendChild(renderer.view)

module.exports = render
