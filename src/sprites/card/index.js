var spriteFactory = require('./sprite.js')
var params = require('./params.js').params
var keys = require('./params.js').keys
var getSprite = function(key) {
  key = key || keys.first
  var sprite= spriteFactory(params[key])
  sprite.render = function () {}
  sprite.interactive = true
  sprite.on('touchstart', function(e) {
    var touch = e.data.originalEvent.touches[0]
    this.startScreenX = touch.screenX
    this.startScreenY = touch.screenY
    this.startX = this.x
    this.startY = this.y
    this.scale.x = 1.1
    this.scale.y = 1.1
  })
  sprite.on('touchmove', function(e) {
    var touch = e.data.originalEvent.touches[0]
    var offsetX = touch.screenX - this.startScreenX
    var offsetY = touch.screenY - this.startScreenY
    this.x = this.startX + offsetX
    this.y = this.startY + offsetY
  })
  sprite.on('touchend', function() {
    this.scale.x = 1.0
    this.scale.y = 1.0
  })
  return sprite
}

module.exports = {
  getSprite: getSprite,
  keys: keys
}
