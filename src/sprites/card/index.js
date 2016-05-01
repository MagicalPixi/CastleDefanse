var spriteFactory = require('./sprite.js')

var getSprite = function() {
  var mySprite = spriteFactory()
  mySprite.render = function () {}
}

module.exports = getSprite
