var pixiLib = require('pixi-lib')

var params = {
  textures: pixiLib.getTextures('card'),
  spriteName: 'card'
}

module.exports = function spriteFn(config) {
  config = config || {}
  var newParams = Object.assign(config, params)
  var mySprite = pixiLib.getIm(newParams)
  return mySprite
}
