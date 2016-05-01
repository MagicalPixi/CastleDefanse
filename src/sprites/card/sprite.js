var pixiLib = require('pixi-lib')

var params = {
  textures: pixiLib.getTextures('card'),
  spriteName: 'card'
}

module.exports = function spriteFn() {
  var mySprite = pixiLib.getIm(params)
  return mySprite
}
